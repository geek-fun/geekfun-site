---
title: "Building AI Agents in Production: Memory & Context Compaction (Part 4)"
description: How DocKit manages LLM context windows with token-accurate budgeting, two-tier compaction (microcompact + LLM summary), and a model registry that knows the real usable window for every major provider.
head:
  - - meta
    - name: keywords
      content: LLM context management, agent memory management, context window compaction, token counting, context compaction, LLM context overflow, agent long context, tiktoken, context budget
  - - link
    - rel: canonical
      href: https://www.geekfun.club/blog/building-ai-agent-memory
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/blog/building-ai-agent-memory
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/blog/building-ai-agent-memory
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/blog/building-ai-agent-memory
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Building AI Agents in Production: Memory & Context Compaction (Part 4)",
        "description": "How DocKit manages LLM context windows with token-accurate budgeting, two-tier compaction (microcompact + LLM summary), and a model registry that knows the real usable window for every major provider.",
        "image": "https://www.geekfun.club/og/master-en.png",
        "author": { "@type": "Organization", "name": "GEEKFUN", "url": "https://www.geekfun.club" },
        "publisher": { "@type": "Organization", "name": "GEEKFUN", "logo": { "@type": "ImageObject", "url": "https://www.geekfun.club/geekfun.png" } },
        "datePublished": "2026-05-22",
        "dateModified": "2026-05-22",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.geekfun.club/blog/building-ai-agent-memory" },
        "keywords": ["context management", "token counting", "LLM compaction", "agent memory", "context window"],
        "articleSection": "AI Agent Engineering"
      }
---

# Building AI Agents in Production: Memory & Context Compaction (Part 4)

*Part 4 of 5 — [Part 1: Architecture](/blog/building-ai-agent-architecture) · [Part 2: Tool System Design](/blog/building-ai-agent-tools) · [Part 3: Permissions & Confirmation](/blog/building-ai-agent-permissions) · [Part 5: Persistence & Resilience](/blog/building-ai-agent-persistence)*

---

Every LLM has a context window. In a toy demo, you never hit it. In a production agent that calls tools, accumulates results, and runs across many conversation turns, you hit it constantly.

When you do, the results are ugly. The API returns a 400 error. The conversation is simply truncated from the beginning, causing the LLM to lose track of earlier context without warning. Tool pairs get split — an assistant message references a tool call that no longer exists in the context, causing the LLM to hallucinate or loop.

DocKit addresses this with a system built around three components: a token counter that works without the LLM's cooperation, a model registry that knows the real usable window for each provider, and a two-tier compaction strategy that manages context automatically.

## Why "just count tokens" is harder than it sounds

The fundamental problem with token counting across multiple LLM providers is that tokenizers aren't standardized or even publicly distributed. OpenAI publishes `tiktoken`, which gives exact BPE token counts. Anthropic does not. DeepSeek does not. If you want to count tokens for a Claude or DeepSeek conversation, you're working without an official tool.

DocKit's token counter takes a pragmatic approach: use exact BPE when available, fall back to conservative heuristics when not.

For OpenAI models, the system uses `tiktoken-rs` with the appropriate BPE encoding for each model family — `cl100k_base` for GPT-4 and older models, `o200k_base` for the newer o-series and GPT-4o variants. The per-message overhead constants match OpenAI's documented accounting (4 tokens per message, 3 tokens for the reply envelope), so the counts line up with what the API actually charges.

For Anthropic, DeepSeek, and generic OpenAI-compatible providers, the system uses character-ratio heuristics. Anthropic uses roughly 3.5 characters per token — a number derived from analyzing typical English text through their tokenizer. DeepSeek uses 3.2, reflecting its somewhat different tokenization of code and technical content. Generic providers default to 3.3.

The heuristics always round up. An overestimate of token usage means the system compacts slightly earlier than strictly necessary. An underestimate would mean trusting that you're safe when you're not, which causes the exact API errors the compaction system exists to prevent. Conservative is the right call.

## The model registry

Before you can reason about token budgets, you need to know each model's context window and how much of it you can actually use.

These are different numbers. A model with a 128K token context window doesn't give you 128K tokens for conversation history. The model needs room to generate a response. Without an output reserve, the model might have as few as a thousand tokens of generation capacity left, producing truncated or incoherent responses.

The model registry maps each supported model to three values:

- **Context window** — the total input + output limit for the model
- **Output reserve** — tokens set aside for the model's response
- **Tokenizer family** — which counting method to use

The usable window — the denominator for all compaction decisions — is simply `context_window - output_reserve`. This "usable window" is what the system actually manages.

The reserves are conservative by default: 16,000 tokens for OpenAI models, 20,000 for Anthropic (where Claude's long outputs make a larger reserve appropriate), 8,000 for DeepSeek. For models where the user knows the context limit (common with locally-hosted models via Ollama or LM Studio), the registry supports a `contextWindowOverride` that lets users specify the actual configured limit.

## The compaction trigger

Compaction doesn't happen at the moment the context fills. It triggers proactively, at a threshold designed to leave enough room for the current operation to complete.

The trigger is calculated as the minimum of two values: 75% of the usable window, and the usable window minus 13,000 tokens as a safety buffer. The dual formula handles edge cases: for models with very large context windows, the 75% ratio triggers early enough to leave room. For smaller models where the absolute safety buffer matters more, the subtraction term kicks in.

The 13,000-token safety buffer is sized to accommodate a typical agent step: an LLM response with reasoning, a few tool calls and their results, and the model's output. This ensures compaction never triggers so late that the next step has nowhere to operate.

## Two-tier compaction

When the trigger fires, the system attempts two levels of compaction in sequence, choosing the cheapest approach that solves the problem.

### Tier 1: Microcompaction

The first tier is local and cheap — no LLM call required.

The insight: in long agent conversations, the content that fills the context is usually tool results. A sequence of search results, document fetches, or query outputs can easily consume tens of thousands of tokens. Most of that detail isn't needed once the immediate task has moved past it. The agent already processed those results; the LLM doesn't need to re-read them.

Microcompaction walks the message history and looks for tool messages (the assistant-side records of tool results) older than the most recent four user/assistant exchanges. For any tool message whose content exceeds 800 characters, it truncates the content to the first 800 characters and appends a note explaining that the rest was elided.

This operation preserves the conversation structure entirely. Every message still exists. Tool call IDs still match their results. The LLM's access to recent context is unchanged. Only the body of older tool results is shortened.

For many sessions, microcompaction is enough. A session that's been running for a while and has accumulated tool results from earlier in the conversation can often be brought back under the trigger threshold by this simple pass.

### Tier 2: LLM summary compaction

If microcompaction isn't sufficient, the system escalates to a full LLM-based summarization.

This is the expensive path. It requires an additional LLM call and introduces a delay. But it achieves much higher compression — entire swaths of the conversation history can be replaced with a structured summary that preserves the operational context the agent needs.

The process works as follows:

**Safe splitting.** The system identifies a split point in the conversation history, keeping the most recent four message pairs intact and summarizing everything older. The split is carefully chosen to avoid breaking tool call pairs — an assistant message that includes tool calls must not be separated from the tool result messages that follow it. If a naive split would create an orphan, the split point moves earlier.

**Orphan tracking.** If the split would leave tool calls without their results (because the result falls within the kept window but the assistant message requesting them falls in the summarized prefix), those tool call IDs are collected and preserved separately. This ensures the LLM can reason about in-flight tool calls correctly even after compaction.

**Structured summarization.** The prefix to be compacted is passed to the LLM with a strict system prompt that requests a summary in nine sections: primary intent, key technical concepts, files and code touched, errors and fixes attempted, a tight per-message summary of every user turn, pending tasks, current work state, the immediate next step, and the list of preserved tool call IDs. This structure is intentional — it forces the summary to preserve the information an agent actually needs to continue working, rather than producing a free-form summary that might omit critical details.

**Boundary marker.** The summarized prefix is replaced by a single system message containing the summary text, the token counts before and after compaction, and the list of preserved tool call IDs. A special marker (`_compact_boundary`) flags this message so the session store can normalize it for display — users see a readable summary in the chat history rather than raw JSON.

## The result

The compaction system means DocKit agent sessions can run indefinitely without hitting context limits — or at least as long as there's meaningful state to compress. In practice, sessions that involve long sequences of tool calls (browsing an index, running multiple queries, iterating on a schema problem) stay functional for hundreds of turns.

The UI surfaces this with a token usage indicator that shows current usage against the model's capacity, with color thresholds at 60% (amber warning) and 80% (red, pulsing). Users can see the agent's "memory pressure" in real time and trigger manual compaction if they want to reclaim context space.

The combination of proactive budgeting, conservative token counting, cheap local compaction as the first resort, and expensive LLM summarization as the fallback gives the system good latency characteristics in the common case and correct behavior in the worst case.

Part 5 wraps up the series by looking at what happens when things go wrong — retry strategies, error classification, the SQLite persistence layer, and how the system surfaces failures clearly enough that users can recover rather than just seeing a generic error.

---

*The compaction system lives in [`src-tauri/src/agent/compact.rs`](https://github.com/geek-fun/dockit/blob/master/src-tauri/src/agent/compact.rs), token counting in [`src-tauri/src/agent/token_counter.rs`](https://github.com/geek-fun/dockit/blob/master/src-tauri/src/agent/token_counter.rs), and the model registry in [`src-tauri/src/agent/model_registry.rs`](https://github.com/geek-fun/dockit/blob/master/src-tauri/src/agent/model_registry.rs).*

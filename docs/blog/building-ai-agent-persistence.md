---
title: "Building AI Agents in Production: Persistence & Resilience (Part 5)"
description: How DocKit handles failure gracefully — retry with jitter, error classification, SQLite-backed session persistence, the ToolEnvelope audit trail, and provider normalization across OpenAI, Anthropic, DeepSeek, and local models.
head:
  - - meta
    - name: keywords
      content: AI agent resilience, LLM retry strategy, agent error handling, agent session persistence, SQLite agent storage, LLM provider normalization, agent observability, streaming LLM errors
  - - link
    - rel: canonical
      href: https://www.geekfun.club/blog/building-ai-agent-persistence
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/blog/building-ai-agent-persistence
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/blog/building-ai-agent-persistence
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/blog/building-ai-agent-persistence
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Building AI Agents in Production: Persistence & Resilience (Part 5)",
        "description": "How DocKit handles failure gracefully — retry with jitter, error classification, SQLite-backed session persistence, the ToolEnvelope audit trail, and provider normalization across OpenAI, Anthropic, DeepSeek, and local models.",
        "image": "https://www.geekfun.club/og/master-en.png",
        "author": { "@type": "Organization", "name": "GEEKFUN", "url": "https://www.geekfun.club" },
        "publisher": { "@type": "Organization", "name": "GEEKFUN", "logo": { "@type": "ImageObject", "url": "https://www.geekfun.club/geekfun.png" } },
        "datePublished": "2026-05-22",
        "dateModified": "2026-05-22",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.geekfun.club/blog/building-ai-agent-persistence" },
        "keywords": ["agent resilience", "retry strategy", "session persistence", "SQLite", "error handling", "LLM providers"],
        "articleSection": "AI Agent Engineering"
      }
---

# Building AI Agents in Production: Persistence & Resilience (Part 5)

*Part 5 of 5 — [Part 1: Architecture](/blog/building-ai-agent-architecture) · [Part 2: Tool System Design](/blog/building-ai-agent-tools) · [Part 3: Permissions & Confirmation](/blog/building-ai-agent-permissions) · [Part 4: Memory & Compaction](/blog/building-ai-agent-memory)*

---

Production systems fail. Networks time out, API rate limits kick in, database connections drop, and occasionally the LLM just returns something malformed. An agent that can't recover from these conditions gracefully isn't ready for real use.

This final part covers how DocKit handles failure at every layer of the agent stack — from LLM request retries to tool output truncation to session export and import. These aren't the most intellectually interesting parts of an agent. They're the parts that determine whether users trust it.

## The LLM streaming problem

Streaming responses from LLMs introduce a class of failure mode that batch APIs don't have: the stream can fail partway through.

You've received the beginning of the assistant's message. You've been emitting delta events to the UI. The user can see partial text building up. Then the connection drops, or the API returns an error mid-stream, or the model hits a safety filter after generating half a response.

DocKit's streaming client handles this with a retry schedule: on a retriable error, it waits 1 second, then 3 seconds, then 8 seconds, with a ±250ms jitter applied to each delay. The jitter prevents the thundering herd problem — if you have many users hitting a rate limit simultaneously, random jitter staggers their retries so they don't all hammer the API at the same moment.

Not all errors are worth retrying. Retrying a malformed request wastes time and money. The system classifies errors by reading the JSON body of the API error response and extracting the `error.type` field. The retryable types are: `rate_limit_exceeded`, `insufficient_quota`, `service_unavailable`, and `overloaded_error`. HTTP 429 and 503 status codes are also treated as retriable.

Everything else — bad requests, authentication failures, invalid model names — fails immediately. These are problems the user needs to fix, not transient conditions worth waiting on.

When a streaming request ultimately fails after all retries, the error is surfaced as an `agent-loop-error` event. The UI shows the exact error message rather than a generic failure notification. For rate limit errors, users see they've exceeded their quota. For authentication errors, they see that their API key is invalid. The agent doesn't hide the cause.

One additional care: API keys are scrubbed from error messages before they're emitted to the UI. An error message that leaks credentials in the response body gets its key value redacted before the user sees it.

## Persistence at every step

The most common mistake in agent implementations is treating persistence as an afterthought — something that happens at the end of a successful session. If the agent crashes or the user closes the window mid-conversation, everything is lost.

DocKit writes to SQLite at every significant state transition:

**After the user sends a message** — the user message is persisted before the LLM is even called. If the session errors out on the first attempt, the user's message is still there when they come back.

**After the LLM responds** — the assistant message (including any tool calls the LLM decided to make, stored as structured JSON) is persisted before any tool execution begins. If tool execution fails, the session history still shows the LLM's intent.

**After each tool call result** — the result envelope is written to its own table (`tool_result_store`) along with the full output. The conversation history record references this by ID rather than embedding the full result inline — which keeps the main messages table from bloating with large query outputs.

**On status changes** — session status transitions (`idle`, `running`, `waiting_confirmation`, `error`) are persisted so that if the application restarts, sessions can be restored to their last known state.

This step-by-step persistence model means that session history is always a faithful record of what happened, not a reconstructed approximation.

### The full result store

The two-level output design from Part 2 (summary for the LLM, full result for storage) maps directly to how results are stored.

The `tool_result_store` table holds the complete tool output, truncated only to prevent genuinely pathological cases (32,000 character limit). The main conversation history holds the summary (approximately 1,000 characters). The UI shows the summary by default; users can request the full result when they need it.

This design has a subtle benefit for long sessions: the compaction system described in Part 4 can elide the content of old tool messages in the conversation history without losing data. The full results are still in `tool_result_store`, accessible on demand, even if the microcompaction pass has trimmed the conversation record to just the first 800 characters.

## Provider normalization

DocKit supports six LLM provider families: OpenAI, Anthropic (via OpenAI-compatible proxies), DeepSeek, OpenRouter, Ollama, and LM Studio. Each has slightly different base URLs, slightly different response shapes, and in some cases different streaming formats.

The provider normalization layer (`harness.rs`) handles this translation. Every provider gets mapped to a normalized base URL — `/v1` is added if missing, trailing slashes are handled consistently. Model listing uses per-provider logic because response shapes differ: OpenAI returns `{ data: [{ id }] }`, while Ollama and LM Studio return model lists in different formats.

For streaming specifically, the harness assembles tool calls from fragmented chunks. The LLM streams tool calls incrementally — function name in one chunk, partial arguments in the next, more arguments in the one after. The harness uses the `index` field in each chunk to route fragments to the correct accumulator, concatenating argument strings until the stream ends. A naive implementation that assumes tool call data arrives in one piece will fail on any non-trivial tool call.

This normalization means the agent loop itself is provider-agnostic. It sends a request to the harness and receives back assembled content, thinking deltas, and complete tool calls. Whether the underlying provider is GPT-4o, Claude, DeepSeek, or a local Ollama model is invisible above the harness layer.

## Session export and import

Persistent sessions create an opportunity: if you've solved a complex problem across a long conversation, that conversation is valuable. It can be shared, used as training data, or archived for compliance.

DocKit implements session export and import at the SQLite level. Export walks the session's messages and tool calls, serializes them to a portable format, and returns the result. Import reconstructs the session from that format into a new local database.

The import path runs the same normalization that the regular load path runs — specifically, it unwraps `_compact_boundary` markers into human-readable summary text. An exported session that has been through compaction will, on import, show readable summaries in the conversation history rather than raw JSON artifacts.

## What operational resilience actually looks like

It's worth stepping back from the individual mechanisms to describe what the system feels like to use when things go wrong.

Rate limit during a tool call sequence: the user sees the current tool call pause, a brief wait (visible as no new events), and then the operation continuing. If the rate limit persists through all retries, they see a clear message: "rate limit exceeded." They can wait and retry, or switch to a different provider.

Application crash mid-conversation: on restart, the session loads from SQLite. Messages are there. Tool call records are there. The session status may be stale (`running` when it should be `idle`), but the user can see where the conversation ended and continue from that point.

Tool execution error: the error is persisted as a tool message in the conversation. The LLM sees the error in the next turn and can try a different approach. The user sees the error inline in the chat with the exact message, not a generic failure notification.

Context window overflow: proactive compaction means users usually don't see this at all. When compaction does run, the UI shows a compact boundary marker in the conversation history and updates the token usage indicator. The session continues without interruption.

## What this series covers

These five posts have walked through every major subsystem of DocKit's agent implementation: the architecture split between Rust and Vue, the tool system with its risk levels and permissions, the layered confirmation model, context compaction and token budgeting, and finally persistence and error handling.

The common thread across all of them is that production agents require more engineering than demos. A demo proves the concept. A production agent needs to handle the thousand ways reality diverges from the happy path.

DocKit is open source — the full implementation is available to read, fork, and adapt. If you're building something similar, the code will answer questions this series couldn't fit.

---

*Session persistence lives in [`src-tauri/src/agent/session_store.rs`](https://github.com/geek-fun/dockit/blob/master/src-tauri/src/agent/session_store.rs). The streaming client and provider normalization are in [`src-tauri/src/agent/harness.rs`](https://github.com/geek-fun/dockit/blob/master/src-tauri/src/agent/harness.rs).*

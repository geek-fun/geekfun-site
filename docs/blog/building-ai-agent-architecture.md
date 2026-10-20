---
title: "Building AI Agents in Production: Architecture (Part 1)"
description: How DocKit structures a production AI agent across a Rust backend and Vue 3 frontend, using Tauri IPC for streaming events, a composable orchestration layer, and a clean separation between agent logic and UI state.
head:
  - - meta
    - name: keywords
      content: AI agent architecture, production AI agent, Tauri AI agent, Rust AI agent, Vue 3 AI agent, LLM agent design, streaming agent, agent loop, IPC agent events, desktop AI agent
  - - link
    - rel: canonical
      href: https://www.geekfun.club/blog/building-ai-agent-architecture
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/blog/building-ai-agent-architecture
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/blog/building-ai-agent-architecture
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/blog/building-ai-agent-architecture
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Building AI Agents in Production: Architecture (Part 1)",
        "description": "How DocKit structures a production AI agent across a Rust backend and Vue 3 frontend, using Tauri IPC for streaming events, a composable orchestration layer, and a clean separation between agent logic and UI state.",
        "image": "https://www.geekfun.club/og/master-en.png",
        "author": { "@type": "Organization", "name": "GEEKFUN", "url": "https://www.geekfun.club" },
        "publisher": { "@type": "Organization", "name": "GEEKFUN", "logo": { "@type": "ImageObject", "url": "https://www.geekfun.club/geekfun.png" } },
        "datePublished": "2026-05-22",
        "dateModified": "2026-05-22",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.geekfun.club/blog/building-ai-agent-architecture" },
        "keywords": ["AI agent", "Tauri", "Rust", "Vue 3", "streaming LLM", "agent architecture"],
        "articleSection": "AI Agent Engineering"
      }
---

# Building AI Agents in Production: Architecture (Part 1)

*Part 1 of 5 — [Part 2: Tool System Design](/blog/building-ai-agent-tools) · [Part 3: Permissions & Confirmation](/blog/building-ai-agent-permissions) · [Part 4: Memory & Compaction](/blog/building-ai-agent-memory) · [Part 5: Persistence & Resilience](/blog/building-ai-agent-persistence)*

---

Most writing about AI agents stops at the demo stage — a Python script, an OpenAI call, a streaming response. Production is different. You have a real application with users, connections to live databases, destructive operations, and a user interface that needs to feel immediate and trustworthy. This series is about what that actually looks like, drawn directly from the source code of [DocKit](https://github.com/geek-fun/dockit), an open-source AI-native NoSQL desktop client.

This first part covers the hardest question you face before writing a single line of agent code: **where does the agent live, and how does it talk to everything else?**

## The stack problem

DocKit runs on the desktop using [Tauri](https://tauri.app/) — a framework that pairs a native Rust backend with a web-based frontend. When it came time to add an AI agent, the team faced a choice that will be familiar to anyone building agents in a non-Python app:

- Put the agent logic in the frontend (TypeScript, in the browser sandbox)?
- Or put it in the native backend (Rust, with full system access)?

The answer matters more than it might seem.

The frontend has convenient access to UI state and user interactions. But it runs in a sandboxed webview, can't hold persistent native resources cleanly, and would need to expose database credentials to JavaScript — a significant attack surface. More practically, streaming LLM responses with retries, assembling chunked tool calls across hundreds of SSE events, and managing concurrent database connections is exactly the kind of stateful, CPU-bound work that belongs in a native process.

The Rust backend won. The agent loop, LLM client, tool executor, session persistence, token counting, and context compaction all live in Rust. The frontend does what it does best: state management, streaming UI, and user interaction.

## The IPC boundary

When two processes need to talk in real time, the interface design is where projects succeed or fail. DocKit uses Tauri's IPC bridge, which provides two communication primitives:

**Commands** (`invoke`) are RPC calls — the frontend calls into Rust, gets a typed result back. These handle things like: start a new agent session, load conversation history, confirm a tool call, trigger a compaction.

**Events** (`emit`/`listen`) are fire-and-forget from Rust to the frontend. These handle streaming: each token of the LLM's response, each tool call the agent decides to make, each tool result that comes back. The frontend registers listeners and reacts as data arrives.

This asymmetry is intentional. Commands model state transitions (discrete, synchronous-ish operations where you care about success/failure). Events model streams (continuous, incremental data where each chunk updates the UI). The agent loop is fundamentally a stream, so events are its primary output channel.

### The event vocabulary

The full event taxonomy emitted by the agent loop covers the complete lifecycle of an interaction:

- `agent-loop-delta` — a content token from the LLM's response, appended to the current assistant message
- `agent-loop-thinking-delta` — a reasoning token, when the model supports explicit reasoning/thinking output
- `agent-loop-tool-call` — the agent has decided to call a tool; carries tool name, arguments, and a unique call ID
- `agent-loop-tool-result` — a tool has finished executing; carries a summary of the output and timing metadata
- `agent-loop-step-done` — the current LLM streaming call has completed; a step may contain multiple tool calls
- `agent-loop-done` — the entire agent loop has finished; the session returns to idle
- `agent-loop-error` — something failed; the session transitions to error state with a message
- `agent-context-usage` — emitted per iteration to communicate current token usage and whether compaction is needed

Every state transition in the UI is driven by one of these events. There is no polling. The frontend is purely reactive.

## The loop runner

The heart of the agent is what DocKit calls the *loop runner* — the Rust function that orchestrates a full agent interaction from user message to final response.

Think of it less like a function and more like a process: it runs up to 20 iterations, each of which involves making an LLM call, parsing the response, and then deciding what to do next. If the LLM returns a plain text reply, the loop ends. If the LLM returns tool calls — functions it wants to invoke against the database — the loop pauses, executes those tools (with user confirmation if needed), feeds the results back to the LLM, and continues.

Each iteration follows a consistent sequence:

1. Emit the current token usage via `agent-context-usage`
2. Optionally run context compaction if token usage is high
3. Load the conversation history from SQLite
4. Construct the LLM request (messages + tool definitions)
5. Stream the LLM response, emitting `agent-loop-delta` and `agent-loop-thinking-delta` tokens as they arrive
6. If the response contains tool calls: persist the assistant message, process each tool call (permission checks, confirmation, execution)
7. Persist tool results and continue to the next iteration
8. If the response is a final reply: persist it and emit `agent-loop-done`

What's worth noting here is the persistence after each step. Unlike a toy agent that keeps everything in memory, DocKit writes to SQLite at every meaningful state change. This means a crash between steps doesn't lose data, sessions can be loaded from history, and tool results are available for later inspection even if the full output was too large to show in the UI.

## The frontend composable

On the Vue 3 side, the agent interaction is orchestrated by a composable — `useChatAgent` — that wires all the event listeners and exposes a simple `sendMessage` interface to the UI.

The composable pattern is a good fit here because it isolates all the Tauri IPC complexity from the rest of the application. The views and stores that use it don't know anything about event names or invoke commands. They get a `sendMessage` function and reactive state that updates as events arrive.

When the user sends a message, the composable:

1. Creates or resolves a session ID
2. Inserts the user message into the local store immediately (no waiting for the server round-trip — the UI feels instant)
3. Fetches the tool definitions from the backend (if the session has database connections attached)
4. Constructs the system prompt, incorporating attached data sources, schemas, and any session-specific rules
5. Calls `run_agent_loop` on the Rust backend with the message, settings, and connection configs
6. From that point on, the composable is purely reactive — incoming events update the store, which updates the UI

This separation is important: the composable is the only place in the frontend that knows about Tauri events. Everything above it (views, stores, other composables) works with plain Vue reactive state.

### Feature adapters

DocKit has two distinct agent UIs: a full-screen chat in the data studio, and a sidebar assistant accessible from any connection view. They have different contexts, different session lifecycles, and different ways of attaching database connections.

Rather than building two separate agent integrations, DocKit uses a thin adapter pattern. `useDataStudioChatAgent` and `useSidebarChatAgent` each wrap `useChatAgent` with feature-specific logic: which sessions to create, what context to inject, how to surface connections. The core orchestration logic lives once, in the base composable.

## Where session state lives

A session in DocKit has two kinds of state, kept in different places by design:

**Runtime state** (not persisted) — the tool definitions and metadata fetched at session start, the streaming assistant message being assembled from token events, the confirmation channels awaiting user input. This state is ephemeral, built fresh each time the loop runs.

**Persistent state** (SQLite) — conversation messages, tool call records, tool results, session metadata. This is the durable record that can be loaded back from history, exported, or used as the basis for the next LLM call.

The separation matters because it prevents stale data from persisting across sessions while ensuring nothing genuinely important gets lost.

## Why this architecture works

There is no novel insight in any individual piece of this design. IPC bridges, event-driven UIs, and persistent session storage are standard patterns. What makes this architecture coherent is the combination:

- The agent's unsafe surface (database access, network calls, file handling) is isolated in a native process where it belongs
- The UI is purely reactive — it can't accidentally trigger side effects; it just responds to events
- The persistence layer is at every step, not just at the end — the system is resilient to partial failures
- The composable abstraction prevents the Tauri implementation details from leaking into application code

Part 2 of this series goes deeper into how the tool system is designed — specifically, how tools are defined as first-class data structures with risk levels and permissions, and why that metadata matters beyond just calling the right database function.

---

*DocKit is open source. The architecture described here lives in [`src-tauri/src/agent/`](https://github.com/geek-fun/dockit/tree/master/src-tauri/src/agent) (Rust) and [`src/composables/`](https://github.com/geek-fun/dockit/tree/master/src/composables) (Vue 3). If you're building something similar, the code is the best documentation.*

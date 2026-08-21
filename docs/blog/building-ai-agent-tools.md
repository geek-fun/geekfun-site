---
title: "Building AI Agents in Production: Tool System Design (Part 2)"
description: How DocKit defines tools as first-class data structures with risk levels and required permissions, why the ToolExecutor trait matters for testability, and the three gates every tool call passes before execution.
head:
  - - meta
    - name: keywords
      content: AI agent tools, LLM function calling, tool system design, agent tool permissions, risk level classification, ToolExecutor pattern, agent safety, Rust LLM tools
  - - link
    - rel: canonical
      href: https://www.geekfun.club/blog/building-ai-agent-tools
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/blog/building-ai-agent-tools
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/blog/building-ai-agent-tools
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/blog/building-ai-agent-tools
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Building AI Agents in Production: Tool System Design (Part 2)",
        "description": "How DocKit defines tools as first-class data structures with risk levels and required permissions, why the ToolExecutor trait matters for testability, and the three gates every tool call passes before execution.",
        "image": "https://www.geekfun.club/og/master-en.png",
        "author": { "@type": "Organization", "name": "GEEKFUN", "url": "https://www.geekfun.club" },
        "publisher": { "@type": "Organization", "name": "GEEKFUN", "logo": { "@type": "ImageObject", "url": "https://www.geekfun.club/geekfun.png" } },
        "datePublished": "2026-05-22",
        "dateModified": "2026-05-22",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.geekfun.club/blog/building-ai-agent-tools" },
        "keywords": ["AI agent tools", "function calling", "tool permissions", "risk level", "ToolExecutor", "agent safety"],
        "articleSection": "AI Agent Engineering"
      }
---

# Building AI Agents in Production: Tool System Design (Part 2)

*Part 2 of 5 — [Part 1: Architecture](/blog/building-ai-agent-architecture) · [Part 3: Permissions & Confirmation](/blog/building-ai-agent-permissions) · [Part 4: Memory & Compaction](/blog/building-ai-agent-memory) · [Part 5: Persistence & Resilience](/blog/building-ai-agent-persistence)*

---

When people talk about "tool use" in AI agents, the conversation usually stops at the API level: you pass a JSON schema to the LLM, it returns a function name and arguments, you call the function. That part is easy. The hard part — the part that matters for production — is what happens before and after that call.

Before: does this agent have permission to call this tool at all? Is this the kind of operation that should happen automatically, or should a human confirm it first?

After: was the output truncated? What does the LLM actually see versus what gets stored? If it fails, what does the user see?

DocKit's tool system answers all of these questions with a consistent design. This post is about that design.

## Tools are data, not just functions

The first design decision worth understanding: in DocKit, a tool is not just a function to call. It's a record with metadata that the entire system reasons about:

- **Name** — the function identifier the LLM uses (e.g., `es__search`, `dynamo__delete_many`)
- **Parameters** — a JSON schema describing the expected arguments, used both to generate the LLM prompt and to validate incoming calls
- **Risk level** — one of `Safe`, `Elevated`, or `Destructive`, reflecting the potential impact of the operation
- **Required permission** — a string key (`read`, `create`, `update`, `delete`) that must be present in the connection's permission config before the tool can execute

This metadata lives in a central tool registry and gets serialized into OpenAI-compatible function specs when the agent loop starts. The UI fetches this metadata too — it uses `riskLevel` to decide whether to show a confirmation prompt, and displays it visually so users understand what the agent is about to do.

### The tool catalog

DocKit ships with 18 built-in tools spanning Elasticsearch, DynamoDB, and MongoDB:

| Tool | Risk | Permission |
|------|------|-----------|
| `es__search` | Safe | read |
| `es__get_document` | Safe | read |
| `es__cat_indices` | Safe | read |
| `es__get_mapping` | Safe | read |
| `es__index_document` | Elevated | create |
| `es__update_document` | Elevated | update |
| `es__delete_document` | Destructive | delete |
| `es__delete_by_query` | Destructive | delete |
| `dynamo__execute_query` | Safe | read |
| `dynamo__describe_table` | Safe | read |
| `dynamo__execute_write` | Elevated | create |
| `dynamo__execute_delete` | Destructive | delete |
| `mongo__find` | Safe | read |
| `mongo__list_collections` | Safe | read |
| `mongo__aggregate` | Elevated | read |
| `mongo__insert_one` | Elevated | create |
| `mongo__update_many` | Elevated | update |
| `mongo__delete_many` | Destructive | delete |

The naming convention is intentional: `<engine>__<operation>`. This prefix-based naming makes it trivial to route tool calls to the correct executor at runtime and makes the capabilities of a session immediately legible to operators.

## Three gates before execution

Every tool call the LLM requests must pass three sequential checks before any code runs against a database.

### Gate 1: The session allow-list

When a user starts an agent session, they can configure which tools are available. This is a session-level allow-list — a whitelist of function names the agent is permitted to call. If the LLM requests a tool that isn't on the list, the call is immediately rejected with a descriptive error message that gets fed back into the conversation.

The practical effect: you can run a read-only session even if your connection technically has write permissions. You can expose only the Elasticsearch tools even if DynamoDB is connected. The allow-list is a coarse capability control at the session boundary.

### Gate 2: Per-connection permission checks

Each database connection attached to a session carries a permissions object — a map declaring which operations (`read`, `create`, `update`, `delete`) are allowed on that connection. When a tool call arrives, the loop runner looks up the `required_permission` for that tool and checks whether the connection grants it.

This check happens inside the Rust backend, not in the UI. The frontend has no way to bypass it.

The design consequence is important: you can attach a read-only replica connection to a session and guarantee no write will ever reach it — regardless of what the LLM requests, regardless of what the user configured in the UI. The permission check is enforced at the execution layer, not at the policy layer.

### Gate 3: User confirmation

The third gate is human. For tools above a certain risk threshold, the loop runner creates a confirmation channel — a oneshot channel in Rust terms — and waits for a user decision before proceeding.

The LLM knows a tool call is pending. The UI shows the call with its arguments and asks the user to approve or deny. When the user decides, the frontend invokes a Tauri command that resolves the channel, and the loop runner continues.

The confirmation timeout is five minutes. If no decision arrives, the tool call fails with a timeout error. This prevents sessions from hanging indefinitely if the user walks away.

## The ToolExecutor abstraction

The loop runner doesn't call database functions directly. It delegates to a `ToolExecutor` trait — an abstraction that takes a tool name and parsed arguments and returns a `ToolEnvelope`.

This indirection is worth understanding because it's not just about clean code. It means:

**The agent logic is testable without real databases.** You can swap in a mock executor that returns canned results and test the full loop runner — streaming parsing, confirmation flows, retry logic — without any network calls.

**The execution surface is bounded.** The trait defines exactly what the executor can do. There's no way for the agent loop to accidentally call something outside the executor's contract.

**New database support doesn't touch the orchestration code.** Adding MongoDB tool support meant adding implementations to the executor, not modifying how confirmations work or how events are emitted.

The concrete executor (`DocKitToolExecutor`) routes tool calls by name prefix to per-engine execution functions. Each engine has its own authentication, connection building, validation, and result formatting.

## Input validation before execution

Each tool has its own validation logic that runs before any database call:

For Elasticsearch, index names are validated against a strict character allowlist — no path traversal characters, no names exceeding 255 bytes, no names that could be interpreted as configuration or metadata indices. The validation is explicit and rejects ambiguous inputs rather than trying to sanitize them.

For DynamoDB, the write and delete tools validate the PartiQL statements they receive. The read tool rejects statements containing mutation verbs. The write tool rejects statements that look like bulk deletes. The delete tool only accepts DELETE statements. This ensures the risk level classification is actually enforced at the query level — the LLM can't work around a `dynamo__execute_query` permission by embedding an INSERT in the PartiQL.

For MongoDB, connection string construction validates authentication config and enforces TLS settings from the connection config rather than trusting the LLM-provided arguments.

## The output envelope

When a tool executes successfully, the result is wrapped in a `ToolEnvelope` before it goes anywhere:

```
ToolEnvelope {
  summary:   first ~1,000 characters of the result
  full_result: result truncated to ~32,000 characters
  metadata: {
    tool_name,
    duration_ms,
    truncated: bool
  }
}
```

The envelope serves two audiences with different needs. The LLM sees the summary — enough context to understand what happened and decide what to do next, but bounded in size to avoid burning the entire context window on a single tool result. The user (via the UI) can request the `full_result` to inspect the complete output.

The `truncated` flag is surfaced in the UI so the user knows they're looking at a partial result. If they need the full data, they can re-run the query directly in the editor.

This two-level output design is one of the most practical decisions in the system. Without it, a tool that returns a large dataset could consume most of the context window in a single step, leaving insufficient space for the rest of the conversation. With it, the agent stays functional even when operating on large indices.

## What this means for your own agent

The patterns here compose into a coherent safety model:

Tools defined as data — not as code spread across the codebase — means the security properties of the system are auditable. You can look at the tool catalog and immediately understand what the agent can and can't do.

Three explicit gates — allow-list, permission check, user confirmation — create defense in depth. Any single gate failing (misconfigured permissions, UI bug, policy oversight) doesn't bypass the others.

The executor abstraction keeps the dangerous code — actual database calls — isolated and testable independent of the orchestration logic that triggers it.

Part 3 of this series goes deeper into the confirmation system: how the frontend confirmation UI interacts with the backend's oneshot channels, how session-level permission modes work, and how "allow always" and "deny always" rules let users build trust with the agent over time without disabling safety checks entirely.

---

*The tool registry lives in [`src-tauri/src/agent/tools.rs`](https://github.com/geek-fun/dockit/blob/master/src-tauri/src/agent/tools.rs). The executor is in [`src-tauri/src/agent/executor.rs`](https://github.com/geek-fun/dockit/blob/master/src-tauri/src/agent/executor.rs).*

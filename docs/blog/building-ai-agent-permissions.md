---
title: "Building AI Agents in Production: Permissions & Confirmation (Part 3)"
description: How DocKit implements a layered permission model for AI agents — session-level modes, per-connection permissions, risk-based confirmation, and persistent allow/deny rules that reduce friction without removing safety.
head:
  - - meta
    - name: keywords
      content: AI agent permissions, agent confirmation flow, human-in-the-loop AI, AI agent safety, LLM tool confirmation, agent permission model, AI agent UX, oneshot channel confirmation
  - - link
    - rel: canonical
      href: https://www.geekfun.club/blog/building-ai-agent-permissions
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/blog/building-ai-agent-permissions
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/blog/building-ai-agent-permissions
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/blog/building-ai-agent-permissions
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Building AI Agents in Production: Permissions & Confirmation (Part 3)",
        "description": "How DocKit implements a layered permission model for AI agents — session-level modes, per-connection permissions, risk-based confirmation, and persistent allow/deny rules that reduce friction without removing safety.",
        "image": "https://www.geekfun.club/og/master-en.png",
        "author": { "@type": "Organization", "name": "GEEKFUN", "url": "https://www.geekfun.club" },
        "publisher": { "@type": "Organization", "name": "GEEKFUN", "logo": { "@type": "ImageObject", "url": "https://www.geekfun.club/geekfun.png" } },
        "datePublished": "2026-05-22",
        "dateModified": "2026-05-22",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.geekfun.club/blog/building-ai-agent-permissions" },
        "keywords": ["AI agent permissions", "human-in-the-loop", "confirmation flow", "agent safety", "permission model"],
        "articleSection": "AI Agent Engineering"
      }
---

# Building AI Agents in Production: Permissions & Confirmation (Part 3)

*Part 3 of 5 — [Part 1: Architecture](/blog/building-ai-agent-architecture) · [Part 2: Tool System Design](/blog/building-ai-agent-tools) · [Part 4: Memory & Compaction](/blog/building-ai-agent-memory) · [Part 5: Persistence & Resilience](/blog/building-ai-agent-persistence)*

---

The hardest UX problem in agents that operate on real systems isn't the AI part. It's the trust part.

If every action requires manual approval, the agent is useless — you're doing the work yourself, just through a worse interface. If every action is automatic, you've handed an LLM the keys to your production database. Neither extreme works for real users on real systems.

DocKit's permission model is an attempt to find that balance. It uses four independent policy layers that combine at runtime to decide whether a specific tool call should proceed automatically or wait for human confirmation. This post explains how those layers work and why they're designed the way they are.

## What a session knows about its connections

When a user attaches a database connection to an agent session, DocKit takes a snapshot — not a live reference. The snapshot freezes the connection's alias, type, and permissions at the moment of attachment. If the connection configuration changes later (a password rotation, a permissions update), the running session is unaffected until it's explicitly restarted with the new config.

This is a deliberate safety choice. A live reference means the session's capabilities could change underneath it mid-conversation, which is hard to reason about and potentially dangerous. A frozen snapshot means the session operates within a known, stable set of capabilities for its entire lifetime.

Each connection snapshot carries a permissions map: a set of boolean flags for `read`, `create`, `update`, and `delete`. These flags define what operations are possible on that connection — not just what the agent is allowed to request, but what will physically execute.

## The four policy layers

### Layer 1: The session allow-list

The allow-list is the outermost ring. When a session starts, it can be configured with a specific set of tool names the agent is allowed to call. Any tool not on that list is rejected before permissions or confirmation logic even runs.

This layer is coarse and absolute. It's useful for creating intentionally limited sessions — a "read-only analysis" session that can access all the read tools but none of the write tools, regardless of what any connection permits.

### Layer 2: Per-connection required permissions

For any tool that passes the allow-list, the system looks up the tool's `required_permission` (from the tool registry described in Part 2) and checks whether the attached connection grants that permission.

The check runs in Rust, inside the loop runner, before any database call is made. The UI has no mechanism to bypass it. This is important because it means permission enforcement is not a frontend policy that can be circumvented — it's a backend invariant.

The practical use: connect a read replica to the session and grant it only `read` permission. Any tool that requires `create`, `update`, or `delete` will fail this check regardless of everything else — even if the user's auto mode is on, even if there's an "allow always" rule for that tool. The connection permission is a hard floor.

### Layer 3: Session-level permission mode

Above the per-connection permissions, sessions have a mode: `Ask` or `Auto`.

In `Ask` mode (the default), elevated-risk tools require explicit user confirmation even when the connection grants the required permission. In `Auto` mode, elevated-risk tools proceed without confirmation — only destructive-risk tools still require it.

This mode can be set at the session level (applying to all connections) or per-connection. A session might run in `Auto` mode for the read replica (where the worst case is a slow query) but stay in `Ask` mode for the primary connection where writes happen.

The mode switch is a deliberate friction control. Users who know what they're doing and have vetted their connections can reduce interruptions. Users who want to stay in the loop can require confirmation for anything above read.

### Layer 4: Persistent confirmation rules

The finest-grained layer is confirmation rules — persistent, session-scoped records that say "for this session, always allow tool X" or "for this session, always deny tool Y."

Rules survive session restarts (they're persisted in the frontend store). Once a user decides to "allow always" for `es__search` in a particular session, they won't be asked about it again in that session. Same for denials: "deny always" for `es__delete_by_query` means that tool is blocked regardless of mode or permissions.

The rules are checked before risk-level and mode logic. A matching rule short-circuits the entire confirmation decision: allow always means the tool proceeds immediately, deny always means it fails immediately, with no UI prompt.

## The confirmation handshake

When a tool call does require confirmation, the mechanics of how that decision travels from the UI back to the running backend are worth understanding.

The loop runner, running asynchronously in Rust, creates a oneshot channel for the tool call. The sender end is placed in a global `ConfirmMap`, keyed by the tool call ID. The loop runner then awaits the receiver — it's suspended, not spinning, consuming no CPU while it waits.

In the UI, the user sees the tool call with its arguments and risk level. They make a decision. The frontend calls a Tauri command with the tool call ID and their decision (approve or deny). On the Rust side, that command looks up the sender in the `ConfirmMap`, sends the boolean, and removes the entry.

The loop runner's await resolves. If approved, it proceeds to execute the tool. If denied, it inserts a failure message into the conversation and continues the loop — the LLM learns the tool was denied and can adapt its plan.

A few implementation details worth noting:

**The entry is cleaned up on drop.** A `ConfirmGuard` wraps the ConfirmMap entry and removes it when dropped, regardless of how the loop runner exits. This prevents the map from accumulating stale entries if the session errors out or is cancelled mid-confirmation.

**The timeout is five minutes.** If no decision arrives, the confirmation times out and the session fails with a clear error message. This prevents sessions from hanging indefinitely if the user closes the window or forgets about a pending confirmation.

**Immediate confirmations for auto-allowed tools.** When a tool doesn't require confirmation (safe risk level, auto mode, or allow-always rule), the frontend immediately calls the confirm command with `approved = true` without waiting for user input. From the backend's perspective, all tool calls look the same — they wait for a confirmation signal. The decision about whether to show a UI prompt happens entirely in the frontend, and the backend doesn't need to know.

## The confirmation decision tree

When `onAgentLoopToolCall` arrives in the frontend, the composable walks through this priority order:

1. Is there a session rule that says **deny always** for this tool? → Deny immediately, no UI prompt
2. Is there a session rule that says **allow always** for this tool? → Approve immediately, no UI prompt
3. Is the risk level **Safe**? → Approve immediately, no UI prompt
4. Is the risk level **Destructive**? → Always show confirmation, regardless of mode
5. Is the session in **Auto** mode? → Approve immediately, no UI prompt
6. Otherwise (Elevated risk, Ask mode) → Show confirmation prompt

This ordered evaluation means the most specific signal wins. A session rule always beats the mode setting, which always beats the default risk behavior. Users can build confidence in specific tools over time (adding allow-always rules) without disabling safety for new, unfamiliar tools.

## Why this design ages well

The layered model separates concerns that would otherwise become tangled as the system grows:

Adding a new tool doesn't require updating permission logic — the tool declares its own risk level and required permission, and the existing rules apply automatically.

Supporting a new database type doesn't require new confirmation code — the permission check is against a generic permission key (`create`, `update`, etc.), not a database-specific concept.

Users who want tighter control can tighten individual layers (restrict the allow-list, stay in Ask mode, add deny rules) without affecting users who want looser operation. The system is as cautious as you need it to be and as fluid as you can trust it to be.

The one thing this model doesn't yet solve well is cross-session rule sharing. Rules are scoped to a session, which is the right default for isolation. But experienced users working across many sessions might want global "always allow read-only tools" rules. That's a natural evolution of this design.

Part 4 takes a different direction — away from safety and toward the engineering problem that breaks the most production agents: the context window. Once your agent runs long conversations, token budgets fill up, and without a compaction strategy, the agent stops working. DocKit's solution involves two tiers of compaction, a custom token counting layer, and a model registry that knows about every major LLM provider's context limits.

---

*The confirmation logic lives in [`src/composables/useChatAgent.ts`](https://github.com/geek-fun/dockit/blob/master/src/composables/useChatAgent.ts). The backend confirmation channels are in [`src-tauri/src/agent/loop_runner.rs`](https://github.com/geek-fun/dockit/blob/master/src-tauri/src/agent/loop_runner.rs).*

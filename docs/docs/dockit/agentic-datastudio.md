---
title: DocKit Agentic Data Studio — AI Agent for Your Databases
description: Configure DocKit Agentic Data Studio and Sidebar Assistant to interact with MongoDB, Elasticsearch, OpenSearch, DynamoDB, and EasySearch through natural language. Set up AI providers, manage permissions, and control the agent loop.
head:
  - - meta
    - name: keywords
      content: DocKit Agentic Data Studio, AI database agent, natural language database query, AI assistant, agent loop, tool execution, database AI agent, OpenAI, Anthropic, DeepSeek, Ollama, DocKit AI
  - - link
    - rel: canonical
      href: https://www.geekfun.club/docs/dockit/agentic-datastudio
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/docs/dockit/agentic-datastudio
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/docs/dockit/agentic-datastudio
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/docs/dockit/agentic-datastudio
---

# DocKit Agentic Data Studio

DocKit's Agentic Data Studio is an AI agent that interacts with your databases through natural language. Describe what you need — the agent writes queries, inspects schemas, updates documents, deletes records, creates indexes, and returns results — all within a single conversation.

The Sidebar Assistant provides the same AI capabilities in a lightweight chat panel for quick questions and query generation without leaving your editor.

## What the Agent Can Do

The agent has **28 tools** across all supported databases:

**Elasticsearch / OpenSearch / EasySearch** (16 tools):
- Search, get, index, update, and delete documents
- List indices, get mappings, create/delete indices
- Manage aliases (list, get, create, delete, bulk update)
- Add or update field mappings

**DynamoDB** (5 tools):
- Execute PartiQL SELECT, INSERT, UPDATE, DELETE
- Describe and list tables

**MongoDB** (7 tools):
- Find documents, run aggregation pipelines
- Insert, update, delete documents
- List databases and collections

Every tool has a built-in **risk level** — Safe (read-only), Elevated (create/update), or Destructive (delete) — and requires the corresponding permission.

## Quick Start

1. **Open Settings → Providers** and add an AI provider (OpenAI, Anthropic, DeepSeek, or any of the 12 supported providers)
2. **Open Data Studio** from the sidebar navigation
3. **Click Add Source** to attach a database connection
4. **Type your request** in natural language — the agent handles the rest

For quick queries without leaving your editor, use the **Sidebar Assistant** — click the chat icon (💬) in the sidebar.

## Safety & Permissions

### Permission Modes

| Mode | Behavior |
|------|----------|
| **Ask** (default) | Every non-read tool requires explicit Allow/Deny confirmation. Safe for production. |
| **Auto** | Tools are executed automatically when the session has the required permissions. Faster for exploration. |

### Risk Levels

| Level | Examples | Requires Confirmation |
|-------|----------|----------------------|
| **Safe** | Read queries, list indices, describe tables | Never |
| **Elevated** | Create/update documents, insert items | In Ask mode |
| **Destructive** | Delete documents, drop indices, delete tables | Always |

### Per-Source Permissions

Each attached database source has independent read/create/update/delete permissions. You can customize permissions per source or inherit the session-level mode.

### Confirmation Rules

You can create rules to automatically allow or deny specific tools in a session, bypassing the default confirmation prompts:

- **Allow Always**: Skip confirmation for safe/repetitive operations
- **Deny Always**: Block dangerous tools completely

## Agent Loop

The agent runs in an iterative loop — it thinks, calls tools, observes results, and decides what to do next. You control the loop with these settings:

| Setting | Default | What It Limits |
|---------|---------|----------------|
| **Max iterations** | 200 | Maximum tool-call rounds per request |
| **Wall-clock budget** | 30s | Maximum wall-clock time for a single agent run |
| **Token budget** | 1,000,000 | Maximum cumulative input tokens across all iterations |

When a budget is exceeded, the agent stops gracefully with an explanation and offers to continue.

### Context Compaction

For long conversations, DocKit automatically compacts the context — old messages are summarized into a compact representation, preserving the essential information while reducing token usage. Compaction markers appear in the chat timeline so you always know what happened.

### Session Progress

The agent displays its current phase so you always know what's happening:

```
Preparing → Iterating → Waiting for model → Compacting → Done
```

Each tool call is displayed with its name, arguments, duration, and result. Expand any tool call to see the full result body.

## Source Management

### Database Sources

Attach any configured connection as a Data Studio source. The agent can read schemas, query data, and write changes based on the permissions you grant.

### File Sources (Read-Only)

In addition to databases, you can attach local files as read-only sources:

- **CSV** — Tabular data
- **Excel** — Spreadsheet data
- **JSON** — Structured data
- **Parquet** — Columnar data

The agent can inspect and query file contents, but cannot modify them.

## Session Management

Each Data Studio conversation is a **session** with its own history, attached sources, and settings.

- **Session History**: Browse, switch, and manage past sessions from the history panel
- **New Session**: Start fresh with a clean conversation
- **Source Detachment**: Remove a source from a session without deleting the connection
- **Model Selection**: Choose a different model per session

## Sidebar Assistant

The Sidebar Assistant is a lightweight chat panel accessible from anywhere in the app. It shares the same providers and models as Data Studio but operates as a single-turn Q&A interface:

- Ask questions about your database or code
- Generate queries with schema context
- Get explanations and debugging help
- Quick access without switching views

Open it by clicking the chat icon (💬) in the sidebar, or press the keyboard shortcut.

## Providers & Models

### Supported Providers

DocKit supports 12 AI provider types — both cloud and local:

| Provider | Compatibility |
|----------|--------------|
| **OpenAI** | OpenAI API |
| **Anthropic** | Anthropic API |
| **DeepSeek** | OpenAI-compatible |
| **OpenRouter** | OpenAI-compatible (200+ models) |
| **Google Gemini** | OpenAI-compatible |
| **Grok** | OpenAI-compatible |
| **Mistral** | OpenAI-compatible |
| **Azure OpenAI** | OpenAI-compatible |
| **Ollama** | Local (fully offline) |
| **LM Studio** | Local (fully offline) |
| **Custom OpenAI-compatible** | Any OpenAI endpoint |
| **Custom Anthropic-compatible** | Any Anthropic endpoint |

### Adding a Provider

1. Open **Settings → Providers**
2. Click **Add Provider** and select a type
3. Configure:

| Field | Description |
|-------|-------------|
| **Display Name** | Friendly label for this provider |
| **Base URL** | API endpoint (pre-filled for standard providers) |
| **API Key** | Your API key or token |
| **Proxy** | HTTP proxy URL (optional) |

4. Click **Test Connection** to verify
5. Click **Save**

DocKit auto-discovers available models. You can then route them to specific features:

- **Sidebar Assistant** — Model for quick Q&A
- **Data Studio** — Model for the full agent loop
- DocKit automatically picks the best available model if unconfigured

### Getting an API Key

- **OpenAI**: [platform.openai.com](https://platform.openai.com) → API Keys
- **Anthropic**: [console.anthropic.com](https://console.anthropic.com) → API Keys
- **DeepSeek**: [platform.deepseek.com](https://platform.deepseek.com) → API Keys
- **OpenRouter**: [openrouter.ai](https://openrouter.ai) → Keys
- **Ollama / LM Studio**: Run locally — no API key needed

### Proxy Configuration

If behind a firewall:

1. In Settings → Providers, enter a proxy URL for each provider
2. Format: `http://host:port`
3. Or choose **Use system proxy** to inherit OS-level settings

## Privacy & Security

**What the agent sends to AI providers:**
- ✅ Your text prompt (natural language request)
- ✅ Current index/table/collection names
- ✅ Schema/mapping (field names and types)
- ✅ Query results (truncated to ~1,024 characters so the agent can reason about what it found)
- ❌ Full query results (stored locally in DocKit's database, visible in UI)
- ❌ Credentials (never sends API keys, passwords, or connection secrets)

**How tool results flow to the LLM**: When the agent executes a tool (e.g., `es__search`, `mongo__find`), the full result is stored locally for you to inspect. Only a truncated summary (~1,024 characters) goes back to the LLM as context for the next reasoning step. This lets the agent understand what it found without sending entire datasets.

**Credential safety**: Connection secrets are stored locally and resolved in the Rust backend. The agent never sees credentials — it only passes a `connection_id` (e.g., `"42"`), and the backend resolves it to the actual connection config before executing the tool. This architecture keeps passwords, API keys, and AWS secrets out of LLM prompts.

**No telemetry**: DocKit does not phone home. No query data, credentials, or analytics leave your machine. Works fully offline with local LLM providers (Ollama, LM Studio).

## Troubleshooting

### API Key Issues

**Error**: `Invalid API key` or `Unauthorized`

1. Verify the key is correct (no extra spaces or line breaks)
2. Check the key hasn't expired
3. Ensure sufficient credits/quota
4. Try regenerating the key

### Connection Failed

**Error**: `Network error` or `Timeout`

1. Check internet connectivity
2. Configure a proxy if behind a firewall
3. Verify the API endpoint is accessible
4. For local providers (Ollama/LM Studio): confirm the service is running

### Agent Stops Early

**Error**: Agent stops with iteration cap, wall clock, or token budget message

1. Increase the relevant budget in Settings → AI → Chat settings
2. Simplify your request to require fewer tool calls
3. Start a new session to reset the context

### Poor Quality Responses

1. Try a different model (Claude for reasoning, GPT-4o for general)
2. Be more specific in your request — include field names, index names
3. For complex operations, break them into smaller steps

## Next Steps

- **[Settings Guide](/docs/dockit/settings)** — Configure providers, budgets, and model routing
- **[Connect to Server](/docs/dockit/connect-to-server)** — Set up database connections for Data Studio sources
- **[DynamoDB GUI Client](/products/dockit/dynamodb-gui-client)** — DynamoDB features and PartiQL
- **[Elasticsearch GUI Client](/products/dockit/elasticsearch-gui-client)** — Elasticsearch management

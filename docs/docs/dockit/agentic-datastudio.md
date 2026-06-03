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

DocKit's Agentic Data Studio is an AI agent that talks to your databases in natural language. Tell it what you need and it writes queries, inspects schemas, updates documents, deletes records, or creates indexes — all in one conversation.

The Sidebar Assistant gives you the same AI in a chat panel, so you can ask questions and generate queries without switching views.

![DocKit Data Studio list indices](/dockit-data-studio-list-indices.gif)

## What the Agent Can Do

The agent has tools for every supported database:

**Elasticsearch / OpenSearch / EasySearch**:
- Search, get, index, update, and delete documents
- List indices, get mappings, create, and delete indices
- Manage aliases — list, get, create, delete, bulk update
- Add or update field mappings

**DynamoDB**:
- Execute PartiQL queries (SELECT, INSERT, UPDATE, DELETE)
- Describe and list tables

**MongoDB**:
- Find documents and run aggregation pipelines
- Insert, update, and delete documents
- List databases and collections

Each tool has a **risk level** (Safe for read-only, Elevated for create/update, or Destructive for delete) and needs the matching permission to run.

## Quick Start

1. Open **Settings → LLMs** and add an AI provider (OpenAI, Anthropic, DeepSeek, or any of the 12 supported)
2. Open **Data Studio** from the Nav bar
3. Click **Add Source** to attach a database connection
4. Type your request in plain English and let the agent handle it

![DocKit Settings LLMs demo](/dockit-settings-llm.gif)

For quick questions without leaving your editor, use the **Sidebar Assistant** — click the chat icon (💬) in the sidebar.

## Safety & Permissions

### Permission Modes

| Mode | Behavior |
|------|----------|
| **Ask** (default) | Every non-read tool asks for Allow/Deny before running. |
| **Auto** | Tools run automatically if the session has the right permissions. |

### Risk Levels

| Level | Examples | Requires Confirmation |
|-------|----------|----------------------|
| **Safe** | Read queries, list indices, describe tables | Never |
| **Elevated** | Create/update documents, insert items | Only in Ask mode |
| **Destructive** | Delete documents, drop indices, delete tables | Always |

### Per-Source Permissions

Each attached database source has its own read/create/update/delete permissions. You can set these per source or inherit from the session.

### Confirmation Rules

You can create rules to auto-allow or auto-deny specific tools in a session, skipping the confirmation prompts:

- **Allow Always**: Skip confirmation for safe or repetitive operations
- **Deny Always**: Block dangerous tools entirely

## Agent Loop

The agent runs in a loop: it thinks, calls tools, checks the results, and decides what to do next. You control it with these settings:

| Setting | Default | What It Limits |
|---------|---------|----------------|
| **Max iterations** | 200 | How many tool-call rounds per request |
| **Wall-clock budget** | 30s | Max elapsed time for a single agent run |
| **Token budget** | 1,000,000 | Max cumulative input tokens across all iterations |

If a budget runs out, the agent stops and explains why, then offers to continue.

### Context Compaction

Long conversations get compacted automatically. Old messages are summarized into a compact form that keeps the important bits while cutting token usage. Compaction markers show up in the chat timeline so you can see what got rolled up.

### Session Progress

The agent shows its current phase:

```
Preparing → Iterating → Waiting for model → Compacting → Done
```

Each tool call shows its name, arguments, runtime, and result. Expand it to see the full output.

## Source Management

### Database Sources

Attach any configured connection as a Data Studio source. The agent reads schemas, queries data, and writes changes based on the permissions you set.

### File Sources (Read-Only)

You can also attach local files as read-only sources:

- **CSV**, **Excel**, **JSON**, **Parquet**

The agent can inspect and query file contents but can't modify them.

## Session Management

Each Data Studio conversation is a **session** with its own history, attached sources, and settings.

- **Session History**: Browse and switch between past sessions from the history panel
- **New Session**: Start a clean conversation
- **Detach Sources**: Remove a source from a session without deleting the connection
- **Model Selection**: Pick a different model per session

## Sidebar Assistant

The Sidebar Assistant is a lightweight chat panel accessible from anywhere in the app. It is separate from Data Studio — it works as a single-turn Q&A interface rather than a multi-step agent loop.

**What it's good for:**
- Ask questions about your database schema or query results
- Generate queries using your schema as context
- Get explanations of query behavior and error messages
- Quick debugging help without leaving your current view

**How it differs from Data Studio:**

| Feature | Sidebar Assistant | Data Studio |
|---------|-----------------|-------------|
| **Interaction** | Single Q&A turns | Multi-step agent loop |
| **Tool execution** | No — text responses only | Yes — reads schemas, runs queries, modifies data |
| **Context** | Current conversation only | Full session with history and compaction |
| **Source attachment** | No | Yes — attach multiple databases per session |
| **Best for** | Quick questions, explanations | Complex data operations and analysis |

**Opening the Assistant:**
- Click the chat icon (💬) in the right sidebar
- Keyboard shortcut: default shortcut for quick access

The Assistant shares the same provider and model configuration as Data Studio. You can configure a separate model for it in **Settings → AI → Models** if you want a lighter model for quick Q&A while reserving a more capable model for Data Studio.

Multi-chat sessions are supported with automatic provider isolation. You can delete individual chat sessions from the history panel.

## Providers & Models

### Supported Providers

DocKit supports 12 AI provider types — cloud and local:

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
2. Click **Add Provider** and pick a type
3. Fill in:

| Field | Description |
|-------|-------------|
| **Display Name** | Whatever you want to call this provider |
| **Base URL** | API endpoint (pre-filled for standard providers) |
| **API Key** | Your API key or token |
| **Proxy** | HTTP proxy URL (optional) |

4. Click **Test Connection** to check it works
5. Click **Save**

DocKit finds available models automatically. You can then route them:

- **Sidebar Assistant** — Model for quick Q&A
- **Data Studio** — Model for the full agent loop
- If you don't set one, DocKit picks the best available model

### Getting an API Key

- **OpenAI**: [platform.openai.com](https://platform.openai.com) → API Keys
- **Anthropic**: [console.anthropic.com](https://console.anthropic.com) → API Keys
- **DeepSeek**: [platform.deepseek.com](https://platform.deepseek.com) → API Keys
- **OpenRouter**: [openrouter.ai](https://openrouter.ai) → Keys
- **Ollama / LM Studio**: Run locally, no API key needed

### Proxy Configuration

If you're behind a firewall:

1. Go to Settings → Providers and enter a proxy URL for each provider
2. Format: `http://host:port`
3. Or pick **Use system proxy** to inherit OS-level settings

## Privacy & Security

**What the agent sends to AI providers:**
- ✅ Your text prompt
- ✅ Current index, table, and collection names
- ✅ Schema and mapping (field names and types)
- ✅ Query results (truncated to about 1,024 characters, enough context for the agent to work with)
- ❌ Full query results (stored locally in DocKit's database, visible in the UI)
- ❌ Credentials (API keys, passwords, connection secrets never leave your machine)

**How tool results flow to the LLM**: When the agent runs a tool like `es__search` or `mongo__find`, the full result stays local. Only a short summary (around 1,024 characters) goes back to the LLM as context for its next step. Enough to work with, but not your full dataset.

**Credential safety**: Connection secrets live on your machine and get resolved in the Rust backend. The agent never sees them — it passes a `connection_id` (something like `"42"`), and the backend maps that to the real config before running the tool. Passwords, API keys, and AWS secrets never make it into LLM prompts.

**No telemetry**: DocKit doesn't phone home. No query data, credentials, or analytics leave your machine. Works fully offline with local providers like Ollama and LM Studio.

## Troubleshooting

### API Key Issues

**Error**: `Invalid API key` or `Unauthorized`

1. Make sure the key has no extra spaces or line breaks
2. Check it hasn't expired
3. Verify you have enough credits or quota
4. Try generating a new key

### Connection Failed

**Error**: `Network error` or `Timeout`

1. Check your internet connection
2. Set up a proxy if you're behind a firewall
3. Verify the API endpoint is reachable
4. For local providers (Ollama, LM Studio): make sure the service is running

### Agent Stops Early

**Error**: Agent stops with an iteration cap, wall clock, or token budget message

1. Raise the relevant budget in Settings → AI → Chat settings
2. Simplify your request so it needs fewer tool calls
3. Start a new session to reset the context

### Poor Quality Responses

1. Try a different model (Claude for reasoning tasks, GPT-4o for general use)
2. Be more specific in your request — include field names and index names
3. Break complex operations into smaller steps

## Next Steps

- **[Settings Guide](/docs/dockit/settings)** — Configure providers, budgets, and model routing
- **[Connect to Server](/docs/dockit/connect-to-server)** — Set up database connections for Data Studio sources
- **[DynamoDB GUI Client](/products/dockit/dynamodb-gui-client)** — DynamoDB features and PartiQL
- **[Elasticsearch GUI Client](/products/dockit/elasticsearch-gui-client)** — Elasticsearch management

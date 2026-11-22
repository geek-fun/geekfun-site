---
title: DocKit Agentic Data Studio — Data AI Agent for Your Databases
description: Configure DocKit Agentic Data Studio and Sidebar Assistant to interact with MongoDB, Elasticsearch, OpenSearch, DynamoDB, and EasySearch through natural language. Set up AI providers, manage permissions, and control the agent loop.
head:
  - - meta
    - name: keywords
      content: DocKit Agentic Data Studio, AI database agent, natural language database query, AI assistant, agent loop, tool execution, database data AI agent, OpenAI, Anthropic, DeepSeek, Ollama, DocKit AI
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

DocKit's Agentic Data Studio is a data AI agent that talks to your databases in natural language. Tell it what you need and it writes queries, inspects schemas, updates documents, deletes records, or creates indexes — all in one conversation.

The Sidebar Assistant gives you the same AI in a chat panel, so you can ask questions and generate queries without switching views.

![DocKit Data Studio list indices](/dockit-data-studio-list-indices.gif)

## What the Agent Can Do

The agent has tools for every supported database:

| Database | Capabilities |
|----------|-------------|
| **Elasticsearch / OpenSearch / EasySearch** | Search, get, index, update, delete documents · List indices, get mappings, create/delete indices · Manage aliases (list, get, create, delete, bulk update) · Add or update field mappings |
| **DynamoDB** | Execute PartiQL queries (SELECT, INSERT, UPDATE, DELETE) · Describe and list tables |
| **MongoDB** | Find documents, run aggregation pipelines · Insert, update, delete documents · List databases and collections |

Each tool has a **risk level** (Safe for read-only, Elevated for create/update, or Destructive for delete) and needs the matching permission to run.

## Quick Start

Open **Settings → AI** and add an AI provider (OpenAI, Anthropic, DeepSeek, or any of the 12 supported). Then open **Data Studio** from the Nav bar, click **Add Source** to attach a database connection, and type what you want to do in plain English.

![DocKit Settings LLMs demo](/dockit-settings-llm.gif)

For quick questions without leaving your editor, use the **Sidebar Assistant** — click the chat icon (💬) in the sidebar.

## Safety & Permissions

With Ultimate, you can use Data Studio on the connections you’ve added to the conversation. DocKit checks both the connection and conversation permissions before it runs a tool. Ask and Auto determine when it prompts you. See [AI permissions](/docs/dockit/ai-permissions) to set defaults, change access, or find out why a request was blocked.

## Agent Loop

The agent runs in a loop: it thinks, calls tools, checks the results, and decides what to do next. Three settings control how long it runs: **max iterations** (default 200) limits the number of tool-call rounds, **wall-clock budget** (default 30 minutes) caps elapsed time, and **token budget** (default 1,000,000) limits cumulative input tokens. If any budget runs out, the agent stops with an explanation and offers to continue.

Long conversations get compacted automatically — old messages are summarized into a compact form that keeps the important bits while cutting token usage. Compaction markers show up in the chat timeline so you can see what got rolled up.

The agent shows its current phase as it works:

```
Preparing → Iterating → Waiting for model → Compacting → Done
```

Each tool call displays its name, arguments, runtime, and result. Expand any tool call to see the full output.

## Source Management

Attach any configured database connection as a Data Studio source. The agent reads schemas, queries data, and writes changes based on the permissions you set. You can also attach local files as read-only sources — CSV, Excel, JSON, and Parquet. The agent can inspect and query file contents but can't modify them.

## Session Management

Each Data Studio conversation is a **session** with its own history, attached sources, and settings. Browse and switch between past sessions from the history panel, start a clean conversation with a new session, detach a source without deleting the underlying connection, or pick a different model per session.

## Sidebar Assistant

Open the chat panel from the editor sidebar to ask about a query, explain an error, or generate a request. The assistant can also run tools using the active connection's [AI permissions](/docs/dockit/ai-permissions). Data Studio works with the sources attached to its conversation and can use more than one connection in a session.

## Providers & Models

DocKit supports **12+** AI provider types — cloud and local: `OpenAI`, `Anthropic`, `DeepSeek`, `OpenRouter` (200+ models), `Google Gemini`, `Grok`, `Mistral`, `Azure OpenAI`, `Ollama` (fully offline), `LM Studio` (fully offline), custom OpenAI-compatible endpoints, and custom Anthropic-compatible endpoints.

To add a provider, go to **Settings → AI** and click **Add Provider**. Pick a type, give it a display name, enter the API endpoint (pre-filled for standard providers), paste your API key or token, and optionally configure an HTTP proxy URL. Click **Test Connection** to verify, then **Save**.

DocKit discovers available models automatically. You can route them to specific features — pick one model for the **Sidebar Assistant** (quick Q&A) and another for **Data Studio** (full agent loop). If you don't set a preference, DocKit picks the best available model.

Getting an API key:
- **OpenAI**: [platform.openai.com](https://platform.openai.com) → API Keys
- **Anthropic**: [console.anthropic.com](https://console.anthropic.com) → API Keys
- **DeepSeek**: [platform.deepseek.com](https://platform.deepseek.com) → API Keys
- **OpenRouter**: [openrouter.ai](https://openrouter.ai) → Keys
- **Ollama / LM Studio**: Run locally, no API key needed

If you need a proxy to reach a provider, enter a URL like `http://host:port` for that provider in **Settings → AI**. Select **Use system proxy** to use your operating system’s proxy settings.

## How Context Works

![DocKit Data Studio architecture](/dockit-data-studio-arch.png)

What the model can see depends on the sources you add and their read permissions. If you use a cloud model, DocKit can send the provider your prompt, context you attached, the relevant schema, and summaries of tool results. Those summaries may include values from returned records.

## Privacy & Security

DocKit resolves database connection secrets in its backend. Tools refer to connections by ID, so the agent can request an operation without receiving the database credentials as arguments. To keep model inference on your machine, configure a local model through Ollama or LM Studio.

## Troubleshooting

### API Key Issues

If you see `Invalid API key` or `Unauthorized`, make sure the key has no extra spaces or line breaks, check it hasn't expired, verify you have enough credits or quota, and try generating a new key.

### Connection Failed

For `Network error` or `Timeout`, check your internet connection, set up a proxy if you're behind a firewall, verify the API endpoint is reachable, and for local providers like Ollama or LM Studio, make sure the service is running.

### Agent Stops Early

If the agent stops with an iteration cap, wall clock, or token budget message, raise the relevant budget in Settings → AI → Chat settings, simplify your request so it needs fewer tool calls, or start a new session to reset the context.

### Poor Quality Responses

Try a different model — Claude for reasoning tasks, GPT-4o for general use. Be more specific in your request by including field names and index names. Break complex operations into smaller steps.

## Next Steps

- **[Settings Guide](/docs/dockit/settings)** — Configure providers, budgets, and model routing
- **[Connect to Server](/docs/dockit/connect-to-server)** — Set up database connections for Data Studio sources
- **[DynamoDB GUI Client](/products/dockit/dynamodb-gui-client)** — DynamoDB features and PartiQL
- **[Elasticsearch GUI Client](/products/dockit/elasticsearch-gui-client)** — Elasticsearch management

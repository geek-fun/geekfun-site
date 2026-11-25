---
title: Agentic Data Studio & AI Assistant | BYOK SQL Agent | SqlKit
description: Configure cloud or local LLMs (20 presets including OpenAI, Anthropic, Gemini, DeepSeek, Ollama, LM Studio) in SqlKit's Agentic Data Studio and Queries AI Assistant sidebar.
outline: [2, 3]
---

# Agentic Data Studio & AI Assistant

<DocsBadge variant="ultimate">Ultimate</DocsBadge>

SqlKit ships **two built-in AI workspaces** powered by the `data-studio-agent` runtime and your own model API key or local inference server (**BYOK**):

1. **Agentic Data Studio** (`/data-studio`) — a full-page, multi-source AI workspace where you attach one or more saved database connections, keep persistent SQLite-backed conversation sessions, and run schema-aware analysis across databases.
2. **AI Assistant Sidebar** — a resizable right-hand drawer (320–600 px) inside **Queries** that automatically knows your active connection, current schema, and open SQL editor contents.

Looking to connect **Claude Code, OpenAI Codex, or Cursor** instead? See [MCP bridge & coding agents](/docs/sqlkit/mcp-bridge).

## Configure a model provider {#configure-a-provider}

SqlKit includes **20 built-in provider presets** plus generic OpenAI-compatible and Anthropic-compatible custom providers. You can also assign **different models** to the Queries Sidebar Assistant and to Agentic Data Studio.

<DocsSteps>

### Open AI Settings

Navigate to **Settings → AI → Add Provider**.

### Choose a preset or custom endpoint

| Category | Built-in presets & defaults |
| --- | --- |
| **Cloud APIs** | **OpenAI**, **Anthropic**, **Google Gemini**, **DeepSeek**, **Grok (xAI)**, **Mistral**, **Azure OpenAI**, **OpenRouter**, Requesty, Opper, API Route, Cheaper Inference, Runcrate, CloudGPU, MartLLM, cheapaimodel |
| **Local / Offline** | **Ollama** (default `http://127.0.0.1:11434`), **LM Studio** (default `http://127.0.0.1:1234/v1`) |
| **Custom** | **Custom OpenAI-compatible** or **Custom Anthropic-compatible** — set your Base URL and API compatibility protocol |

### Configure credentials, proxy & context window

- Enter your **API Key** (stored locally on your machine; optional for local Ollama/LM Studio servers).
- Optionally configure a **per-provider HTTP Proxy** (`None`, `System`, or `Manual`) if your network requires a proxy to reach cloud LLM APIs.
- Optionally override the **Context Window** size for custom or fine-tuned models.

### Validate and sync models

Click **Save Provider**, then click **Test** to validate connectivity and **Sync Models** to fetch available model IDs. If an endpoint does not expose a `/models` list, enter the accepted model IDs manually in **Models**.

</DocsSteps>

## Attach a connection and run a first conversation {#first-conversation}

Data Studio supports **41+ SQL engines**—covering PostgreSQL & the PG-wire family, MySQL & the MySQL-wire family, SQL Server, SQLite, DuckDB, Oracle, and Dameng DM8.

<DocsSteps>

### Start a session & attach sources

Open **Data Studio**, click **New Session**, and choose **Add Data Source**. Pick one or more saved connections and click **Connect**. Starting with a single development or read-only connection gives the agent the clearest context.

### Check permissions & select Ask mode

Verify the attached source's [AI permissions](/docs/sqlkit/ai-permissions), select your model in the picker, and keep the session in **Ask** mode while getting familiar with the workflow.

### Ask a schema-grounded question

Start with a discovery or drafting prompt—for example:

> *"Inspect the schema to find which table stores customer orders and which column tracks order creation dates. Draft a SQL query for monthly order volume over the past 12 months."*

The agent inspects live metadata through its registered tools, shows expandable full tool outputs, and drafts accurate SQL using your real table and column names.

### Review & execute safely

Inspect the generated SQL and copy or open it in **Queries** to run, tune with `EXPLAIN`, or save as a `.sql` file.

</DocsSteps>

<DocsFigure src="/sqlkit-data-studio-ui.png" alt="SqlKit Data Studio with attached database schema context, model selector, and drafted SQL" caption="Agentic Data Studio uses live schema inspection tools to draft dialect-accurate SQL while keeping tool calls transparent." :width="1440" :height="935" />

## Use the AI Assistant beside a query {#assistant}

Inside the **Queries** workspace, toggle **AI Assistant** from the top bar to open a resizable right sidebar (320–600 px) without leaving your active editor:

- Automatically tracks your **active connection, database/schema, and SQL editor context**.
- Ideal for explaining an unfamiliar query, diagnosing a database error message, or rewriting a slow query after inspecting its `EXPLAIN` plan.
- Enforces the exact same per-connection [AI permission policy](/docs/sqlkit/ai-permissions) as Data Studio.
- Supports **independent model selection** from Data Studio so you can use a fast model for quick SQL edits in the sidebar and a reasoning model for deep multi-table exploration in Data Studio.

## Context compaction, budgets & custom prompts

Fine-tune agent behavior in **Settings → AI** and per connection:

- **Context Indicator & Compaction**: a live context-usage meter displays how full the conversation window is. **Auto-Compact** (enabled by default) summarizes older turns automatically before hitting context limits, and you can trigger manual compaction anytime.
- **Safety Budgets**: configure **Max Iterations** (default `200`), **Wall-Clock Budget** (default `30 min`), and **Token Budget** (default `20,000,000`) to prevent runaway loops, or cancel an active run immediately at any time.
- **Global System Prompt**: define workspace-wide SQL style rules (e.g., always qualify schema names, prefer CTEs, never omit `LIMIT`).
- **Per-Connection Context Prompt**: under **Connections → Edit → Advanced**, document domain-specific conventions for a specific database (e.g., soft-delete columns like `deleted_at IS NULL`, currency units in cents, or tenant isolation rules).

::: info Data privacy with cloud vs. local models
Database passwords and connection secrets are **never** sent to any LLM. However, with a cloud LLM provider, your prompts plus relevant schema metadata and query results returned by tools are sent to that provider's API. Use **Ollama** or **LM Studio** when all inference must stay 100% local on your machine.
:::

## Troubleshoot setup {#troubleshoot}

| Symptom | What to check |
| --- | --- |
| **No models appear in the picker** | Enable at least one provider in **Settings → AI**, then click **Sync Models** or enter model IDs manually. |
| **Provider test fails** | Check the Base URL, API key, and **per-provider HTTP proxy** settings. For Ollama/LM Studio, confirm the local server is running and the model is loaded. |
| **Connection cannot be attached in Data Studio** | Save and test the connection in **Connections** first, and confirm it is one of the 41+ engines enabled for Data Studio. |
| **Agent reports an action is blocked** | Open **Review permissions** on the blocked message or check the connection policy in [AI permissions & safety](/docs/sqlkit/ai-permissions). |

## Next steps

<DocsCardGrid :cols="2">
  <DocsCard title="AI permissions & safety model" description="Configure Read/Write/Delete/Manage rules, Ask vs. Auto, and AST write guards." href="/docs/sqlkit/ai-permissions" icon="shield" />
  <DocsCard title="MCP bridge & coding agents" description="Share permitted SqlKit connections with Claude Code, Codex, and Cursor." href="/docs/sqlkit/mcp-bridge" badge="Ultimate" badge-variant="ultimate" icon="terminal" />
</DocsCardGrid>

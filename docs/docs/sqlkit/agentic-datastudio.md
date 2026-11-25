---
title: Set Up Agentic Data Studio and the SqlKit AI Assistant
description: Add a cloud or local model in SqlKit, attach a database to Data Studio, and use the AI assistant to inspect schemas and draft SQL.
---

# Agentic Data Studio in SqlKit

Agentic Data Studio is SqlKit’s in-app AI workspace. Open **Data Studio** for a conversation with one or more saved database connections. For a question about the connection you’re already using, open **AI Assistant** from **Queries**. Both features require SqlKit Ultimate.

To use Codex, Claude Code, Cursor, or another external coding agent instead, follow [MCP setup](/docs/sqlkit/mcp-bridge).

## Configure a model provider {#configure-a-provider}

1. Open **Settings → LLMs → Add Provider**.
2. For a hosted model, pick the provider preset and enter your API key. For a self-hosted endpoint, pick Ollama, LM Studio, or a compatible custom provider and check the **Base URL**. Start the local model server before testing.
3. Select **Save Provider**. In **Providers**, run **Test**, then use **Sync Models**. If the provider cannot list its models, edit the provider and enter the model IDs it accepts in **Models**.
4. Open **Data Studio** and choose an enabled model in the conversation’s model picker.

| Provider | Setup to check |
| --- | --- |
| OpenAI, Anthropic, or another hosted provider | Use its preset and the API key for your account. Verify that the model is available to that key. |
| Ollama | Start Ollama and make the model available on the server. The SqlKit preset uses `http://127.0.0.1:11434` by default. |
| LM Studio | Load a model and start the local API server. The SqlKit preset uses `http://127.0.0.1:1234/v1` by default. |
| Custom endpoint | Enter the provider’s Base URL and set **API Compatibility** to match its protocol. |

## Attach a connection and run a first conversation {#first-conversation}

1. [Add and test a database connection](/docs/sqlkit/connect-to-database). For the first session, use a development database or an account that can only read data.
2. In **Data Studio**, start a **New Session** and select **Add Data Source**. Choose the saved connection and select **Connect** to attach it. Start with one source so the agent has a clear target.
3. Check the source’s [AI permissions](/docs/sqlkit/ai-permissions), select a model, and leave the session in **Ask** while you learn what it does.
4. Start with a schema question. For example, “Find the table that records orders and identify its date column. Draft SQL for a monthly order count without executing it.”
5. Inspect the table and column names it used and review the SQL in **Queries** before running it yourself.

<DocsFigure src="/sqlkit-data-studio-ui.png" alt="SqlKit Data Studio with schema context, a model picker, and a generated SQL response" caption="Data Studio can inspect an attached connection and draft SQL using its schema. The conversation shows the model and sources in use." :width="1440" :height="935" />

## Use the AI Assistant beside a query {#assistant}

In **Queries**, select the connection and open **AI Assistant** from the top bar. Use it to explain a statement, ask how to interpret an error, or ask for a revised query. The sidebar uses the active connection’s AI policy. Data Studio keeps its own attached sources and session history.

## Troubleshoot setup {#troubleshoot}

| What you see | What to check |
| --- | --- |
| No model to select | Enable a provider in **Settings → LLMs**. Sync models or enter the model ID manually. |
| Provider test fails | Verify the endpoint and API key. For a local provider, check that its server and model are running. |
| No compatible source in Data Studio | Save and test a connection in **Connections** before attaching it. |
| The agent reports that an action is blocked | Check the connection and conversation policy in [AI permissions](/docs/sqlkit/ai-permissions). |

With a hosted provider, the model can receive the prompt and relevant schema or query-result context. Use a local model if inference must stay on your machine.

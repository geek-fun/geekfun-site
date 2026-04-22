---
title: DocKit AI Assistant - Generate Queries with OpenAI and DeepSeek
description: Configure DocKit AI assistant to generate Elasticsearch, OpenSearch, and DynamoDB queries from natural language. Set up OpenAI or DeepSeek providers, customize prompts, and boost productivity.
head:
  - - meta
    - name: keywords
      content: DocKit AI assistant, Elasticsearch AI, DynamoDB AI, OpenAI database queries, DeepSeek database assistant, AI query generation, natural language to SQL, NoSQL AI helper
  - - link
    - rel: canonical
      href: https://www.geekfun.club/docs/dockit/ai-assistant
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/docs/dockit/ai-assistant
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/docs/dockit/ai-assistant
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/docs/dockit/ai-assistant
---

# DocKit AI Assistant

DocKit's AI assistant helps you generate complex database queries from natural language descriptions. Instead of memorizing Elasticsearch DSL syntax or PartiQL structures, describe what you need and let the AI write the query.

## What the AI Assistant Can Do

- **Generate Elasticsearch/OpenSearch queries**: Search DSL, aggregations, filters
- **Generate DynamoDB PartiQL**: SELECT, INSERT, UPDATE, DELETE statements
- **Explain query syntax**: Ask "what does this query do?" for explanations
- **Optimize queries**: Get suggestions for query improvements
- **Debug errors**: Paste error messages for troubleshooting help

## Supported Providers

DocKit supports two AI providers:

| Provider | Models | Best For |
|----------|--------|----------|
| **OpenAI** | GPT-4, GPT-4o, GPT-3.5 | General-purpose, best quality |
| **DeepSeek** | DeepSeek Chat, DeepSeek Coder | Cost-effective, code-specialized |

## Configuring OpenAI

1. Open **Settings** → **AI Assistant** tab
2. Select **OpenAI** tab
3. Fill in:

| Field | Description | Example |
|-------|-------------|---------|
| **Model** | OpenAI model name | `gpt-4o`, `gpt-4`, `gpt-3.5-turbo` |
| **API Key** | Your OpenAI API key | `sk-proj-...` |
| **Prompt** | Custom system prompt (optional) | See below |
| **Proxy** | HTTP proxy URL (optional) | `http://127.0.0.1:7890` |

4. Click **Save & Enable**

### Getting an OpenAI API Key

1. Go to [platform.openai.com](https://platform.openai.com)
2. Sign in or create an account
3. Navigate to **API Keys** → **Create new secret key**
4. Copy the key (starts with `sk-`)
5. Paste into DocKit

**Note**: OpenAI requires payment. GPT-4 costs ~$0.03 per 1K tokens. GPT-3.5-turbo is cheaper (~$0.002 per 1K tokens).

## Configuring DeepSeek

1. Open **Settings** → **AI Assistant** tab
2. Select **DeepSeek** tab
3. Fill in:

| Field | Description | Example |
|-------|-------------|---------|
| **Model** | DeepSeek model name | `deepseek-chat`, `deepseek-coder` |
| **API Key** | Your DeepSeek API key | From DeepSeek platform |
| **Prompt** | Custom system prompt (optional) | See below |
| **Proxy** | HTTP proxy URL (optional) | `http://127.0.0.1:7890` |

4. Click **Save & Enable**

### Getting a DeepSeek API Key

1. Go to [platform.deepseek.com](https://platform.deepseek.com)
2. Sign in or create an account
3. Navigate to **API Keys**
4. Create and copy your key
5. Paste into DocKit

**Note**: DeepSeek is more cost-effective than OpenAI. `deepseek-coder` is optimized for code generation tasks.

## Custom Prompts

The **Prompt** field lets you customize how the AI responds. Default prompts are optimized for database queries, but you can tailor them.

### Default Prompt Behavior

DocKit automatically injects:
- **Index/Table name**: Current index or table context
- **Schema/Mapping**: Field names and types
- **Database type**: Elasticsearch, OpenSearch, or DynamoDB

This context helps the AI generate accurate queries matching your actual data structure.

### Custom Prompt Example

```
You are a database expert. Generate queries for Elasticsearch/DynamoDB.
- Use only fields from the provided schema
- Explain the query before showing code
- Suggest optimizations when relevant
```

**Tip**: Keep prompts concise. Long prompts consume tokens and slow responses.

## Proxy Configuration

If you're behind a firewall or need to route requests through a proxy:

1. Enter proxy URL: `http://127.0.0.1:7890`
2. Format: `http://host:port`
3. Supports HTTP and HTTPS proxies

Common proxy tools:
- **Clash**: Default port 7890
- **V2Ray**: Various ports
- **Corporate proxies**: Check your network settings

## Using the AI Assistant

Once configured, access the assistant from the editor:

1. Click the **AI icon** (✨) in the toolbar
2. Or press the keyboard shortcut for your platform
3. Type your question in natural language
4. Press Enter to send

### Example Queries

**Elasticsearch:**
```
"Find all users who signed up in the last 7 days"
"Aggregate sales by region with average price"
"Search products containing 'laptop' sorted by price"
```

**DynamoDB:**
```
"Get all orders for user ID 'user-123'"
"Find items where status equals 'pending'"
"Update the email field for user 'alice'"
```

The AI responds with:
1. Generated query code
2. Brief explanation
3. Any suggestions or warnings

### Applying Generated Queries

After the AI generates a query:

1. Review the code in the chat panel
2. Click **Copy to Editor** to insert into your query file
3. Edit as needed (adjust field names, add filters)
4. Execute with `Cmd+Enter` (or `Ctrl+Enter`)

## Privacy and Data Handling

**What DocKit sends to AI providers:**
- ✅ Your text prompt (natural language question)
- ✅ Current index/table name
- ✅ Schema/mapping (field names and types)
- ❌ Your actual data (never sends database contents)
- ❌ Credentials (never sends API keys or passwords)

**Data retention:**
- OpenAI/DeepSeek may retain prompts for 30 days (check their policies)
- DocKit does not store your prompts locally after the session

**Best practices:**
- Don't paste sensitive data values in prompts
- Use generic examples when asking about production data
- Review generated queries before executing on production

## Troubleshooting

### Invalid API Key

**Error**: `Invalid API key` or `Unauthorized`

**Solution**:
1. Verify the key is correct (no extra spaces)
2. Check the key hasn't expired
3. Ensure sufficient credits/quota
4. Try regenerating the key

### Connection Failed

**Error**: `Network error` or `Timeout`

**Solution**:
1. Check internet connection
2. Configure proxy if behind firewall
3. Verify API endpoint is accessible
4. Check if OpenAI/DeepSeek services are operational

### Poor Quality Responses

**Problem**: AI generates incorrect or nonspecific queries

**Solution**:
1. Switch to a better model (GPT-4 instead of GPT-3.5)
2. Be more specific in your prompt (include field names)
3. Add schema context manually if auto-injection fails
4. Use `deepseek-coder` for code-specific tasks

### Rate Limits

**Error**: `Rate limit exceeded`

**Solution**:
1. Wait a few seconds before retrying
2. Reduce prompt frequency
3. Upgrade your OpenAI/DeepSeek plan for higher limits

## Switching Providers

To switch between OpenAI and DeepSeek:

1. Open **Settings** → **AI Assistant**
2. Configure both providers (they can be set up simultaneously)
3. Only one can be **enabled** at a time
4. Click **Save & Enable** on your preferred provider

The enabled provider handles all AI requests until you switch.

## Disabling the AI Assistant

To turn off AI features:

1. Open **Settings** → **AI Assistant**
2. Click **Reset** on the active provider
3. Or clear the API key field

When disabled, the AI icon is grayed out in the toolbar.

## Cost Management

AI queries consume tokens. Estimate costs:

| Provider | Model | Cost per 1K tokens | Typical Query Cost |
|----------|-------|-------------------|-------------------|
| OpenAI | GPT-4o | $0.005 | ~$0.01-0.02 |
| OpenAI | GPT-4 | $0.03 | ~$0.05-0.10 |
| OpenAI | GPT-3.5-turbo | $0.002 | ~$0.003-0.005 |
| DeepSeek | deepseek-chat | $0.001 | ~$0.002 |
| DeepSeek | deepseek-coder | $0.002 | ~$0.003 |

**Tips to reduce costs:**
- Use GPT-3.5-turbo or DeepSeek for routine queries
- Reserve GPT-4 for complex queries requiring deep reasoning
- Keep prompts concise (shorter prompts = fewer tokens)
- Cache common query patterns in your saved files

## Next Steps

- **[Settings Guide](/docs/dockit/settings)** — Configure other DocKit options
- **[Elasticsearch Cluster Management](/docs/dockit/manage-elasticsearch-cluster)** — Work with indices
- **[DynamoDB PartiQL Editor](/products/dockit/features/dynamodb-partiql)** — Learn PartiQL syntax
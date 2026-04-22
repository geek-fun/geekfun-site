---
title: Use DocKit GUI connect to Database Server
description: DocKit as a NoSQL GUI client, it supports multiple databases, including Elasticsearch, OpenSearch, DynamoDB, and more to come. This document outlines how to connect to a database server using DocKit.
head:
  - - meta
    - name: keywords
      content: DocKit, Elasticsearch GUI client, connect Elasticsearch server, Elasticsearch connection guide, Elasticsearch management tool, Elasticsearch desktop client, Elasticsearch data management, Elasticsearch data analysis, Elasticsearch data visualization, Elasticsearch query tool, Elasticsearch cross-platform client, Elasticsearch open-source client, Elasticsearch Mac client, Elasticsearch Windows client, Elasticsearch Linux client, Elasticsearch AI-powered search, Elasticsearch multiple server support, Elasticsearch API key auth, Elasticsearch SSL
  - - link
    - rel: canonical
      href: https://www.geekfun.club/docs/dockit/connect-to-server
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/docs/dockit/connect-to-server
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/docs/dockit/connect-to-server
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/docs/dockit/connect-to-server
---

# Use DocKit GUI connect to Database Server

DocKit as a NoSQL GUI client, it supports multiple databases, including [Elasticsearch](https://www.elastic.co),
OpenSearch, [DynamoDB](https://aws.amazon.com/dynamodb/), and more to come. This document outlines how to connect to a database server using DocKit.

## Install and Open DocKit

you can find detailed instructions on how to install and open DocKit in
the [installation guide](/docs/dockit/installation).

## Connect to Elasticsearch Server

After opening DocKit, click the `+ New connection` button to add a new connection, then you can input the Elasticsearch
server information, including the connection name, host, port, and authentication information.
![mac connect to Elasticsearch server](/mac-connect-to-server.png)

### Basic Connection Fields

| Field | Required | Description |
|-------|----------|-------------|
| **Name** | Yes | Connection display name (e.g., "Production ES") |
| **Host** | Yes | Server URL with protocol (`http://` or `https://`) |
| **Port** | Yes | Server port (default: 9200) |
| **Index Name** | No | Specific index if user has limited permissions |

### Authentication Methods

DocKit supports two authentication methods for Elasticsearch:

#### Basic Authentication

Select **Basic** tab and enter:
- **Username**: Elasticsearch username
- **Password**: User password

Best for:
- Self-hosted Elasticsearch
- Development environments
- Simple auth setups

#### API Key Authentication

Select **API Key** tab and enter:
- **API Key**: Elasticsearch API key (paste the full key)

Best for:
- Elasticsearch Cloud deployments
- Production environments
- Rotating credentials without changing passwords

**Creating an API Key in Elasticsearch:**

```json
POST /_security/api_key
{
  "name": "dockit-client",
  "role_descriptors": {
    "dockit-role": {
      "index": [
        { "names": ["*"], "privileges": ["read", "write"] }
      ]
    }
  }
}
```

Response contains the API key to paste into DocKit.

### SSL Certificate Verification

DocKit verifies SSL certificates by default for `https://` connections.

**Toggle SSL verification:**
- Click the 🔒 (lock) icon next to the host field
- 🔒 **Locked** = SSL verification enabled (recommended)
- 🔓 **Unlocked** = SSL verification disabled

**When to disable SSL:**
- Self-signed certificates in development
- Internal certificates not in public CA chains
- Testing environments only

**Warning**: Never disable SSL verification for production connections — it exposes credentials to interception.

### Query Parameters

Add custom query parameters appended to all requests:

| Example | Use Case |
|---------|----------|
| `pretty=true` | Format JSON responses |
| `timeout=30s` | Set request timeout |
| ` preference=_local` | Route requests to local node |

Format: key=value pairs separated by `&`

## Connect to OpenSearch Server

OpenSearch connections work identically to Elasticsearch. Use:
- Host: `http://your-opensearch:9200`
- Port: 9200 (default)
- Same authentication options (Basic, API Key)

DocKit auto-detects OpenSearch vs Elasticsearch from cluster info.

## Connect to DynamoDB

Choose **DynamoDB** as database type and configure:

### AWS DynamoDB (Production)

| Field | Description |
|-------|-------------|
| **Region** | AWS region (e.g., `us-east-1`) |
| **Access Key ID** | AWS access key |
| **Secret Access Key** | AWS secret key |

Credentials can be:
- **IAM user credentials**: Long-term keys
- **Temporary credentials**: From STS AssumeRole
- **Environment credentials**: Use `.env` or AWS config

### DynamoDB Local (Development)

Connect to local DynamoDB for offline development:

| Field | Value |
|-------|-------|
| **Endpoint** | `http://localhost:8000` |
| **Region** | Any value (e.g., `us-east-1`) |
| **Access Key** | Any value (e.g., `local`) |
| **Secret Key** | Any value (e.g., `local`) |

See [Query DynamoDB Locally Guide](/blog/query-dynamodb-locally) for setup instructions.

## Test Connection

Click **Test Connection** to verify connectivity before saving.

**Requirements:**
- `view_index_metadata` permission minimum
- Specify index name if user lacks `*` index access

**Common errors:**

| Error | Solution |
|-------|----------|
| `Connection refused` | Check host/port, verify server running |
| `Unauthorized` | Verify credentials, check API key validity |
| `SSL handshake failed` | Enable SSL verification or fix certificate |
| `Index not found` | Specify valid index name |

## Save Connection

Click **Confirm** to save the connection. Connections are:
- Encrypted and stored locally
- Available in sidebar for quick access
- Persistent across app restarts

## Managing Multiple Connections

DocKit supports multiple saved connections:

- **Sorting**: Click column headers to sort by name, type, date
- **Filtering**: Search by name in the connection panel
- **Quick switch**: Click any connection in sidebar
- **Edit**: Right-click → Edit to modify settings
- **Delete**: Right-click → Delete to remove

## Connection Security Best Practices

1. **Use API keys in production** — Rotate easily, audit usage
2. **Enable SSL** — Never disable in production
3. **Least privilege** — Grant only required index permissions
4. **Separate connections** — Different credentials for dev/staging/production
5. **Rotate credentials** — Regularly update keys and passwords

## Next Steps

- **[Elasticsearch Cluster Management](/docs/dockit/manage-elasticsearch-cluster)** — Monitor indices and nodes
- **[Import & Export](/docs/dockit/import-export)** — Move data in and out
- **[Query History](/docs/dockit/query-history)** — Access past queries

---
title: Data Studio Agent tools — tool naming convention
description: Explanation of the `data_studio__{backend}__{action}` naming pattern and a reference table of available tool prefixes and actions for SQL, Elasticsearch, MongoDB, and DynamoDB backends.
head:
  - - meta
    - name: keywords
      content: data studio agent tool naming, MCP tool prefix, data_studio__sql, data_studio__es, data_studio__mongo, data_studio__dynamo
  - - link
    - rel: canonical
      href: https://www.geekfun.club/docs/data-studio-agent/tools/
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/docs/data-studio-agent/tools/
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/docs/data-studio-agent/tools/
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/docs/data-studio-agent/tools/
---

# Tool naming

All Data Studio Agent tools follow the pattern:

```
data_studio__{backend}__{action}
```

| Backend | Prefix | Example actions |
|--------|--------|-----------------|
| SQL (SqlKit) | `data_studio__sql_` | `execute`, `list_tables`, `describe_table`, `explain` |
| Elasticsearch (DocKit) | `data_studio__es_` | `search`, `list_indices`, `get_mapping` |
| MongoDB (DocKit) | `data_studio__mongo_` | `find`, `list_collections`, `insert` |
| DynamoDB (DocKit) | `data_studio__dynamo_` | `query`, `list_tables`, `scan` |

Each action maps to a specific capability in the underlying bridge. The permission model (Read Only, Data Read-Write, Full Access) governs which actions are allowed.

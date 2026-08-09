---
title: Data Studio Agent 工具 — 完整参考
description: Data Studio Agent 全部 79 个 MCP 工具参考：风险等级、所需权限模式、是否触发用户确认提示。
head:
  - - meta
    - name: keywords
      content: Data Studio Agent, 工具参考, data_studio, MCP, SqlKit, DocKit, 工具列表
  - - link
    - rel: canonical
      href: https://www.geekfun.club/zh/docs/data-studio-agent/tools
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/docs/data-studio-agent/tools
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/docs/data-studio-agent/tools
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/docs/data-studio-agent/tools
---

# 工具参考

所有工具遵循 `data_studio__{backend}__{action}` 命名规范。**用户确认**列表示哪些操作会在你的 AI 客户端中触发显式确认提示。

| 工具 | 后端 | 风险 | 所需权限 | 用户确认 |
|---|---|---|---|---|
| `data_studio__list_connections` | Server | 🟢 Safe | Read Only | No |
| `data_studio__get_status` | Server | 🟢 Safe | Read Only | No |
| `data_studio__sqlkit__list_connections` | sqlkit | 🟢 Safe | Read Only | No |
| `data_studio__sqlkit__execute_query` | sqlkit | 🟢 Safe | Read Only | No |
| `data_studio__sqlkit__list_databases` | sqlkit | 🟢 Safe | Read Only | No |
| `data_studio__sqlkit__list_schemas` | sqlkit | 🟢 Safe | Read Only | No |
| `data_studio__sqlkit__list_tables` | sqlkit | 🟢 Safe | Read Only | No |
| `data_studio__sqlkit__get_schema` | sqlkit | 🟢 Safe | Read Only | No |
| `data_studio__sqlkit__describe_table` | sqlkit | 🟢 Safe | Read Only | No |
| `data_studio__sqlkit__explain_query` | sqlkit | 🟢 Safe | Read Only | No |
| `data_studio__sqlkit__execute_write` | sqlkit | 🟡 Elevated | Data Read-Write | No |
| `data_studio__sqlkit__execute_delete` | sqlkit | 🔴 Destructive | Full Access | Yes |
| `data_studio__sqlkit__execute_ddl` | sqlkit | 🔴 Destructive | Full Access | Yes |
| `data_studio__es__search` | dockit · Elasticsearch | 🟢 Safe | Read Only | No |
| `data_studio__es__get_document` | dockit · Elasticsearch | 🟢 Safe | Read Only | No |
| `data_studio__es__cat_indices` | dockit · Elasticsearch | 🟢 Safe | Read Only | No |
| `data_studio__es__get_mapping` | dockit · Elasticsearch | 🟢 Safe | Read Only | No |
| `data_studio__es__cat_aliases` | dockit · Elasticsearch | 🟢 Safe | Read Only | No |
| `data_studio__es__get_alias` | dockit · Elasticsearch | 🟢 Safe | Read Only | No |
| `data_studio__es__index_document` | dockit · Elasticsearch | 🟡 Elevated | Data Read-Write | No |
| `data_studio__es__update_document` | dockit · Elasticsearch | 🟡 Elevated | Data Read-Write | No |
| `data_studio__es__create_index` | dockit · Elasticsearch | 🟡 Elevated | Data Read-Write | No |
| `data_studio__es__put_mapping` | dockit · Elasticsearch | 🟡 Elevated | Data Read-Write | No |
| `data_studio__es__put_alias` | dockit · Elasticsearch | 🟡 Elevated | Data Read-Write | No |
| `data_studio__es__update_aliases` | dockit · Elasticsearch | 🟡 Elevated | Data Read-Write | No |
| `data_studio__es__delete_document` | dockit · Elasticsearch | 🔴 Destructive | Full Access | Yes |
| `data_studio__es__delete_by_query` | dockit · Elasticsearch | 🔴 Destructive | Full Access | Yes |
| `data_studio__es__delete_index` | dockit · Elasticsearch | 🔴 Destructive | Full Access | Yes |
| `data_studio__es__delete_alias` | dockit · Elasticsearch | 🔴 Destructive | Full Access | Yes |
| `data_studio__mongo__list_databases` | dockit · MongoDB | 🟢 Safe | Read Only | No |
| `data_studio__mongo__list_collections` | dockit · MongoDB | 🟢 Safe | Read Only | No |
| `data_studio__mongo__find` | dockit · MongoDB | 🟢 Safe | Read Only | No |
| `data_studio__mongo__collection_stats` | dockit · MongoDB | 🟢 Safe | Read Only | No |
| `data_studio__mongo__database_stats` | dockit · MongoDB | 🟢 Safe | Read Only | No |
| `data_studio__mongo__server_status` | dockit · MongoDB | 🟢 Safe | Read Only | No |
| `data_studio__mongo__repl_set_status` | dockit · MongoDB | 🟢 Safe | Read Only | No |
| `data_studio__mongo__shard_status` | dockit · MongoDB | 🟢 Safe | Read Only | No |
| `data_studio__mongo__count_documents` | dockit · MongoDB | 🟢 Safe | Read Only | No |
| `data_studio__mongo__list_indexes` | dockit · MongoDB | 🟢 Safe | Read Only | No |
| `data_studio__mongo__sample_documents` | dockit · MongoDB | 🟢 Safe | Read Only | No |
| `data_studio__mongo__aggregate` | dockit · MongoDB | 🟡 Elevated | Data Read-Write | No |
| `data_studio__mongo__insert_one` | dockit · MongoDB | 🟡 Elevated | Data Read-Write | No |
| `data_studio__mongo__update_many` | dockit · MongoDB | 🟡 Elevated | Data Read-Write | No |
| `data_studio__mongo__update_document` | dockit · MongoDB | 🟡 Elevated | Data Read-Write | No |
| `data_studio__mongo__create_database` | dockit · MongoDB | 🟡 Elevated | Data Read-Write | No |
| `data_studio__mongo__create_collection` | dockit · MongoDB | 🟡 Elevated | Data Read-Write | No |
| `data_studio__mongo__rename_collection` | dockit · MongoDB | 🟡 Elevated | Data Read-Write | No |
| `data_studio__mongo__clone_collection` | dockit · MongoDB | 🟡 Elevated | Data Read-Write | No |
| `data_studio__mongo__create_index` | dockit · MongoDB | 🟡 Elevated | Data Read-Write | No |
| `data_studio__mongo__drop_index` | dockit · MongoDB | 🟡 Elevated | Data Read-Write | No |
| `data_studio__mongo__delete_many` | dockit · MongoDB | 🔴 Destructive | Full Access | Yes |
| `data_studio__mongo__delete_document` | dockit · MongoDB | 🔴 Destructive | Full Access | Yes |
| `data_studio__mongo__drop_collection` | dockit · MongoDB | 🔴 Destructive | Full Access | Yes |
| `data_studio__mongo__drop_database` | dockit · MongoDB | 🔴 Destructive | Full Access | Yes |
| `data_studio__mongo__truncate_collection` | dockit · MongoDB | 🔴 Destructive | Full Access | Yes |
| `data_studio__dynamo__execute_query` | dockit · DynamoDB | 🟢 Safe | Read Only | No |
| `data_studio__dynamo__describe_table` | dockit · DynamoDB | 🟢 Safe | Read Only | No |
| `data_studio__dynamo__list_tables` | dockit · DynamoDB | 🟢 Safe | Read Only | No |
| `data_studio__dynamo__query_table` | dockit · DynamoDB | 🟢 Safe | Read Only | No |
| `data_studio__dynamo__scan_table` | dockit · DynamoDB | 🟢 Safe | Read Only | No |
| `data_studio__dynamo__describe_continuous_backups` | dockit · DynamoDB | 🟢 Safe | Read Only | No |
| `data_studio__dynamo__describe_ttl` | dockit · DynamoDB | 🟢 Safe | Read Only | No |
| `data_studio__dynamo__get_table_metrics` | dockit · DynamoDB | 🟢 Safe | Read Only | No |
| `data_studio__dynamo__execute_write` | dockit · DynamoDB | 🟡 Elevated | Data Read-Write | No |
| `data_studio__dynamo__create_item` | dockit · DynamoDB | 🟡 Elevated | Data Read-Write | No |
| `data_studio__dynamo__batch_write_items` | dockit · DynamoDB | 🟡 Elevated | Data Read-Write | No |
| `data_studio__dynamo__update_item` | dockit · DynamoDB | 🟡 Elevated | Data Read-Write | No |
| `data_studio__dynamo__create_gsi` | dockit · DynamoDB | 🟡 Elevated | Data Read-Write | No |
| `data_studio__dynamo__update_gsi` | dockit · DynamoDB | 🟡 Elevated | Data Read-Write | No |
| `data_studio__dynamo__create_table` | dockit · DynamoDB | 🟡 Elevated | Data Read-Write | No |
| `data_studio__dynamo__update_table_config` | dockit · DynamoDB | 🟡 Elevated | Data Read-Write | No |
| `data_studio__dynamo__update_ttl` | dockit · DynamoDB | 🟡 Elevated | Data Read-Write | No |
| `data_studio__dynamo__update_pitr` | dockit · DynamoDB | 🟡 Elevated | Data Read-Write | No |
| `data_studio__dynamo__update_streams` | dockit · DynamoDB | 🟡 Elevated | Data Read-Write | No |
| `data_studio__dynamo__execute_delete` | dockit · DynamoDB | 🔴 Destructive | Full Access | Yes |
| `data_studio__dynamo__delete_item` | dockit · DynamoDB | 🔴 Destructive | Full Access | Yes |
| `data_studio__dynamo__delete_gsi` | dockit · DynamoDB | 🔴 Destructive | Full Access | Yes |
| `data_studio__dynamo__delete_table` | dockit · DynamoDB | 🔴 Destructive | Full Access | Yes |
| `data_studio__dynamo__truncate_table` | dockit · DynamoDB | 🔴 Destructive | Full Access | Yes |

**共 79 个工具。** 只读操作在 **只读** 模式下自动运行。提权操作（写入、索引/结构变更）需要 **数据读写** 权限。破坏性操作（DELETE、DROP、TRUNCATE）需要 **完全访问** 权限，且始终触发显式**用户确认**提示。

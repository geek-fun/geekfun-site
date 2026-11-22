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

MCP 客户端会从正在运行的桌面应用读取可用工具。下表列出了常见工具和它们对应的后端。每次请求需要哪些权限取决于要执行的操作，是否弹出确认由客户端的设置决定。参阅[安全与权限](/zh/docs/data-studio-agent/safety)。

| 工具 | 后端 |
|---|---|
| `data_studio__list_connections` | Server |
| `data_studio__get_status` | Server |
| `data_studio__sqlkit__list_connections` | sqlkit |
| `data_studio__sqlkit__execute_query` | sqlkit |
| `data_studio__sqlkit__list_databases` | sqlkit |
| `data_studio__sqlkit__list_schemas` | sqlkit |
| `data_studio__sqlkit__list_tables` | sqlkit |
| `data_studio__sqlkit__get_schema` | sqlkit |
| `data_studio__sqlkit__describe_table` | sqlkit |
| `data_studio__sqlkit__explain_query` | sqlkit |
| `data_studio__sqlkit__execute_write` | sqlkit |
| `data_studio__sqlkit__execute_delete` | sqlkit |
| `data_studio__sqlkit__execute_ddl` | sqlkit |
| `data_studio__es__search` | dockit · Elasticsearch |
| `data_studio__es__get_document` | dockit · Elasticsearch |
| `data_studio__es__cat_indices` | dockit · Elasticsearch |
| `data_studio__es__get_mapping` | dockit · Elasticsearch |
| `data_studio__es__cat_aliases` | dockit · Elasticsearch |
| `data_studio__es__get_alias` | dockit · Elasticsearch |
| `data_studio__es__index_document` | dockit · Elasticsearch |
| `data_studio__es__update_document` | dockit · Elasticsearch |
| `data_studio__es__create_index` | dockit · Elasticsearch |
| `data_studio__es__put_mapping` | dockit · Elasticsearch |
| `data_studio__es__put_alias` | dockit · Elasticsearch |
| `data_studio__es__update_aliases` | dockit · Elasticsearch |
| `data_studio__es__delete_document` | dockit · Elasticsearch |
| `data_studio__es__delete_by_query` | dockit · Elasticsearch |
| `data_studio__es__delete_index` | dockit · Elasticsearch |
| `data_studio__es__delete_alias` | dockit · Elasticsearch |
| `data_studio__mongo__list_databases` | dockit · MongoDB |
| `data_studio__mongo__list_collections` | dockit · MongoDB |
| `data_studio__mongo__find` | dockit · MongoDB |
| `data_studio__mongo__collection_stats` | dockit · MongoDB |
| `data_studio__mongo__database_stats` | dockit · MongoDB |
| `data_studio__mongo__server_status` | dockit · MongoDB |
| `data_studio__mongo__repl_set_status` | dockit · MongoDB |
| `data_studio__mongo__shard_status` | dockit · MongoDB |
| `data_studio__mongo__count_documents` | dockit · MongoDB |
| `data_studio__mongo__list_indexes` | dockit · MongoDB |
| `data_studio__mongo__sample_documents` | dockit · MongoDB |
| `data_studio__mongo__aggregate` | dockit · MongoDB |
| `data_studio__mongo__insert_one` | dockit · MongoDB |
| `data_studio__mongo__update_many` | dockit · MongoDB |
| `data_studio__mongo__update_document` | dockit · MongoDB |
| `data_studio__mongo__create_database` | dockit · MongoDB |
| `data_studio__mongo__create_collection` | dockit · MongoDB |
| `data_studio__mongo__rename_collection` | dockit · MongoDB |
| `data_studio__mongo__clone_collection` | dockit · MongoDB |
| `data_studio__mongo__create_index` | dockit · MongoDB |
| `data_studio__mongo__drop_index` | dockit · MongoDB |
| `data_studio__mongo__delete_many` | dockit · MongoDB |
| `data_studio__mongo__delete_document` | dockit · MongoDB |
| `data_studio__mongo__drop_collection` | dockit · MongoDB |
| `data_studio__mongo__drop_database` | dockit · MongoDB |
| `data_studio__mongo__truncate_collection` | dockit · MongoDB |
| `data_studio__dynamo__execute_query` | dockit · DynamoDB |
| `data_studio__dynamo__describe_table` | dockit · DynamoDB |
| `data_studio__dynamo__list_tables` | dockit · DynamoDB |
| `data_studio__dynamo__query_table` | dockit · DynamoDB |
| `data_studio__dynamo__scan_table` | dockit · DynamoDB |
| `data_studio__dynamo__describe_continuous_backups` | dockit · DynamoDB |
| `data_studio__dynamo__describe_ttl` | dockit · DynamoDB |
| `data_studio__dynamo__get_table_metrics` | dockit · DynamoDB |
| `data_studio__dynamo__execute_write` | dockit · DynamoDB |
| `data_studio__dynamo__create_item` | dockit · DynamoDB |
| `data_studio__dynamo__batch_write_items` | dockit · DynamoDB |
| `data_studio__dynamo__update_item` | dockit · DynamoDB |
| `data_studio__dynamo__create_gsi` | dockit · DynamoDB |
| `data_studio__dynamo__update_gsi` | dockit · DynamoDB |
| `data_studio__dynamo__create_table` | dockit · DynamoDB |
| `data_studio__dynamo__update_table_config` | dockit · DynamoDB |
| `data_studio__dynamo__update_ttl` | dockit · DynamoDB |
| `data_studio__dynamo__update_pitr` | dockit · DynamoDB |
| `data_studio__dynamo__update_streams` | dockit · DynamoDB |
| `data_studio__dynamo__execute_delete` | dockit · DynamoDB |
| `data_studio__dynamo__delete_item` | dockit · DynamoDB |
| `data_studio__dynamo__delete_gsi` | dockit · DynamoDB |
| `data_studio__dynamo__delete_table` | dockit · DynamoDB |
| `data_studio__dynamo__truncate_table` | dockit · DynamoDB |

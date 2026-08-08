---
title: Data Studio Agent 工具 — 工具命名规范
description: 介绍 Data Studio Agent 的工具命名约定，统一的前缀 data_studio__{backend}__{action}，便于在 MCP 中查找和使用。
head:
  - - meta
    - name: keywords
      content: Data Studio Agent, 工具命名, data_studio, MCP, SqlKit, DocKit, 工具约定
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

# 工具命名

所有工具遵循 `data_studio__{backend}__{action}` 命名规范：

| 前缀 | 后端 | 示例 |
|------|------|------|
| `data_studio__sql_*` | SqlKit | `data_studio__sql_execute`, `data_studio__sql_list_tables` |
| `data_studio__es_*` | DocKit | `data_studio__es_search`, `data_studio__es_list_indices` |
| `data_studio__mongo_*` | DocKit | `data_studio__mongo_find`, `data_studio__mongo_insert` |
| `data_studio__dynamo_*` | DocKit | `data_studio__dynamo_query`, `data_studio__dynamo_list_tables` |

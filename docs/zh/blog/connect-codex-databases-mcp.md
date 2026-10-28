---
title: "通过 Data Studio Agent 将 Codex 连接到数据库"
description: "用 MCP、SqlKit 和 DocKit 为 Codex 配置数据库访问，查看 SQL 与 NoSQL 数据结构、执行查询，并由桌面客户端管理连接凭据和操作权限。"
date: 2026-10-22
head:
  - - link
    - rel: canonical
      href: https://www.geekfun.club/zh/blog/connect-codex-databases-mcp
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/blog/connect-codex-databases-mcp
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/blog/connect-codex-databases-mcp
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/blog/connect-codex-databases-mcp
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "通过 Data Studio Agent 将 Codex 连接到数据库",
        "description": "用 MCP、SqlKit 和 DocKit 为 Codex 配置数据库访问，查看 SQL 与 NoSQL 数据结构、执行查询，并由桌面客户端管理连接凭据和操作权限。",
        "image": "https://www.geekfun.club/blog/codex-data-studio/codex-data-studio-architecture-branded-zh.png",
        "inLanguage": "zh-CN",
        "author": {
          "@type": "Organization",
          "name": "GEEKFUN",
          "url": "https://www.geekfun.club"
        },
        "publisher": {
          "@type": "Organization",
          "name": "GEEKFUN",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.geekfun.club/geekfun.png"
          }
        },
        "datePublished": "2026-10-22",
        "dateModified": "2026-10-22",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.geekfun.club/zh/blog/connect-codex-databases-mcp"
        },
        "articleSection": "Database Development"
      }
---

# 通过 Data Studio Agent 将 Codex 连接到数据库

你正在用 Codex 修复一个 API 接口，改查询之前，得先确认 orders 表的结构。通常，你需要打开数据库客户端，查完再把结果复制回 Codex。

我们开发了 Data Studio Agent，让 Codex 能通过 SqlKit 和 DocKit 查看表结构、执行查询，你可以继续处理代码。Codex 和它使用的模型通过连接 ID 访问数据库，连接凭据留在桌面客户端，能执行哪些操作也由客户端控制。

![Codex 通过 Data Studio 查询数据库，并在对话中展示结果。](/blog/codex-data-studio/codex-screen-shot.png)

把下面的命令粘贴到 Codex 对话中，添加 Data Studio MCP 服务：

```bash
codex mcp add data-studio -- npx -y @geek-fun/data-studio-mcp
```

## 连接如何工作

[Data Studio Agent](/products/data-studio-agent/) 通过两个桌面客户端，为 Codex 提供数据库工具：

| 桌面客户端 | 适用数据库 |
| --- | --- |
| [SqlKit](/products/sqlkit/) | PostgreSQL、MySQL、SQL Server、SQLite 等 SQL 数据库 |
| [DocKit](/products/dockit/) | MongoDB、Elasticsearch、OpenSearch、DynamoDB 等 NoSQL 数据库 |

按数据库类型安装对应客户端。如果项目同时使用 SQL 和 NoSQL，可以两个都运行。在客户端中添加数据库连接，并启用 MCP Bridge，Data Studio 才能把查询发到这些连接。

只需在 Codex 中配置一个 MCP 服务，它就会发现正在运行的客户端，并提供相应的数据库工具。你也可以照常在客户端中浏览数据、手动执行查询。

![Codex 通过本机的 Data Studio MCP 服务连接 SqlKit 和 DocKit，访问 SQL 与 NoSQL 数据库，查询结果返回 Codex。](/blog/codex-data-studio/codex-data-studio-architecture-branded-zh.png)

## 配置第一个连接

电脑上需要安装 Codex CLI 和 Node.js，并确保 npm/npx 可用。Codex 要在桌面客户端所在的电脑上本地运行。

### 1. 准备 SqlKit 或 DocKit

SQL 数据库使用 [SqlKit](/products/sqlkit/)，NoSQL 数据库使用 [DocKit](/products/dockit/)。安装后：

1. 启动客户端，登录有 MCP 访问权限的账号。
2. 添加数据库连接，先在客户端中执行一次查询，确认连接正常。
3. 打开 **Settings → MCP Bridge**，启用桥接服务。如果希望服务随客户端启动，再打开 Auto-start。
4. 首次使用时选择 Read Only，并允许访问你准备查看的连接。

Codex 使用数据库工具时，保持桌面客户端运行。建议先拿开发数据库和示例数据试一试。

### 2. 在 Codex 中添加 Data Studio

在终端执行：

```bash
codex mcp add data-studio -- npx -y @geek-fun/data-studio-mcp
```

Codex 会保存配置，在连接服务时启动 MCP 进程，不需要单独开一个终端来运行它。

如果只想提供被标记为安全的工具，改用这条命令：

```bash
codex mcp add data-studio -- npx -y @geek-fun/data-studio-mcp --readonly
```

`--readonly` 会在 MCP 服务这一侧限制可用工具，桌面客户端原有的权限限制仍然生效。

检查是否已添加：

```bash
codex mcp list
```

添加后，重新打开一个 Codex 会话。在 Codex 终端界面中，`/mcp` 可以查看当前启用的 MCP 服务。命令的详细用法见 OpenAI 的 [MCP 配置文档](https://learn.chatgpt.com/docs/extend/mcp?surface=cli)。

### 3. 检查数据库连接

在 Codex 中输入：

> 用 Data Studio 检查后端状态，列出我可以访问的数据库连接。不要执行任何写操作。

Codex 可以调用 `data_studio__get_status` 检查后端，用 `data_studio__list_connections` 列出连接。开始查询前，先确认返回的连接名称是你要用的那个。

## 用它排查一个 API 问题

假设订单接口返回空列表，但你认为库里应该有已付款订单。可以用下面这组提示词排查，把连接和表名换成自己的。这里展示的是排查思路，实际结果取决于你的数据和代码。

![排查流程：描述问题、查看表结构、查询相关数据、对照代码，最后提出修复方案和回归测试。](/blog/codex-data-studio/codex-data-studio-workflow-branded-zh.png)

先看表结构：

> 用 Data Studio 连接我的 PostgreSQL 开发数据库，查看 `orders` 表，说明有哪些字段、分别是什么类型。如果有多个匹配的连接，先问我用哪一个。所有数据库操作保持只读。

再检查状态过滤条件：

> 查询 `orders.status` 的不同取值和各自的记录数，再与当前仓库中订单接口的状态过滤条件对照。展示使用的 SQL，说明有没有不一致的地方。

Codex 可以把查询结果和仓库代码一起分析。如果发现不一致，继续问：

> 根据这些结果提出代码修复方案，并添加回归测试。不要修改数据库记录。

表结构和查询结果会直接返回 Codex，你可以继续处理接口代码。需要自己确认时，也可以把查询拿到桌面客户端中执行。

排查 Elasticsearch 时，保持 DocKit 运行，然后问：

> 查看开发环境订单索引的 mapping，检查 `customer_id` 的映射类型，与当前仓库中的查询对照。先说明是否有不兼容的地方，再提出修改建议。

也可以查看 MongoDB 集合：

> 用我的 MongoDB 开发连接查看 orders 集合，最多返回五条文档，只包含 `_id`、`status` 和 `created_at`，方便检查字段类型。

具体能执行哪些操作，取决于正在运行的后端和权限设置。只请求当前任务需要的字段和记录即可。

## 凭据留在哪里，哪些数据会返回 Codex

MCP 进程和桌面桥接服务在你的电脑上运行。SqlKit 或 DocKit 管理数据库连接，工具通过连接 ID 访问它，因此不用把数据库密码粘贴到 Codex 对话里。

查询返回的记录和表结构会进入 Codex。如果使用云端模型，这些信息可能进入模型上下文。选择连接和字段时需要考虑这一点：桥接服务在本机运行，AI 会话仍可能使用远程模型。

第一次使用时，保持 Read Only 模式，并使用只有读取权限的数据库账号。后续需要更多权限，再到客户端中调整。提示词描述你希望 Codex 做什么，客户端权限决定后端允许执行什么。

## 数据库工具没有出现怎么办

`codex mcp list` 只能确认 MCP 服务已经配置。桌面后端是否可用，还要通过 Data Studio 状态请求检查；注册成功不代表客户端已经运行。

| 遇到的情况 | 检查方法 |
| --- | --- |
| 找不到 `npx` | 确认启动 Codex 的环境可以访问 Node.js/npm。 |
| Data Studio 有响应，但没有可用后端 | 启动 SqlKit 或 DocKit，并启用 MCP Bridge。 |
| 找不到需要的连接 | 在客户端中确认连接正常，再检查它的 MCP 访问设置。 |
| 操作被拒绝 | 检查账号的 MCP 访问权限，以及客户端的权限模式。 |
| 远程会话无法连接客户端 | 在桌面桥接服务所在的电脑上本地运行 Codex。 |

修正配置后，让 Codex 再调用一次 `data_studio__get_status`。工具仍未出现的话，重新打开一个本地会话。

## 在自己的项目中试一试

连接开发数据库，给 Codex 一个手头的问题。例如，核对接口的状态过滤条件与库里的实际取值，或者对照字段映射与查询代码。

先准备 [SqlKit](/products/sqlkit/) 或 [DocKit](/products/dockit/)，再按 [Data Studio Agent](/products/data-studio-agent/) 的说明配置。MCP 包在 [npm](https://www.npmjs.com/package/@geek-fun/data-studio-mcp)，源码和问题反馈在 [GitHub](https://github.com/geek-fun/data-studio-agent)。

如果缺少你需要的数据库或操作，可以提交 issue，附上数据库类型、尝试执行的任务和脱敏后的示例。

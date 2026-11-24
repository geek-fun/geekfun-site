---
title: SqlKit v1.0.4 新增 MCP 配置指南和 AI 提供商选项
description: 在系统托盘和设置中管理 MCP Bridge。AI 设置新增 cheapaimodel 预设，UberLLM 预设更名为 MartLLM。
date: 2026-11-24
---

# SqlKit v1.0.4 发布

如果你在用 UberLLM，现在可以在 AI 设置里找到更名后的 MartLLM。预设换了 API 地址，已有的 UberLLM 配置仍可使用。AI 设置也加入了 cheapaimodel 预设。

系统托盘菜单会显示 MCP 桥接是否正在运行，以及它使用的端口。要把桥接地址填到客户端，可以直接从菜单复制。桥接因订阅问题停止时，菜单里的「解锁 MCP 桥接」会打开升级窗口。

在设置的「MCP」页，你可以重启桥接、更改端口、设置自动启动，也能查看桥接因订阅问题停止的原因。当前的服务器会话和 Claude Code、Codex、Cursor 等 AI 客户端的配置说明也在这个页面。

SqlKit 会在头像链接过期前刷新链接。如果刷新失败，SqlKit 会显示默认头像，你可以继续使用当前会话。

设置页现在左侧是标签，右侧是控件。AI 提供商的图标改用了单色。

[下载适用于 macOS、Windows 或 Linux 的 SqlKit](/zh/download#sqlkit)，或在 [GitHub 查看完整更新说明](https://github.com/geek-fun/sqlkit/releases/tag/v1.0.4)。

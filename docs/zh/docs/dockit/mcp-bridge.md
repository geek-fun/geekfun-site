---
title: 设置 DocKit 本地 MCP 桥接
description: 启动并排查 DocKit MCP 桥接，通过 Data Studio Agent 连接编程助手，并使用 AI 权限控制数据库访问。
---

# 设置本地 MCP 桥接

DocKit 可以通过 [Data Studio Agent MCP 包](/zh/docs/data-studio-agent/)将已保存的 MongoDB、DynamoDB 和搜索数据库连接提供给编程助手。登录有旗舰版权限的账号即可使用桥接。桥接服务监听本机的 `127.0.0.1`。

## 连接客户端

1. 在 DocKit 中保存并测试数据库连接。打开**设置 → MCP 桥接**，确认状态显示为正在运行及实际端口。如果没有运行，可重启桥接。开启自动启动后，桥接会随 DocKit 一起启动。
2. 如果只需要查看结构和执行只读查询，请在**默认 AI 权限**中选择**读取**，同时核对已保存连接的[单独权限](/zh/docs/dockit/ai-permissions)。
3. 按照 [Data Studio Agent 快速开始](/zh/docs/data-studio-agent/quick-start)在编程助手中注册 MCP 包。可以先让助手列出有权访问的连接，并查看一个开发数据库的结构。

## 客户端找不到连接怎么办？

- 确认 DocKit 正在运行，且当前会话具有旗舰版权限。关闭主窗口后，DocKit 和桥接仍会在托盘后台运行。选择**退出**会停止它们。
- 在 **MCP 桥接**中检查实际监听端口。端口留空时由 DocKit 自动选择。更改端口后请重启桥接。
- 桥接已运行但找不到某个连接时，请检查该连接的[实际 AI 权限](/zh/docs/dockit/ai-permissions)。客户端的连接列表只会显示至少允许一项 AI 操作的连接。如果某个工具调用被拒绝，请检查对应的操作权限和数据库账号权限。

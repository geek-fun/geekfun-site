---
title: Microsoft SQL Server GUI 客户端 | macOS、Windows 与 Linux | SqlKit
description: 使用 SqlKit 原生 Rust TDS 7.3 驱动（tiberius）直连 Microsoft SQL Server 与 Azure SQL，支持 TLS 加密、Trust Server Certificate、dbo 模式浏览与 T-SQL 执行计划。
outline: [2, 3]
---

# Microsoft SQL Server

<DocsBadge variant="native">原生 Rust 驱动（TDS 7.3）</DocsBadge> <DocsBadge variant="community">社区版</DocsBadge>

SqlKit 使用原生 Rust `tiberius` 驱动（TDS 7.3 + `rustls`）通过 TCP 直连 **Microsoft SQL Server** 与 **Azure SQL Database**，在 macOS、Windows 与 Linux 上均无需额外安装 ODBC 驱动或 Java 运行时。

## 连接 SQL Server

<DocsSteps>

### 打开新建连接并选择 SQL Server

在**连接管理**点击**添加新连接**（<kbd>⌘</kbd>+<kbd>N</kbd> / <kbd>Ctrl</kbd>+<kbd>N</kbd>），选择 **SQL Server**。

### 填写实例地址与登录凭据

| 字段 | 常见取值 | 说明 |
| --- | --- | --- |
| **主机** | 服务器主机名或 IP | 仅填写主机名，不带 `\INSTANCENAME` |
| **端口** | `1433` | 默认实例通常为 `1433`；命名实例请填写该实例实际监听的静态 TCP 端口 |
| **数据库** | 目标数据库名 | 可选默认数据库（如 `master` 或业务库） |
| **用户名 / 密码** | SQL Server 登录名 | 使用 SQL Server 身份验证 |

### 配置加密与 Trust Server Certificate

在**高级 → SSL/TLS** 中按实例策略配置：
- 仅当管理员明确要求连接使用自签名证书的内网/测试实例时，开启 **Trust Server Certificate**。
- 连接 **Azure SQL Database** 或配备受信任证书的生产实例时，请关闭 **Trust Server Certificate** 并保持严格证书校验。

### 测试、保存并验证 T-SQL 会话

测试通过后进入**查询**，运行 T-SQL 验证当前库与登录账号：

```sql
SELECT
  DB_NAME() AS active_database,
  SCHEMA_NAME() AS default_schema,
  SUSER_SNAME() AS login_name,
  @@VERSION AS server_version;
```

</DocsSteps>

## SQL Server 专属体验

- **模式浏览（`dbo` 与自定义模式）**：展开数据库 → 模式（`dbo`、`sales` 等）→ 表、视图、存储过程与函数，以及表级**索引**、**外键**与**触发器**。
- **T-SQL 补全与格式化**：内置 `mssql` 元数据补全与 `tsql` 方言格式化（<kbd>Shift</kbd>+<kbd>Option</kbd>+<kbd>F</kbd> / <kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>F</kbd>）。
- **可视化 T-SQL 执行计划**：按 <kbd>F6</kbd> 执行 `SET SHOWPLAN_TEXT ON`（**EXPLAIN**）或 `SET STATISTICS PROFILE ON`（**EXPLAIN ANALYZE**），以树状图、汇总表和原始输出检视计划。
- **行编辑、ER 图与 AI** <DocsBadge variant="ultimate">旗舰版</DocsBadge>：基于主键编辑行、绘制外键 ER 图、导入导出 Excel `.xlsx` / CSV，或接入 Agentic Data Studio 与 MCP。

## 常见连接问题排查

| 现象 | 检查项 |
| --- | --- |
| **连接超时** | 在服务器端打开 **SQL Server 配置管理器**，确认已启用 **TCP/IP** 协议、实例监听在预期的静态端口，并检查防火墙放行策略。 |
| **命名实例端口不明** | SqlKit 通过直连 TCP 端口通信而不依赖 UDP 1434 SQL Browser。请向 DBA 确认该命名实例在 `IPAll → TCP Port` 中配置的静态端口。 |
| **登录失败（Login failed）** | 确认实例已开启**SQL Server 和 Windows 身份验证模式（混合模式）**，且该登录名有权访问目标数据库。 |
| **TLS 证书校验报错** | 核对证书域名与 CA 链；如为内网自签证书，可在**高级**选项卡勾选 **Trust Server Certificate**。 |

## 下一步

<DocsCardGrid :cols="2">
  <DocsCard title="SSH 隧道" description="通过 SSH 堡垒机访问内网或私有子网中的 SQL Server。" href="/zh/docs/sqlkit/ssh-tunnel" badge="旗舰版" badge-variant="ultimate" icon="lock" />
  <DocsCard title="SQL 编辑器与执行计划" description="格式化 T-SQL、局部执行并分析 SHOWPLAN 计划树。" href="/zh/docs/sqlkit/query-editor" icon="code" />
</DocsCardGrid>

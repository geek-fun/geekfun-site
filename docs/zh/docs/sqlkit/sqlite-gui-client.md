---
title: SQLite、SQLCipher 与 DuckDB 桌面客户端 | 本地与内存库 | SqlKit
description: 在 macOS、Windows 与 Linux 上使用 SqlKit 打开本地 SQLite 文件、SQLCipher 加密数据库以及 DuckDB 分析数据库（支持读写/只读模式与锁冲突检测）。
outline: [2, 3]
---

# SQLite、SQLCipher 与 DuckDB

直接从本地磁盘或内存打开嵌入式数据库，用于应用本地调试、轻量分析或离线 SQL 验证。

| 引擎 | 驱动层 | 存储模式 | 专属选项 |
| --- | --- | --- | --- |
| SQLite | <DocsBadge variant="native">原生 Rust（`rusqlite`）</DocsBadge> | 已有文件、新建文件或 `:memory:` | 无需配置，不显示 SSL 区块 |
| SQLCipher | <DocsBadge variant="native">原生 Rust（`sqlcipher`）</DocsBadge> | 本地加密文件 | **加密密钥**输入框（通过 `PRAGMA key` 解密） |
| DuckDB | <DocsBadge variant="jdbc">JDBC（`duckdb_jdbc`）</DocsBadge> | 本地文件或命名内存库（`memory:<label>`） | **读写 / 只读**访问模式与同文件锁冲突检测 |

## 打开 SQLite 数据库 {#sqlite}

<DocsSteps>

### 创建 SQLite 连接

打开**连接管理 → 添加新连接**（<kbd>⌘</kbd>+<kbd>N</kbd> / <kbd>Ctrl</kbd>+<kbd>N</kbd>），选择 **SQLite**。

### 选择本地文件或内存模式

点击**打开...**选择磁盘上的 `.db`、`.sqlite` 或 `.sqlite3` 文件，点击**新建...**指定新文件路径，或选择 **`:memory:`** 启动临时内存会话。

### 保存连接并查看对象

保存并双击进入**查询**，查看库中的表与视图：

```sql
SELECT type, name
FROM sqlite_schema
WHERE type IN ('table', 'view')
ORDER BY type, name;
```

</DocsSteps>

## 打开 SQLCipher 加密数据库 {#sqlcipher}

1. 数据库类型选择 **SQLCipher**（不要选普通 SQLite）。
2. 选择磁盘上的加密数据库文件。
3. 在**加密密钥**中输入解密口令（打开连接时通过 `PRAGMA key` 应用）。
4. 点击**测试连接**确认能够正常解密后再保存。

::: warning 密钥不匹配或文件未加密
若报错 "file is not a database"，请核对密钥大小写是否完全一致，并确认该文件确实采用兼容的 SQLCipher 格式加密。
:::

## 打开 DuckDB 分析数据库 {#duckdb}

DuckDB 通过 SqlKit 托管 JDBC 桥接（`duckdb_jdbc`，首次测试时自动下载）连接，支持本地 `.duckdb` 文件与命名内存数据库（`memory:<label>`）。

### 读写模式 vs 只读模式

DuckDB 在引擎层实行严格的单写者文件锁。选择**读写（Read-Write）**可建表和写入（独占写锁）；选择**只读（Read-Only，`access_mode=READ_ONLY`）**可与其他只读进程并发读取同一个 `.duckdb` 文件。

::: info DuckDB 文件访问模式冲突检测
配置 DuckDB 文件路径时，SqlKit 会检查其他已保存连接；若发现另一个连接以相反模式（读写 vs 只读）指向同一文件，表单会主动提示冲突。请统一为只读或先断开冲突连接。
:::

### 在 DuckDB 中直查本地 Parquet 与 CSV

连上本地或内存 DuckDB 后，可直接在 SQL 编辑器中读取本地 Parquet、CSV 或 JSON 文件：

```sql
SELECT *
FROM read_parquet('/path/to/events.parquet')
LIMIT 100;
```

## 本地数据库常见问题排查

| 现象 | 检查项 |
| --- | --- |
| 数据库已打开但看不到任何表 | 核对连接中的文件路径；指向尚未存在的新路径时会创建空文件，此时尚无用户表。 |
| SQLite 提示 `database is locked` | 另有进程持有该文件的写事务，等待事务或 WAL Checkpoint 完成后再试。 |
| DuckDB 文件锁 / 访问模式冲突 | 关闭占用写锁的外部进程（Python 脚本或 DuckDB CLI），或在只需查看数据时将 SqlKit 连接切为**只读**模式。 |
| DuckDB JDBC 驱动下载失败 | 打开**设置 → JRE 与 JDBC 驱动**检查 JRE 25、`jdbc-bridge` 与 `duckdb_jdbc` 状态并重试。 |

## 下一步

<DocsCardGrid :cols="2">
  <DocsCard title="数据表格与行编辑" description="在 SQLite 与 DuckDB 中搜索、过滤、查看 JSON 并编辑行。" href="/zh/docs/sqlkit/table-browser" icon="table" />
  <DocsCard title="批量导入与导出" description="将 CSV/Excel 导入 SQLite，或将 DuckDB 表导出为 CSV/JSONL/Excel。" href="/zh/docs/sqlkit/import-export" badge="旗舰版" badge-variant="ultimate" icon="upload" />
</DocsCardGrid>

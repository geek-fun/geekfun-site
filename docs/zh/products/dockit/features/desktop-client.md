---
title: 桌面数据库 GUI 客户端 - 适用于 Mac、Windows、Linux 的原生应用
description: DocKit 是用于 DynamoDB、Elasticsearch 和 OpenSearch 的原生桌面数据库客户端。比浏览器工具更快，支持离线工作，采用现代原生技术构建。
sidebar: false
---

# 桌面数据库 GUI 客户端

DocKit 是用于管理 DynamoDB、Elasticsearch 和 OpenSearch 的**原生桌面应用程序**。与基于浏览器的工具不同，它直接在您的操作系统上运行，提供更好的性能、离线功能和更流畅的用户体验。

## 为什么选择桌面数据库客户端？

### ⚡ 性能优势

原生桌面应用程序在多个方面优于基于浏览器的工具：

| 指标 | 浏览器工具 | 桌面客户端 (DocKit) |
|--------|--------------|-------------------------|
| **启动时间** | 10-30秒 | < 2秒 |
| **内存使用** | 500+ MB | 100-200 MB |
| **查询执行** | 网络 + 浏览器开销 | 直接 API 调用 |
| **大型结果集** | 浏览器标签限制 (~10K 行) | 处理 100K+ 行 |
| **UI 响应性** | 取决于浏览器 | 原生 UI 线程 |

**实际影响：**
- 打开连接：**快 5 倍**
- 加载查询结果：**快 3 倍**
- 数据库切换：**即时** vs. 页面重新加载

### 💾 离线功能

桌面应用程序无需持续的互联网连接即可工作：

- **查询构建**：离线编写和测试查询
- **连接配置**：管理本地存储的凭证
- **查询历史**：无需网络即可访问过去的查询
- **设置同步**：所有首选项本地存储

**使用场景：**
- 飞行或没有 wifi 的远程位置
- 受限的网络环境
- 使用本地数据库实例（DynamoDB Local、Docker）

### 🖥️ 原生操作系统集成

DocKit 利用您操作系统的功能：

#### macOS
- **Apple Silicon 优化**：M1/M2/M3 芯片的原生 ARM64 构建
- **钥匙串集成**：安全的凭证存储
- **Touch Bar 支持**：MacBook Pro 上的快速操作
- **系统快捷键**：Spotlight 搜索、拖放

#### Windows
- **Windows 11 优化**：遵循 Windows 设计指南
- **凭据管理器**：加密的密码存储
- **任务栏集成**：固定和快速启动
- **Windows Defender SmartScreen**：签名应用程序

#### Linux
- **多发行版**：适用于 Ubuntu、Fedora、Arch 等
- **Wayland & X11 支持**：与现代显示服务器兼容
- **系统托盘**：后台操作支持
- **原生文件对话框**：使用 GTK/Qt 文件选择器

## 技术：为什么 Tauri/Rust 很重要

DocKit 使用 **Tauri**（而非 Electron）构建，带来：

### 大小对比

| 应用 | 技术 | 下载大小 | 内存使用 |
|-----|-----------|---------------|--------------|
| DocKit | Tauri + Rust | ~15 MB | 100-200 MB |
| 典型 Electron 应用 | Electron + Node.js | ~100-200 MB | 300-600 MB |
| 浏览器工具 | Chrome 标签 | N/A | 400-800 MB |

**为什么这很重要：**
- 更快的下载
- 更少的磁盘空间
- 为您的数据库提供更多 RAM
- 笔记本电脑电池寿命更长

### 安全优势

Rust 的内存安全防止常见漏洞：

- **无缓冲区溢出**：编译时检查
- **无释放后使用**：借用检查器防止内存问题
- **线程安全**：无畏并发
- **CVE 抵抗**：比 C/C++ 更少可利用的错误

## 跨平台一致性

DocKit 在所有平台上提供相同的功能：

### 功能对等

✅ **所有平台均可用：**
- DynamoDB、Elasticsearch、OpenSearch 支持
- 带语法高亮的 PartiQL 编辑器
- 可视化查询构建器
- 连接管理
- 查询持久化
- 导出为 JSON/CSV
- AI 助手集成
- 集群监控

❌ **无平台特定限制**

## 桌面客户端功能

### 多标签界面

同时处理多个查询：

```
标签 1: DynamoDB - 生产订单查询
标签 2: Elasticsearch - 用户搜索索引
标签 3: OpenSearch - 日志聚合
标签 4: DynamoDB Local - 测试新架构
```

### 拖放

原生文件操作：

- **导入 JSON**：拖动文件导入数据
- **导出结果**：拖动结果表到桌面 → 创建 CSV
- **查询文件**：拖动 `.sql`/`.partiql` 文件打开
- **连接配置**：通过文件拖动导出/导入

### 窗口管理

专业的工作空间功能：

- **多窗口**：为不同项目打开单独的窗口
- **全屏模式**：专注模式用于复杂查询
- **始终置顶**：将窗口固定在其他应用程序上方
- **最小化到托盘**：后台操作（Linux/Windows）

## 安装与更新

### 轻松安装

**macOS:**
```bash
# 下载 .dmg
# 拖到应用程序文件夹
# 完成 - 无需 Homebrew 或 npm
```

**Windows:**
```bash
# 下载 .exe 安装程序
# 双击安装
# 自动添加开始菜单条目
```

**Linux:**
```bash
# .AppImage（无需安装）
chmod +x DocKit.AppImage
./DocKit.AppImage

# 或 .deb (Ubuntu/Debian)
sudo dpkg -i dockit.deb
```

## 了解更多

- **[DynamoDB GUI 客户端](/zh/products/dockit/dynamodb-gui)** - DynamoDB 功能
- **[Elasticsearch GUI](/zh/products/dockit/elasticsearch-gui)** - Elasticsearch 功能
- **[OpenSearch GUI](/zh/products/dockit/opensearch-gui)** - OpenSearch 功能
- **[本地优先设计](/zh/products/dockit/features/local-first)** - 隐私和离线功能
- **[开源](/zh/products/dockit/features/open-source)** - 为什么 DocKit 是开源的

---

**关于桌面 vs. Web 工具有疑问？**
查看我们的[常见问题](/zh/products/dockit/docs)或[提出问题](https://github.com/geek-fun/dockit/issues)。

---
title: 极客范新闻 - DocKit 发布 DynamoDB GUI 客户端 Elasticsearch 工具更新
description: "关注极客范最新新闻、DocKit 与 SqlKit 版本发布、产品公告和社区里程碑，及时了解数据库工具更新、新功能上线与开源项目进展。"
head:
  - - meta
    - name: keywords
      content: 极客范新闻, DocKit发布, 开源公告, 软件更新, 极客范更新
  - - link
    - rel: canonical
      href: https://www.geekfun.club/zh/news
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/news
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/news
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/news
---
# 新闻

欢迎来到 **GEEKFUN 新闻！** :rocket::rocket::rocket:

及时了解 GEEKFUN 社区的最新公告、发布和更新。在这里您将找到关于我们项目的新闻、新功能、社区活动和重要里程碑。

## [🚀 DocKit v0.9.10 发布：智能补全、Data Studio Agent 与跨应用认证](https://github.com/geek-fun/dockit/releases/tag/v0.9.10)

**2026年4月28日** — 60+ 次提交，覆盖 Data Studio AI Agent、完整的 UI 迁移和编辑器改进。

🔍 **更智能的 Elasticsearch 补全** — Monaco 编辑器曾在 JSON 内部错误地提示字段类型（`text`、`keyword` 等）。修复要求 tokenizer 区分"键位"（输入字段名）和"值位"（输入字段类型）。改动小，体验提升大。

📌 **Ctrl+D 文档覆盖所有 ES API** — 用规范驱动的 `apiSpecProvider` 替代 28 个硬编码正则。现在每个端点 — 从 `_cat/indices` 到 `_security/role_mapping` — 都能打开精确的文档页面。

🖱️ **macOS Monterey 滚动修复** — WebKit 的固定高度容器 bug 会导致连接列表卡死。解决方案？一行 CSS：`-webkit-transform: translateZ(0)` 强制 GPU 合成。「花 3 小时调一个 CSS 属性」系列。

🤖 **Data Studio AI Agent** — 用 LLM 流式响应、工具调用可视化活动时间线、思考内容展示、以及带并发保护的 Rust 后端 Agent 循环彻底重建。新增 LM Studio 提供商，系统提示中注入 DynamoDB + ES Query DSL 知识。

🔐 **跨应用认证** — 实现 `dockit://` 深度链接协议，无缝对接 Geekfun 登录，包括链接 URL 解析和域名白名单头像验证。

🎨 **完成 Naive UI → shadcn-vue 迁移** — Naive UI 组件全部清完。合并 UnoCSS + Tailwind 配置，21 个组件从 @vicons 切到 @unocss/preset-icons，SCSS 依赖全部移除。

## [🚀 DocKit v0.9.9 发布：DynamoDB SSO、认证改进与 DSL 补全](https://github.com/geek-fun/dockit/releases/tag/v0.9.9)

**2026年4月28日** — 重大认证和补全改进。

🔑 **DynamoDB SSO & AssumeRole** — 完整 AWS SSO 和跨账户角色支持。不用再复制临时凭证——DocKit 处理整个认证流程。

🔧 **凭证化连接模型** — 重建 DynamoDB 认证，支持 AWS 配置文件和环境变量。不同账户间的多表工作流现在无缝衔接。

🎯 **313 个新增规范兼容测试** — 覆盖参数名、枚举值和布尔补全的全面测试。修复了 `properties` 块内错误出现字段类型提示的问题。

✨ **统一可搜索选择组件** — 用一个全局可搜索的 combobox 组件替换了多处 select 实现，一致 UX，更少代码。

🛡️ **安全修复：rustls-webpki CVE** — 解决 Dependabot 报告的 rustls-webpki 漏洞。

## [🎉 DocKit v0.9.8 发布：键盘导航与历史视图无障碍改进](https://github.com/geek-fun/dockit/releases/tag/v0.9.8)

**2026年4月22日** - DocKit v0.9.8 正式发布。此补丁版本为历史视图加入了键盘导航和更清晰的空状态引导，最近查询工作流用起来更顺手。Elasticsearch 集群管理的节点状态显示和索引管理 UX 也做了改进。

## [🎉 DocKit v0.9.7 发布：连接克隆、查询自动补全与导入增强](https://github.com/geek-fun/dockit/releases/tag/v0.9.7)

**2026年4月20日** - 三个针对性改进，加速日常操作：

📋 **连接克隆** — 从连接列表一键复制任意连接。配置开发/生产环境或微调设置时不用再从头开始。

💡 **查询参数自动补全** — 编辑器新增 Elasticsearch 查询参数值的自动补全支持，输入查询时自动弹出相关建议。

📥 **导入时创建索引/表** — 导入功能现在可以在目标索引或表不存在时自动创建，省去"先创建再导入"的中间步骤。

## [🎉 DocKit v0.9.6 发布：修复更新安装问题](https://github.com/geek-fun/dockit/releases/tag/v0.9.6)

**2026年4月14日** - 修复更新安装失败问题：现在下载前会重新获取签名 URL，不会因为首次点击升级时 URL 过期而中断。

## [🎉 DocKit v0.9.5 发布：强化 CI 与发布流水线](https://github.com/geek-fun/dockit/releases/tag/v0.9.5)

**2026年4月14日** - 强化发布流程：推送到 `master` 时也执行 CI 校验，并要求所有平台构建成功后才允许正式发布——杜绝部分发布。

## [🎉 DocKit v0.9.4 发布：连接排序筛选与更新进度显示](https://github.com/geek-fun/dockit/releases/tag/v0.9.4)

**2026年4月14日** - DocKit v0.9.4 为连接列表加入排序与筛选（升序/降序切换），新增更新下载/安装进度条（带百分比），并修复 Windows 上的快捷键问题。

## [🎉 DocKit v0.9.3 发布](https://github.com/geek-fun/dockit/releases/tag/v0.9.3)

**2026年4月8日** - 维护版本，修复 Windows 平台键盘快捷键问题。

## [🎉 DocKit v0.9.2 发布：自动更新修复与快捷键面板](https://github.com/geek-fun/dockit/releases/tag/v0.9.2)

**2026年4月6日** - 修复自动更新所需的 latest.json 文件上传问题，新增快捷键对话框（`?` 键查看所有可用快捷键）。

## [🎉 DocKit v0.9.1 发布：Elasticsearch API Key 认证与补全修复](https://github.com/geek-fun/dockit/releases/tag/v0.9.1)

**2026年3月25日** - 为 Elasticsearch 连接加入 API Key 认证，支持通过 API Key 访问安全集群。同时修复编辑器自动补全问题。

## [🎉 DocKit v0.9 发布：UI 重设计、查询历史与 DynamoDB Local 支持](/zh/news/dockit-v0-9-release)

**2026年3月3日** — DocKit v0.9 是一个里程碑版本，包含 **1,200+ 行 UI 重设计**，覆盖 60+ 个 Vue 组件。

🎨 **全面 UI 重设计 — Naive UI → shadcn-vue + UnoCSS** — 将所有 UI 组件从 Naive UI/SCSS 迁移到 shadcn-vue + UnoCSS，减少 CSS 依赖并建立统一的设计系统。100+ 个组件完成迁移，支持一致的全暗色/全亮色主题。

📜 **查询历史**——再也不用担心丢失查询。Elasticsearch 和 DynamoDB 查询现在自动保存带时间戳，可跨会话搜索和重用。查询本地持久化，让你可以精确恢复到上次工作状态。

🔌 **DynamoDB Local 支持**——新增可选端点 URL 配置，轻松连接 DynamoDB Local、LocalStack 或 Testcontainers——只需将 DocKit 指向 `http://localhost:8000` 即可开始工作。

📝 **PartiQL 文档格式化**——Monaco 编辑器新增 DynamoDB PartiQL 查询代码格式化支持。正确的缩进、关键字大小写和语法结构，让 PartiQL 脚本更易读。

🔄 **官方 Tauri 更新器**——从自定义更新机制迁移到官方 Tauri 更新插件，支持代码签名、版本清单和回滚保护。

## [🎉 DocKit v0.8 发布：全面支持 DynamoDB](/zh/news/dockit-v0-8-dynamodb-support)

**2026年1月20日** - 我们很高兴地宣布 DocKit v0.8 正式发布，完整支持 Amazon DynamoDB！此版本带来了强大的新功能，包括 PartiQL 查询编辑器、可视化查询 UI、内联数据编辑等。了解这次重大更新的更多新特性。

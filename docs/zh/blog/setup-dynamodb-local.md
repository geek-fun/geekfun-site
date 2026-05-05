---
title: 如何在本地搭建 DynamoDB Local
description: 学习如何通过 Docker 或可下载的 JAR 包搭建 DynamoDB Local，配置 AWS CLI，创建第一张表，并从 DocKit 连接本地 DynamoDB。
head:
  - - meta
    - name: keywords
      content: DynamoDB Local 搭建, 本地运行 DynamoDB, DynamoDB Local Docker, DynamoDB Local JAR, AWS CLI DynamoDB Local, DocKit DynamoDB Local
  - - link
    - rel: canonical
      href: https://www.geekfun.club/zh/blog/setup-dynamodb-local
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/blog/setup-dynamodb-local
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/blog/setup-dynamodb-local
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/blog/setup-dynamodb-local
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "如何在本地搭建 DynamoDB Local",
        "description": "学习如何通过 Docker 或可下载的 JAR 包搭建 DynamoDB Local，配置 AWS CLI，创建第一张表，并从 DocKit 连接本地 DynamoDB。",
        "image": "https://www.geekfun.club/dockit-connection-dynamodblocal.png",
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
        "datePublished": "2026-04-23",
        "dateModified": "2026-04-23",
        "inLanguage": "zh-CN",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.geekfun.club/zh/blog/setup-dynamodb-local"
        },
        "keywords": ["DynamoDB Local", "Docker", "AWS CLI", "DocKit"],
        "articleSection": "Database Development"
      }
---

# 如何在本地搭建 DynamoDB Local

在本地运行一套与云环境一致的可验证开发栈，是快速迭代的常见做法。对于使用 DynamoDB 的应用来说，**DynamoDB Local** 是最快的起点。它提供了一个本地端点，行为与真实 DynamoDB 一致，足以覆盖日常开发任务——建表、写入数据、调试 PartiQL、集成测试等。

本文仅聚焦 **搭建**。如需通过图形界面查询和管理本地表，请参阅 **[使用 DocKit 访问和管理本地 DynamoDB](/zh/blog/query-dynamodb-locally)**。

![DocKit DynamoDB Local 连接界面](/dockit-connection-dynamodblocal.png)

## 开始前需要准备

选择一种方式：

- **Docker** — 对大多数开发者来说最简单 — [amazon/dynamodb-local](https://hub.docker.com/r/amazon/dynamodb-local)
- **可下载 JAR** — 不想用 Docker 时的替代方案 — [aws.amazon.com/dynamodb/local](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.DownloadingAndRunning.html)

你可能还需要：

- **AWS CLI**，用于从终端创建和查看表 — [aws.amazon.com/cli](https://aws.amazon.com/cli/)
- **[DocKit](/zh/products/dockit/)**，如果你想要桌面 GUI 管理本地 DynamoDB

> AWS 当前推荐使用 **DynamoDB Local v3.x**，可下载版本需要 **Java 17 或更高版本**。

---

## 方式一：使用 Docker 运行 DynamoDB Local

这是最简单、最推荐的方式。

### 启动容器

```bash
docker run -d \
  --name dynamodb-local \
  -p 8000:8000 \
  amazon/dynamodb-local:latest
```

启动后，本地端点为：

```text
http://localhost:8000
```

### 验证服务是否正常运行

```bash
aws dynamodb list-tables --endpoint-url http://localhost:8000
```

如果返回 JSON 响应，说明已经可以正常访问。

### 用 Docker Compose 持久化数据

如果您希望容器重启之后表和数据仍然保留，可以挂载本地目录，并搭配 `-sharedDb -dbPath ./data`。

```yaml
services:
  dynamodb-local:
    command: "-jar DynamoDBLocal.jar -sharedDb -dbPath ./data"
    image: "amazon/dynamodb-local:latest"
    container_name: dynamodb-local
    ports:
      - "8000:8000"
    volumes:
      - "./docker/dynamodb:/home/dynamodblocal/data"
    working_dir: /home/dynamodblocal
```

然后执行：

```bash
docker compose up -d
```

---

## 方式二：使用可下载的 JAR 包运行

如果您不想使用 Docker，也可以直接在本机运行 DynamoDB Local。

### 下载并解压

```bash
mkdir -p ~/dynamodb-local
cd ~/dynamodb-local

curl -L -o dynamodb_local_latest.tar.gz \
  https://d1ni2b6xgvw0s0.cloudfront.net/v2.x/dynamodb_local_latest.tar.gz

tar -xzf dynamodb_local_latest.tar.gz
```

### 启动 DynamoDB Local

```bash
java -Djava.library.path=./DynamoDBLocal_lib \
  -jar DynamoDBLocal.jar \
  -sharedDb
```

默认监听端口是 `8000`。

如果要换端口，例如改成 `8001`：

```bash
java -Djava.library.path=./DynamoDBLocal_lib \
  -jar DynamoDBLocal.jar \
  -sharedDb \
  -port 8001
```

如果想查看所有运行参数：

```bash
java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -help
```

---

## 配置 AWS CLI 访问本地 DynamoDB

本地 DynamoDB 启动后，你需要工具来访问它。可以使用 AWS CLI 或 DocKit。虽然 DynamoDB Local **不需要真实 AWS 凭证**，但 AWS CLI 仍然要求配置凭证和区域。

执行：

```bash
aws configure
```

可以填入任意占位值，例如：

```text
AWS Access Key ID: fakeMyKeyId
AWS Secret Access Key: fakeSecretAccessKey
Default region name: us-east-1
Default output format: json
```

后续所有本地命令都要记得带上：

```bash
--endpoint-url http://localhost:8000
```

---

## 创建第一张本地表

本地服务启动后，先创建一张简单的表。

```bash
aws dynamodb create-table \
  --table-name Users \
  --attribute-definitions AttributeName=userId,AttributeType=S \
  --key-schema AttributeName=userId,KeyType=HASH \
  --billing-mode PAY_PER_REQUEST \
  --endpoint-url http://localhost:8000
```

然后确认表已创建：

```bash
# 列出所有表
aws dynamodb list-tables --endpoint-url http://localhost:8000
# 查看指定表的详情
aws dynamodb describe-table \
  --table-name Users \
  --endpoint-url http://localhost:8000
```

---

## 从 DocKit 连接 DynamoDB Local

CLI 当然能用，但每次敲 `--endpoint-url` 总有几次会忘。DocKit 直接连接——指向 `http://localhost:8000` 就能浏览表、运行 PartiQL、查看数据，一个参数都不用记。连接后的完整操作流程请参考 **[使用 DocKit 访问和管理本地 DynamoDB](/zh/blog/query-dynamodb-locally)**。

---

## 技巧与排查

**始终使用 `--endpoint-url`** — 缺少此参数时 CLI 会发往真实 AWS，而非本地实例。

**假凭证完全可用** — DynamoDB Local 接受任意值。若 CLI 提示缺少凭证，执行 `aws configure` 填入占位值即可。

**8000 端口被占用？** 换一个端口启动：
```bash
docker run -d --name dynamodb-local -p 8001:8000 amazon/dynamodb-local:latest
```

**使用 `-sharedDb`** 让所有表共用一个数据库文件，而不是按凭证/区域拆分成多个文件。

**容器重启后数据默认不保留** — 挂载 volume 并传 `-dbPath ./data` 可在重启后持久化。

**必须设置 region** — 即使连接本地，大多数 SDK 和 CLI 仍要求配置。`us-east-1` 即可。

**更倾向 GUI？** 使用 **[DocKit](/zh/products/dockit/)** 浏览表、运行 PartiQL、可视化查看数据。指向 `http://localhost:8000` 即可，与 CLI 方式相同。

## Learn More

- **[使用 DocKit 访问和管理本地 DynamoDB](/zh/blog/query-dynamodb-locally)**
- **[DocKit - 让 DynamoDB 管理变得轻而易举](/zh/blog/dynamodb-gui-client)**
- **[下载 DocKit](/zh/download)**

*最后更新：2026 年 4 月*

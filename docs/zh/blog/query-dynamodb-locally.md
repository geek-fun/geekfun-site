---
title: 如何本地查询 DynamoDB - 完整开发指南
description: 学习如何使用 DynamoDB Local 和 DocKit GUI 本地查询 DynamoDB。离线开发、测试和 CI/CD 集成的分步设置。
head:
  - - meta
    - name: keywords
      content: query DynamoDB locally, DynamoDB Local, DynamoDB local development, DynamoDB offline, DynamoDB local setup, DynamoDB Local GUI, test DynamoDB locally
  - - link
    - rel: canonical
      href: https://www.geekfun.club/zh/blog/query-dynamodb-locally
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/blog/query-dynamodb-locally
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/blog/query-dynamodb-locally
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/blog/query-dynamodb-locally
---

# 如何本地查询 DynamoDB - 完整开发指南

针对 **DynamoDB Local** 进行开发可以消除 AWS 成本、加快迭代速度并支持离线开发。本指南将向您展示如何在本地设置 DynamoDB 并使用 DocKit 高效查询它。

## 为什么要本地查询 DynamoDB？

### 💰 零 AWS 成本

**云端 DynamoDB 成本：**
- 读/写容量单位：每百万请求 $0.25-1.25
- 存储：每 GB-月 $0.25
- 数据传输：每 GB $0.09

**开发团队影响：**
```
5 名开发者 × 每天 1,000 次查询 × 30 天 = 每月 150,000 次请求
成本：~$20-50/月（仅用于开发！）
```

**DynamoDB Local：**
- **$0** - 完全免费

### ⚡ 更快的开发周期

| 操作 | AWS DynamoDB | DynamoDB Local |
|-----------|--------------|----------------|
| **查询延迟** | 10-50ms | < 5ms |
| **表创建** | ~30秒 | < 1秒 |
| **架构更改** | 慢（生产风险） | 即时 |
| **重置数据** | 手动删除 | Docker 重启 |

### 🔒 无需 AWS 凭证

- 本地开发无需 IAM 设置
- 无凭证轮换
- 无意外的生产访问
- 初级开发者可以安全测试

### ✈️ 离线开发

随处工作：
- 飞行和旅行
- 远程位置
- 网络中断
- 受限环境

---

## 快速开始：DynamoDB Local 设置

### 选项 1：Docker（推荐）

**步骤 1：运行 DynamoDB Local**
```bash
docker run -d \
  --name dynamodb-local \
  -p 8000:8000 \
  amazon/dynamodb-local
```

**步骤 2：验证它正在运行**
```bash
curl http://localhost:8000
# 应该返回："healthy"
```

**步骤 3：使用 DocKit 连接**
1. 打开 DocKit
2. 添加连接 → DynamoDB
3. 选择"DynamoDB Local"
4. 端点：`http://localhost:8000`
5. 区域：`us-east-1`（本地任何区域都可以）
6. 访问密钥：`fakekey`（任何值都可以）
7. 密钥：`fakesecret`（任何值都可以）

✅ **您已准备好查询！**

---

### 选项 2：JAR 文件（无 Docker）

**步骤 1：下载 DynamoDB Local**
```bash
# 创建目录
mkdir ~/dynamodb-local
cd ~/dynamodb-local

# 下载（截至 2026 年为 1.21.0）
wget https://d1ni2b6xgvw0s0.cloudfront.net/v2.x/dynamodb_local_latest.tar.gz

# 解压
tar -xvzf dynamodb_local_latest.tar.gz
```

**步骤 2：运行 DynamoDB Local**
```bash
java -Djava.library.path=./DynamoDBLocal_lib \
  -jar DynamoDBLocal.jar \
  -sharedDb
```

**步骤 3：使用 DocKit 连接**（与上面的 Docker 选项相同）

---

### 选项 3：npm（用于 Node.js 项目）

**步骤 1：作为开发依赖项安装**
```bash
npm install --save-dev dynamodb-local
```

**步骤 2：添加到 package.json**
```json
{
  "scripts": {
    "dynamodb": "dynamodb-local",
    "test": "npm run dynamodb & sleep 2 && jest"
  }
}
```

**步骤 3：启动并连接**
```bash
npm run dynamodb
# 然后将 DocKit 连接到 localhost:8000
```

---

## 创建您的第一个本地表

### 使用 DocKit GUI

1. **连接到 DynamoDB Local**（见上面的快速开始）
2. **创建表：**
   - 单击"创建表"按钮
   - 表名：`Users`
   - 分区键：`userId`（字符串）
   - （可选）排序键：`email`（字符串）
   - 读/写容量：任何值（本地忽略）
3. **单击"创建"**

表在 < 1 秒内创建！

### 使用 AWS CLI

```bash
aws dynamodb create-table \
  --endpoint-url http://localhost:8000 \
  --table-name Users \
  --attribute-definitions \
    AttributeName=userId,AttributeType=S \
  --key-schema \
    AttributeName=userId,KeyType=HASH \
  --billing-mode PAY_PER_REQUEST
```

**注意：** 对于本地命令，始终使用 `--endpoint-url http://localhost:8000`。

---

## 使用 DocKit 查询 DynamoDB Local

### 可视化查询构建器

**1. 插入示例数据**

在 DocKit 中单击"插入项目"：
```json
{
  "userId": "user-001",
  "email": "alice@example.com",
  "name": "Alice Smith",
  "createdAt": "2026-01-28T10:00:00Z"
}
```

**2. 使用可视化构建器查询**

- 表：`Users`
- 操作：`Query`
- 分区键：`userId = "user-001"`
- 执行（Cmd/Ctrl + Enter）

**结果：**
```json
{
  "Items": [
    {
      "userId": "user-001",
      "email": "alice@example.com",
      "name": "Alice Smith",
      "createdAt": "2026-01-28T10:00:00Z"
    }
  ],
  "Count": 1
}
```

### PartiQL 编辑器

DocKit 的 PartiQL 编辑器在本地和云端 DynamoDB 上工作相同：

**查询：**
```sql
SELECT * FROM Users WHERE userId = 'user-001'
```

**插入：**
```sql
INSERT INTO Users VALUE {
  'userId': 'user-002',
  'email': 'bob@example.com',
  'name': 'Bob Johnson'
}
```

**更新：**
```sql
UPDATE Users 
SET email = 'alice.new@example.com' 
WHERE userId = 'user-001'
```

**删除：**
```sql
DELETE FROM Users WHERE userId = 'user-002'
```

---

## 高级本地开发模式

### 1. 在测试之间重置数据

**Docker：**
```bash
# 停止并删除容器（删除所有数据）
docker stop dynamodb-local
docker rm dynamodb-local

# 启动新实例
docker run -d --name dynamodb-local -p 8000:8000 amazon/dynamodb-local
```

**带持久化的 JAR：**
```bash
# 使用数据目录运行
java -Djava.library.path=./DynamoDBLocal_lib \
  -jar DynamoDBLocal.jar \
  -sharedDb \
  -dbPath ./data

# 重置数据
rm -rf ./data
```

### 2. 种子数据脚本

**Node.js 示例：**
```javascript
// seed-local-dynamodb.js
const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient, PutCommand } = require('@aws-sdk/lib-dynamodb');

const client = new DynamoDBClient({
  endpoint: 'http://localhost:8000',
  region: 'us-east-1',
  credentials: {
    accessKeyId: 'fakekey',
    secretAccessKey: 'fakesecret'
  }
});

const docClient = DynamoDBDocumentClient.from(client);

const users = [
  { userId: 'user-001', name: 'Alice', email: 'alice@example.com' },
  { userId: 'user-002', name: 'Bob', email: 'bob@example.com' },
  { userId: 'user-003', name: 'Charlie', email: 'charlie@example.com' }
];

async function seed() {
  for (const user of users) {
    await docClient.send(new PutCommand({
      TableName: 'Users',
      Item: user
    }));
  }
  console.log('已种子', users.length, '个用户');
}

seed();
```

**运行：**
```bash
node seed-local-dynamodb.js
# 然后在 DocKit 中查询
```

### 3. Docker Compose 实现团队一致性

**docker-compose.yml：**
```yaml
version: '3.8'
services:
  dynamodb-local:
    image: amazon/dynamodb-local
    container_name: dynamodb
    ports:
      - "8000:8000"
    command: "-jar DynamoDBLocal.jar -sharedDb"
    volumes:
      - ./dynamodb-data:/home/dynamodblocal/data
```

**使用：**
```bash
# 启动
docker-compose up -d

# 停止（保留数据）
docker-compose down

# 重置数据
rm -rf ./dynamodb-data
docker-compose up -d
```

---

## CI/CD 集成

### GitHub Actions 示例

```yaml
name: 使用 DynamoDB Local 测试

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    
    services:
      dynamodb:
        image: amazon/dynamodb-local
        ports:
          - 8000:8000
    
    steps:
      - uses: actions/checkout@v3
      
      - name: 设置 Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: 安装依赖项
        run: npm install
      
      - name: 创建测试表
        run: npm run create-tables
        env:
          DYNAMODB_ENDPOINT: http://localhost:8000
      
      - name: 运行测试
        run: npm test
```

---

## 差异：本地 vs. 云端 DynamoDB

### 本地不可用的功能

❌ **DynamoDB Streams**：无流处理
❌ **全局表**：多区域复制
❌ **时间点恢复**：备份
❌ **自动扩展**：容量管理
❌ **CloudWatch 指标**：监控
❌ **IAM 身份验证**：始终使用假凭证

### 行为差异

⚠️ **最终一致性**：本地始终是强一致性
⚠️ **容量单位**：被忽略（无限制）
⚠️ **数据持久化**：取决于配置（内存 vs. 文件）

**建议：** 99% 的开发使用本地，在暂存环境中测试生产行为。

---

## 最佳实践

### 1. 使用环境变量

```javascript
const DYNAMODB_CONFIG = {
  endpoint: process.env.DYNAMODB_ENDPOINT,
  region: process.env.AWS_REGION || 'us-east-1',
  credentials: process.env.DYNAMODB_ENDPOINT ? {
    accessKeyId: 'local',
    secretAccessKey: 'local'
  } : undefined  // 生产中使用默认 AWS 凭证
};
```

**.env.development：**
```
DYNAMODB_ENDPOINT=http://localhost:8000
```

**.env.production：**
```
# DYNAMODB_ENDPOINT 未设置 = 使用 AWS
```

### 2. 共享数据库 vs. 每表文件

**共享数据库**（推荐）：
```bash
java -jar DynamoDBLocal.jar -sharedDb
```
- 所有表一个文件
- 更快
- 更简单

**每表文件：**
```bash
java -jar DynamoDBLocal.jar
```
- 每个表单独文件
- 更好的隔离
- 更容易调试

### 3. 版本固定

指定确切的 DynamoDB Local 版本：

**Docker：**
```yaml
# 而不是 `latest`，使用特定版本
image: amazon/dynamodb-local:2.0.0
```

**npm：**
```json
{
  "devDependencies": {
    "dynamodb-local": "2.0.0"
  }
}
```

防止意外的行为更改。

---

## 调试本地查询

### 启用详细日志记录

**JAR：**
```bash
java -Djava.library.path=./DynamoDBLocal_lib \
  -jar DynamoDBLocal.jar \
  -sharedDb \
  -inMemory \
  -port 8000 \
  -cors "*"
```

**Docker：**
```bash
docker logs dynamodb-local
```

### 常见问题

**问题：连接被拒绝**
```
错误：连接 ECONNREFUSED 127.0.0.1:8000
```

**解决方案：**
```bash
# 检查是否运行
docker ps | grep dynamodb

# 如果未运行则启动
docker start dynamodb-local
```

**问题：InvalidSignatureException**
```
InvalidSignatureException：我们计算的请求签名不匹配
```

**解决方案：**
使用任何凭证（本地不验证）：
```javascript
credentials: {
  accessKeyId: 'test',
  secretAccessKey: 'test'
}
```

**问题：表已存在**
```
ResourceInUseException：表已存在
```

**解决方案：**
```bash
# 首先删除表
aws dynamodb delete-table \
  --endpoint-url http://localhost:8000 \
  --table-name Users

# 或重置整个数据库（Docker）
docker restart dynamodb-local
```

---

## DocKit 本地开发功能

### 1. 连接配置

保存多个本地设置：

- **本地（内存）**：`http://localhost:8000`
- **本地（持久）**：`http://localhost:8001`（不同端口）
- **Docker Compose**：`http://localhost:8002`

使用下拉菜单即时切换。

### 2. 查询模板

保存可重用的本地查询：

**创建测试用户：**
```sql
INSERT INTO Users VALUE {
  'userId': 'test-{{timestamp}}',
  'email': 'test@example.com',
  'createdAt': '{{now}}'
}
```

DocKit 自动替换占位符。

### 3. 导出/导入数据

**从本地导出：**
1. 查询：`SELECT * FROM Users`
2. 导出 → JSON
3. 另存为 `users-fixture.json`

**导入到本地：**
1. 导入 → 选择 `users-fixture.json`
2. 表：`Users`
3. 批量导入

非常适合测试fixtures！

---

## 从本地迁移到生产

### 1. 测试数据清理

永远不要部署测试数据：

```bash
# 错误 - 生产中的测试数据
aws dynamodb put-item --table-name Users --item '{...}'

# 正确 - 仅在本地种子
if [ "$ENV" = "development" ]; then
  npm run seed-local-data
fi
```

### 2. 架构迁移

使用基础设施即代码（IaC）：

**Terraform：**
```hcl
resource "aws_dynamodb_table" "users" {
  name         = "Users"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "userId"

  attribute {
    name = "userId"
    type = "S"
  }
}
```

在本地和生产中部署相同的架构。

### 3. 端点配置

```typescript
const getDynamoDBClient = () => {
  const config = {
    region: process.env.AWS_REGION || 'us-east-1'
  };

  if (process.env.NODE_ENV === 'development') {
    config.endpoint = 'http://localhost:8000';
    config.credentials = {
      accessKeyId: 'local',
      secretAccessKey: 'local'
    };
  }

  return new DynamoDBClient(config);
};
```

---

## 了解更多

- **[DynamoDB GUI 客户端](/zh/blog/dynamodb-gui)** - DocKit DynamoDB 功能
- **[DynamoDB PartiQL 编辑器](/zh/products/dockit/features/dynamodb-partiql)** - PartiQL 语法指南
- **[最佳 DynamoDB GUI 客户端](/zh/blog/best-dynamodb-gui-client)** - 工具对比
- **[下载 DocKit](/zh/download)** - 免费开始

---

## 快速参考命令

**Docker：**
```bash
# 启动
docker run -d -p 8000:8000 --name dynamodb-local amazon/dynamodb-local

# 停止
docker stop dynamodb-local

# 重启（清除数据）
docker rm dynamodb-local && docker run -d -p 8000:8000 --name dynamodb-local amazon/dynamodb-local
```

**AWS CLI：**
```bash
# 列出表
aws dynamodb list-tables --endpoint-url http://localhost:8000

# 描述表
aws dynamodb describe-table --table-name Users --endpoint-url http://localhost:8000

# 删除表
aws dynamodb delete-table --table-name Users --endpoint-url http://localhost:8000
```

**DocKit 连接：**
```
端点：http://localhost:8000
区域：us-east-1
访问密钥：（任何值）
密钥：（任何值）
```

---

*最后更新：2026 年 1 月*

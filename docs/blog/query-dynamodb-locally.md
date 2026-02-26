---
title: How to Query DynamoDB Locally - Complete Development Guide
description: Learn how to query DynamoDB locally using DynamoDB Local and DocKit GUI. Step-by-step setup for offline development, testing, and CI/CD integration.
---

# How to Query DynamoDB Locally - Complete Development Guide

Developing against **DynamoDB Local** eliminates AWS costs, speeds up iteration, and enables offline development. This guide shows you how to set up DynamoDB locally and query it efficiently using DocKit.

## Why Query DynamoDB Locally?

### 💰 Zero AWS Costs

**Cloud DynamoDB Costs:**
- Read/Write Capacity Units: $0.25-1.25 per million requests
- Storage: $0.25 per GB-month
- Data Transfer: $0.09 per GB

**Development Team Impact:**
```
5 developers × 1,000 queries/day × 30 days = 150,000 requests/month
Cost: ~$20-50/month (just for development!)
```

**DynamoDB Local:**
- **$0** - Completely free

### ⚡ Faster Development Cycle

| Operation | AWS DynamoDB | DynamoDB Local |
|-----------|--------------|----------------|
| **Query Latency** | 10-50ms | < 5ms |
| **Table Creation** | ~30s | < 1s |
| **Schema Changes** | Slow (production risk) | Instant |
| **Reset Data** | Manual deletion | Docker restart |

### 🔒 No AWS Credentials Required

- No IAM setup needed for local development
- No credential rotation
- No accidental production access
- Junior developers can test safely

### ✈️ Offline Development

Work anywhere:
- Flights and travel
- Remote locations
- Network outages
- Restricted environments

---

## Quick Start: DynamoDB Local Setup

### Option 1: Docker (Recommended)

**Step 1: Run DynamoDB Local**
```bash
docker run -d \
  --name dynamodb-local \
  -p 8000:8000 \
  amazon/dynamodb-local
```

**Step 2: Verify it's running**
```bash
curl http://localhost:8000
# Should return: "healthy"
```

**Step 3: Connect with DocKit**
1. Open DocKit
2. Add Connection → DynamoDB
3. Select "DynamoDB Local"
4. Endpoint: `http://localhost:8000`
5. Region: `us-east-1` (any region works locally)
6. Access Key: `fakekey` (any value works)
7. Secret Key: `fakesecret` (any value works)

✅ **You're ready to query!**

---

### Option 2: JAR File (No Docker)

**Step 1: Download DynamoDB Local**
```bash
# Create directory
mkdir ~/dynamodb-local
cd ~/dynamodb-local

# Download (1.21.0 as of 2026)
wget https://d1ni2b6xgvw0s0.cloudfront.net/v2.x/dynamodb_local_latest.tar.gz

# Extract
tar -xvzf dynamodb_local_latest.tar.gz
```

**Step 2: Run DynamoDB Local**
```bash
java -Djava.library.path=./DynamoDBLocal_lib \
  -jar DynamoDBLocal.jar \
  -sharedDb
```

**Step 3: Connect with DocKit** (same as Docker option above)

---

### Option 3: npm (For Node.js Projects)

**Step 1: Install as dev dependency**
```bash
npm install --save-dev dynamodb-local
```

**Step 2: Add to package.json**
```json
{
  "scripts": {
    "dynamodb": "dynamodb-local",
    "test": "npm run dynamodb & sleep 2 && jest"
  }
}
```

**Step 3: Start and connect**
```bash
npm run dynamodb
# Then connect DocKit to localhost:8000
```

---

## Creating Your First Local Table

### Using DocKit GUI

1. **Connect to DynamoDB Local** (see Quick Start above)
2. **Create Table:**
   - Click "Create Table" button
   - Table Name: `Users`
   - Partition Key: `userId` (String)
   - (Optional) Sort Key: `email` (String)
   - Read/Write Capacity: Any values (ignored locally)
3. **Click "Create"**

Table created in < 1 second!

### Using AWS CLI

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

**Note:** Always use `--endpoint-url http://localhost:8000` for local commands.

---

## Querying DynamoDB Local with DocKit

### Visual Query Builder

**1. Insert Sample Data**

Click "Insert Item" in DocKit:
```json
{
  "userId": "user-001",
  "email": "alice@example.com",
  "name": "Alice Smith",
  "createdAt": "2026-01-28T10:00:00Z"
}
```

**2. Query Using Visual Builder**

- Table: `Users`
- Operation: `Query`
- Partition Key: `userId = "user-001"`
- Execute (Cmd/Ctrl + Enter)

**Result:**
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

### PartiQL Editor

DocKit's PartiQL editor works identically with local and cloud DynamoDB:

**Select:**
```sql
SELECT * FROM Users WHERE userId = 'user-001'
```

**Insert:**
```sql
INSERT INTO Users VALUE {
  'userId': 'user-002',
  'email': 'bob@example.com',
  'name': 'Bob Johnson'
}
```

**Update:**
```sql
UPDATE Users 
SET email = 'alice.new@example.com' 
WHERE userId = 'user-001'
```

**Delete:**
```sql
DELETE FROM Users WHERE userId = 'user-002'
```

---

## Advanced Local Development Patterns

### 1. Reset Data Between Tests

**Docker:**
```bash
# Stop and remove container (deletes all data)
docker stop dynamodb-local
docker rm dynamodb-local

# Start fresh instance
docker run -d --name dynamodb-local -p 8000:8000 amazon/dynamodb-local
```

**JAR with Persistence:**
```bash
# Run with data directory
java -Djava.library.path=./DynamoDBLocal_lib \
  -jar DynamoDBLocal.jar \
  -sharedDb \
  -dbPath ./data

# Reset data
rm -rf ./data
```

### 2. Seed Data Script

**Node.js Example:**
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
  console.log('Seeded', users.length, 'users');
}

seed();
```

**Run:**
```bash
node seed-local-dynamodb.js
# Then query in DocKit
```

### 3. Docker Compose for Team Consistency

**docker-compose.yml:**
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

**Usage:**
```bash
# Start
docker-compose up -d

# Stop (preserve data)
docker-compose down

# Reset data
rm -rf ./dynamodb-data
docker-compose up -d
```

---

## CI/CD Integration

### GitHub Actions Example

```yaml
name: Test with DynamoDB Local

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
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Create test tables
        run: npm run create-tables
        env:
          DYNAMODB_ENDPOINT: http://localhost:8000
      
      - name: Run tests
        run: npm test
```

### Jest Testing

**jest.config.js:**
```javascript
module.exports = {
  setupFilesAfterEnv: ['./test-setup.js'],
  testEnvironment: 'node'
};
```

**test-setup.js:**
```javascript
const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { CreateTableCommand } = require('@aws-sdk/client-dynamodb');

const client = new DynamoDBClient({
  endpoint: process.env.DYNAMODB_ENDPOINT || 'http://localhost:8000',
  region: 'us-east-1',
  credentials: { accessKeyId: 'test', secretAccessKey: 'test' }
});

beforeAll(async () => {
  // Create test table
  await client.send(new CreateTableCommand({
    TableName: 'Users',
    KeySchema: [{ AttributeName: 'userId', KeyType: 'HASH' }],
    AttributeDefinitions: [{ AttributeName: 'userId', AttributeType: 'S' }],
    BillingMode: 'PAY_PER_REQUEST'
  }));
});
```

---

## Differences: Local vs. Cloud DynamoDB

### Features NOT Available Locally

❌ **DynamoDB Streams**: No stream processing
❌ **Global Tables**: Multi-region replication
❌ **Point-in-Time Recovery**: Backups
❌ **Auto Scaling**: Capacity management
❌ **CloudWatch Metrics**: Monitoring
❌ **IAM Authentication**: Always uses fake credentials

### Behavior Differences

⚠️ **Eventual Consistency**: Local is always strongly consistent
⚠️ **Capacity Units**: Ignored (no throttling)
⚠️ **Data Persistence**: Depends on configuration (in-memory vs. file)

**Recommendation:** Use local for 99% of development, test production behavior in staging.

---

## Best Practices

### 1. Use Environment Variables

```javascript
const DYNAMODB_CONFIG = {
  endpoint: process.env.DYNAMODB_ENDPOINT,
  region: process.env.AWS_REGION || 'us-east-1',
  credentials: process.env.DYNAMODB_ENDPOINT ? {
    accessKeyId: 'local',
    secretAccessKey: 'local'
  } : undefined  // Use default AWS credentials in production
};
```

**.env.development:**
```
DYNAMODB_ENDPOINT=http://localhost:8000
```

**.env.production:**
```
# DYNAMODB_ENDPOINT not set = use AWS
```

### 2. Shared Database vs. Per-Table Files

**Shared Database** (recommended):
```bash
java -jar DynamoDBLocal.jar -sharedDb
```
- One file for all tables
- Faster
- Simpler

**Per-Table Files:**
```bash
java -jar DynamoDBLocal.jar
```
- Separate file per table
- Better isolation
- Easier to debug

### 3. Version Pin

Specify exact DynamoDB Local version:

**Docker:**
```yaml
# Instead of `latest`, use specific version
image: amazon/dynamodb-local:2.0.0
```

**npm:**
```json
{
  "devDependencies": {
    "dynamodb-local": "2.0.0"
  }
}
```

Prevents unexpected behavior changes.

---

## Debugging Local Queries

### Enable Verbose Logging

**JAR:**
```bash
java -Djava.library.path=./DynamoDBLocal_lib \
  -jar DynamoDBLocal.jar \
  -sharedDb \
  -inMemory \
  -port 8000 \
  -cors "*"
```

**Docker:**
```bash
docker logs dynamodb-local
```

### Common Issues

**Problem: Connection Refused**
```
Error: connect ECONNREFUSED 127.0.0.1:8000
```

**Solution:**
```bash
# Check if running
docker ps | grep dynamodb

# Start if not running
docker start dynamodb-local
```

**Problem: InvalidSignatureException**
```
InvalidSignatureException: The request signature we calculated does not match
```

**Solution:**
Use any credentials (they're not validated locally):
```javascript
credentials: {
  accessKeyId: 'test',
  secretAccessKey: 'test'
}
```

**Problem: Table Already Exists**
```
ResourceInUseException: Table already exists
```

**Solution:**
```bash
# Delete table first
aws dynamodb delete-table \
  --endpoint-url http://localhost:8000 \
  --table-name Users

# Or reset entire database (Docker)
docker restart dynamodb-local
```

---

## DocKit Features for Local Development

### 1. Connection Profiles

Save multiple local setups:

- **Local (in-memory)**: `http://localhost:8000`
- **Local (persistent)**: `http://localhost:8001` (different port)
- **Docker Compose**: `http://localhost:8002`

Switch instantly with dropdown.

### 2. Query Templates

Save reusable local queries:

**Create Test User:**
```sql
INSERT INTO Users VALUE {
  'userId': 'test-{{timestamp}}',
  'email': 'test@example.com',
  'createdAt': '{{now}}'
}
```

DocKit replaces placeholders automatically.

### 3. Export/Import Data

**Export from Local:**
1. Query: `SELECT * FROM Users`
2. Export → JSON
3. Save as `users-fixture.json`

**Import to Local:**
1. Import → Select `users-fixture.json`
2. Table: `Users`
3. Batch import

Perfect for test fixtures!

---

## Migration from Local to Production

### 1. Test Data Cleanup

Never deploy test data:

```bash
# WRONG - test data in production
aws dynamodb put-item --table-name Users --item '{...}'

# RIGHT - seed only in local
if [ "$ENV" = "development" ]; then
  npm run seed-local-data
fi
```

### 2. Schema Migration

Use Infrastructure as Code (IaC):

**Terraform:**
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

Deploy same schema locally and in production.

### 3. Endpoint Configuration

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

## Learn More

- **[DynamoDB GUI Client](/blog/dynamodb-gui)** - DocKit DynamoDB features
- **[DynamoDB PartiQL Editor](/products/dockit/features/dynamodb-partiql)** - PartiQL syntax guide
- **[Best DynamoDB GUI Clients](/blog/best-dynamodb-gui-client)** - Tool comparison
- **[Download DocKit](/download)** - Get started free

---

## Quick Reference Commands

**Docker:**
```bash
# Start
docker run -d -p 8000:8000 --name dynamodb-local amazon/dynamodb-local

# Stop
docker stop dynamodb-local

# Restart (clear data)
docker rm dynamodb-local && docker run -d -p 8000:8000 --name dynamodb-local amazon/dynamodb-local
```

**AWS CLI:**
```bash
# List tables
aws dynamodb list-tables --endpoint-url http://localhost:8000

# Describe table
aws dynamodb describe-table --table-name Users --endpoint-url http://localhost:8000

# Delete table
aws dynamodb delete-table --table-name Users --endpoint-url http://localhost:8000
```

**DocKit Connection:**
```
Endpoint: http://localhost:8000
Region: us-east-1
Access Key: (any value)
Secret Key: (any value)
```

---

*Last updated: January 2026*

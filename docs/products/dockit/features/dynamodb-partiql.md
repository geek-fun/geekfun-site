---
title: DynamoDB PartiQL GUI - Visual Query Editor for SQL-Like Queries
description: Execute PartiQL queries against DynamoDB with DocKit's visual editor. Syntax highlighting, auto-completion, and query formatting for SQL-like DynamoDB queries.
sidebar: false
---

# DynamoDB PartiQL GUI - Visual Query Editor

DocKit provides a professional **PartiQL editor** for DynamoDB, bringing SQL-like query capabilities to your NoSQL workflow with full syntax highlighting, auto-completion, and query formatting.

## What is PartiQL for DynamoDB?

PartiQL is AWS's SQL-compatible query language for DynamoDB. It lets you use familiar SQL syntax to query, insert, update, and delete data in DynamoDB tables.

**Example PartiQL Query:**
```sql
SELECT * FROM ProductCatalog 
WHERE Category = 'Electronics' 
  AND Price BETWEEN 100 AND 500
ORDER BY Price DESC
```

Instead of complex DynamoDB query expressions, you write readable SQL-like statements.

## Why Use a PartiQL GUI?

### 🎯 Better Than AWS Console
- **Syntax Highlighting**: Color-coded SQL keywords, strings, and operators
- **Auto-Completion**: Intelligent suggestions for table names, attributes, and keywords
- **Query Formatting**: One-click beautification of complex queries
- **Error Detection**: Real-time syntax validation before execution

### ⚡ Developer Productivity
- **Query History**: Access previously executed PartiQL statements
- **Keyboard Shortcuts**: Execute with `Cmd/Ctrl + Enter`
- **Multi-Tab Support**: Work on multiple queries simultaneously
- **Saved Queries**: Persist queries locally for reuse

## DocKit PartiQL Editor Features

### 📝 Monaco-Powered Editor
Built on the same engine as VS Code:

- Full IntelliSense support
- Bracket matching and auto-closing
- Multi-cursor editing
- Find and replace with regex
- Code folding for complex queries

### 🔍 Query Execution & Results

```sql
-- Select with filtering
SELECT ProductName, Price, Category 
FROM ProductCatalog 
WHERE Category = 'Electronics'

-- Insert new items
INSERT INTO ProductCatalog VALUE {
  'ProductId': '12345',
  'ProductName': 'Laptop',
  'Price': 999
}

-- Update existing items
UPDATE ProductCatalog 
SET Price = 899 
WHERE ProductId = '12345'

-- Delete items
DELETE FROM ProductCatalog 
WHERE ProductId = '12345'
```

**Result Display:**
- Formatted JSON output
- Table view for easy scanning
- Export results to JSON/CSV
- Copy individual items or entire result sets

### 💾 Local-First Design

Unlike cloud-based tools, DocKit stores everything locally:

- **Query Files**: Saved as `.partiql` or `.sql` files
- **Connection Profiles**: Encrypted local storage
- **No Cloud Sync**: Your queries never leave your machine
- **Git-Friendly**: Commit queries to version control

## PartiQL Features Supported

DocKit supports all DynamoDB PartiQL operations:

| Operation | Description | Example |
|-----------|-------------|---------|
| **SELECT** | Query items | `SELECT * FROM Table WHERE id = ?` |
| **INSERT** | Add new items | `INSERT INTO Table VALUE {...}` |
| **UPDATE** | Modify items | `UPDATE Table SET attr = ? WHERE id = ?` |
| **DELETE** | Remove items | `DELETE FROM Table WHERE id = ?` |
| **Transactions** | Atomic operations | Multiple statements in transaction |
| **Batch Operations** | Multiple items | Batch SELECT/INSERT/UPDATE |

### Advanced Query Examples

**Filtering with BETWEEN:**
```sql
SELECT * FROM Orders 
WHERE OrderDate BETWEEN '2024-01-01' AND '2024-12-31'
  AND TotalAmount > 100
```

**Using IN clause:**
```sql
SELECT * FROM Users 
WHERE Status IN ('active', 'pending')
```

**Projection (specific attributes only):**
```sql
SELECT UserId, Email, CreatedAt 
FROM Users 
WHERE AccountType = 'premium'
```

**Nested attribute access:**
```sql
SELECT OrderId, Customer.Name, Customer.Email 
FROM Orders 
WHERE Customer.Country = 'US'
```

## DynamoDB Local Support

DocKit works seamlessly with DynamoDB Local for offline development:

1. **Connection Setup**: Point to `http://localhost:8000`
2. **Same Features**: PartiQL editor works identically
3. **No AWS Credentials Required**: Test queries without AWS account
4. **Fast Iteration**: Instant query execution on local instance

## Comparison: PartiQL Editor Tools

| Feature | DocKit | AWS Console | Dynobase |
|---------|--------|-------------|----------|
| **PartiQL Support** | ✅ Full | ✅ Full | ✅ Full |
| **Syntax Highlighting** | ✅ VS Code-level | ⚠️ Basic | ✅ Good |
| **Auto-Completion** | ✅ Table + attributes | ❌ | ✅ Tables only |
| **Query Formatting** | ✅ | ❌ | ✅ |
| **Local Storage** | ✅ Files | ❌ | ✅ Cloud sync |
| **Offline Mode** | ✅ | ❌ | ⚠️ Limited |
| **Multi-Tab Queries** | ✅ | ❌ | ✅ |
| **Cost** | Free | Free (AWS usage) | $12-30/month |

## Getting Started with PartiQL in DocKit

### 1. Install DocKit
Download from [dockit.geekfun.club/download](/download)

### 2. Connect to DynamoDB
- AWS account (with credentials)
- DynamoDB Local (localhost)
- IAM role-based connections

### 3. Write Your First Query
```sql
SELECT * FROM YourTableName LIMIT 10
```

### 4. Execute with Keyboard Shortcut
Press `Cmd + Enter` (Mac) or `Ctrl + Enter` (Windows/Linux)

## Why Developers Choose DocKit for PartiQL

> *"Finally, a DynamoDB editor that doesn't feel like a browser form. The PartiQL editor is as good as any SQL client I've used."*
> — Developer using DocKit for microservices

### Key Benefits:
- **Free & Open Source**: No subscription or trial limits
- **Fast**: Native desktop app, not web-based
- **Private**: Queries stay on your machine
- **Multi-Engine**: Same tool for DynamoDB, Elasticsearch, OpenSearch

## Learn More

- **[DynamoDB GUI Client Overview](/blog/dynamodb-gui)** - Full feature list
- **[Dynobase Alternative](/blog/dynobase-alternative)** - Feature comparison
- **[Download DocKit](/download)** - Available for Mac, Windows, Linux

---

**Need help with PartiQL syntax?**
Check the [AWS PartiQL documentation](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ql-reference.html) or use DocKit's built-in AI assistant to generate queries.

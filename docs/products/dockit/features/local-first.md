---
title: Local-First NoSQL Database Client - Offline Database Management
description: DocKit is a local-first database client that works offline. All queries, connections, and data stay on your machine. Perfect for air-gapped environments and privacy-conscious teams.
sidebar: false
---

# Local-First NoSQL Database Client

DocKit is built on a **local-first architecture**, meaning all your queries, connection profiles, and data stay on your machine. No cloud sync, no external servers, no telemetry.

## What Does Local-First Mean?

A local-first application prioritizes local data storage and processing over cloud-based alternatives:

- **Data Lives on Your Device**: Queries, connections, and settings stored locally
- **Works Offline**: Full functionality without internet connection
- **No External Dependencies**: Doesn't require cloud services to function
- **Privacy by Design**: Your data never leaves your control

## Why Local-First Matters for Database Tools

### 🔒 Security & Compliance

Many organizations have strict requirements about data handling:

- **Air-Gapped Environments**: Work in isolated networks without internet
- **HIPAA/SOC2 Compliance**: Keep sensitive query data on-premise
- **Financial Services**: Meet regulatory requirements for data residency
- **Government/Military**: Security clearance environments

**Example Use Cases:**
- Healthcare: Query patient databases without exposing PHI to cloud services
- Banking: Manage production databases with complete audit trail
- Defense: Database management in classified environments

### ⚡ Performance Benefits

Local-first design means faster operations:

| Operation | Cloud-Based Tool | DocKit (Local-First) |
|-----------|------------------|----------------------|
| App Launch | 5-10s (fetch config) | < 2s (local read) |
| Query Load | Network request | Instant (local file) |
| Connection Switch | API call | Instant (local profile) |
| Query Save | Upload to cloud | Instant (local write) |

### 💾 Data Ownership

You control where and how your data is stored:

- **File Format**: Plain text files (JSON, SQL, PartiQL)
- **Location**: Choose your storage directory
- **Backup**: Use your own backup strategy (Time Machine, cloud sync of your choice)
- **Version Control**: Commit queries to Git

## How DocKit Implements Local-First

### 1. Query Storage

All queries saved as individual files:

```
~/DocKit/
  queries/
    dynamodb/
      get-user-by-email.partiql
      list-active-orders.partiql
    elasticsearch/
      search-products.json
      aggregate-sales.json
```

**Benefits:**
- Easy to organize (folders, tags)
- Git-friendly (commit, diff, share with team)
- No vendor lock-in (plain text)
- Works with any text editor

### 2. Connection Profiles

Encrypted local storage for database credentials:

```json
{
  "name": "Production DynamoDB",
  "type": "dynamodb",
  "region": "us-east-1",
  "accessKeyId": "ENCRYPTED",
  "secretAccessKey": "ENCRYPTED"
}
```

**Security Features:**
- Credentials encrypted with OS keychain (macOS Keychain, Windows Credential Manager)
- Never transmitted over network
- Not stored in plain text
- Isolated per OS user account

### 3. Application Settings

All preferences stored locally:

- Editor theme and font size
- Keyboard shortcuts
- UI layout preferences
- Recent connections
- Query history

**Location:**
- macOS: `~/Library/Application Support/DocKit/`
- Windows: `%APPDATA%/DocKit/`
- Linux: `~/.config/DocKit/`

## Local-First vs. Cloud-Sync Tools

| Feature | DocKit (Local-First) | Cloud Tools (Dynobase, etc.) |
|---------|----------------------|------------------------------|
| **Query Storage** | Local files | Cloud database |
| **Works Offline** | ✅ Full features | ❌ Limited or none |
| **Data Privacy** | ✅ Never leaves device | ⚠️ Synced to vendor servers |
| **Network Required** | Only for DB connection | For app features too |
| **Compliance** | ✅ Air-gap compatible | ❌ External dependency |
| **Team Sharing** | Via Git/shared drives | Built-in cloud sync |
| **Backup Strategy** | Your choice | Vendor-controlled |
| **Vendor Lock-in** | ❌ Plain files | ⚠️ Proprietary format |

## Use Cases for Local-First Database Tools

### Development & Testing

**DynamoDB Local Development:**
```bash
# Run DynamoDB Local in Docker
docker run -p 8000:8000 amazon/dynamodb-local

# Connect DocKit to localhost:8000
# No AWS credentials or internet required
```

DocKit works perfectly with:
- DynamoDB Local
- Elasticsearch in Docker
- OpenSearch local instances
- LocalStack

### Production Access in Restricted Networks

Organizations with strict network policies:

1. **Jump Hosts**: Install DocKit on bastion servers
2. **VPN-Only Access**: Work with internal databases without internet
3. **Proxy Environments**: No external traffic to worry about

### Consulting & Client Work

Manage multiple client databases without mixing credentials:

- **Separate Profiles**: One connection profile per client
- **Isolated Queries**: Organize queries by project folders
- **No Cross-Contamination**: Each client's data stays separate
- **Easy Handoff**: Export connection profile (encrypted) for team members

## Privacy & Telemetry

DocKit's local-first philosophy extends to telemetry:

**What DocKit DOES NOT collect:**
- ❌ Query content or patterns
- ❌ Database credentials
- ❌ Connection strings or endpoints
- ❌ Usage analytics
- ❌ Error reports (unless you opt-in)
- ❌ Device identifiers

**What DocKit DOES do:**
- ✅ Crash reports (opt-in only, with your approval)
- ✅ Anonymous feature usage (opt-in only)
- ✅ Version check (to notify about updates)

All telemetry is **opt-in**, not opt-out.

## Comparing to Other Database Clients

### Cloud-First Tools (TablePlus Cloud, Dynobase)

**Pros:**
- Easy team collaboration
- Cross-device sync
- Automatic backups

**Cons:**
- Requires internet for core features
- Data stored on vendor servers
- Monthly subscription fees
- Compliance/security concerns

### Browser-Based (AWS Console, Kibana)

**Pros:**
- No installation required
- Always up-to-date

**Cons:**
- Requires active connection
- No offline query building
- Tab-based (easy to lose work)
- Performance overhead

### DocKit (Local-First)

**Pros:**
- Complete offline functionality
- Data never leaves your device
- Fast performance
- Free and open-source

**Cons:**
- Manual sync for team sharing (via Git)
- Each device has separate query storage

## Team Collaboration with Local-First

**Q: How do teams share queries without cloud sync?**

**A: Git-based workflows**

```bash
# Create a shared repository for queries
git init dockit-queries
cd dockit-queries

# Add your queries
cp ~/DocKit/queries/*.partiql ./
git add .
git commit -m "Add user query templates"
git push

# Team members pull updates
git pull
```

**Benefits:**
- Version control built-in
- Code review process for queries
- Blame/history for audit trails
- Works with existing Git workflows

## Getting Started with Local-First Workflow

### 1. Install DocKit
Download from [dockit.geekfun.club/download](/products/dockit/download)

### 2. Choose Your Query Directory
On first launch, select where to store queries:
- Default: `~/DocKit/queries/`
- Custom: Any folder (e.g., `~/Projects/client-queries/`)

### 3. Set Up Connections
Create connection profiles for your databases (stored encrypted locally)

### 4. Start Querying
All queries automatically saved to your chosen directory

### 5. (Optional) Set Up Git Sync
```bash
cd ~/DocKit/queries
git init
git remote add origin <your-repo>
```

## Learn More

- **[DynamoDB GUI Client](/products/dockit/dynamodb-gui)** - DynamoDB-specific features
- **[Open Source Database GUI](/products/dockit/features/open-source)** - Why open source matters
- **[Desktop Database Client](/products/dockit/features/desktop-client)** - Benefits of native apps
- **[Download DocKit](/products/dockit/download)** - Get started today

---

**Questions about local-first architecture?**
Check our [docs](/products/dockit/docs) or open an issue on [GitHub](https://github.com/geek-fun/dockit).

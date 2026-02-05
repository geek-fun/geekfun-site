---
title: Desktop Database GUI Client - Native App for Mac, Windows, Linux
description: DocKit is a native desktop database client for DynamoDB, Elasticsearch, and OpenSearch. Faster than browser tools, works offline, and built with modern native technologies.
sidebar: false
---

# Desktop Database GUI Client

DocKit is a **native desktop application** for managing DynamoDB, Elasticsearch, and OpenSearch. Unlike browser-based tools, it runs directly on your operating system, providing better performance, offline capabilities, and a more responsive user experience.

## Why Choose a Desktop Database Client?

### ⚡ Performance Advantages

Native desktop applications outperform browser-based tools in several ways:

| Metric | Browser Tool | Desktop Client (DocKit) |
|--------|--------------|-------------------------|
| **Startup Time** | 10-30s | < 2s |
| **Memory Usage** | 500+ MB | 100-200 MB |
| **Query Execution** | Network + browser overhead | Direct API calls |
| **Large Results** | Browser tab limit (~10K rows) | Handle 100K+ rows |
| **UI Responsiveness** | Depends on browser | Native UI thread |

**Real-World Impact:**
- Opening a connection: **5x faster**
- Loading query results: **3x faster**
- Switching between databases: **instant** vs. page reload

### 💾 Offline Capabilities

Desktop apps work without constant internet connectivity:

- **Query Building**: Write and test queries offline
- **Connection Profiles**: Manage locally stored credentials
- **Query History**: Access past queries without network
- **Settings Sync**: All preferences stored locally

**Use Cases:**
- Flights or remote locations without wifi
- Restricted network environments
- Working with local database instances (DynamoDB Local, Docker)

### 🖥️ Native OS Integration

DocKit leverages your operating system's capabilities:

#### macOS
- **Apple Silicon Optimization**: Native ARM64 build for M1/M2/M3 chips
- **Keychain Integration**: Secure credential storage
- **Touch Bar Support**: Quick actions on MacBook Pro
- **System Shortcuts**: Spotlight search, drag-and-drop

#### Windows
- **Windows 11 Optimized**: Follows Windows design guidelines
- **Credential Manager**: Encrypted password storage
- **Taskbar Integration**: Pin and quick launch
- **Windows Defender SmartScreen**: Signed application

#### Linux
- **Multiple Distros**: Works on Ubuntu, Fedora, Arch, etc.
- **Wayland & X11 Support**: Compatible with modern display servers
- **System Tray**: Background operation support
- **Native File Dialogs**: Uses GTK/Qt file pickers

## Technology: Why Tauri/Rust Matters

DocKit is built with **Tauri** (not Electron), resulting in:

### Size Comparison

| App | Technology | Download Size | Memory Usage |
|-----|-----------|---------------|--------------|
| DocKit | Tauri + Rust | ~15 MB | 100-200 MB |
| Typical Electron App | Electron + Node.js | ~100-200 MB | 300-600 MB |
| Browser Tool | Chrome Tab | N/A | 400-800 MB |

**Why This Matters:**
- Faster downloads
- Less disk space
- More RAM for your databases
- Better battery life on laptops

### Security Benefits

Rust's memory safety prevents common vulnerabilities:

- **No Buffer Overflows**: Compile-time checks
- **No Use-After-Free**: Borrow checker prevents memory issues
- **Thread Safety**: Fearless concurrency
- **CVE Resistance**: Fewer exploitable bugs than C/C++

### Performance Benefits

Native code execution means:

- **Fast Startup**: No JVM or Node.js runtime to boot
- **Low Latency**: Direct system calls, no interpreter
- **Efficient Rendering**: Uses OS-native WebView (WebKit/Chromium)
- **Background Tasks**: True multi-threading without blocking UI

## Cross-Platform Consistency

DocKit provides the same features on all platforms:

### Feature Parity

✅ **Available on All Platforms:**
- DynamoDB, Elasticsearch, OpenSearch support
- PartiQL editor with syntax highlighting
- Visual query builder
- Connection management
- Query persistence
- Export to JSON/CSV
- AI assistant integration
- Cluster monitoring

❌ **No Platform-Specific Limitations**

### UI Consistency

While respecting each OS's design language:

- **Same Layout**: Consistent menu structure
- **Same Shortcuts**: Keyboard shortcuts work across platforms
- **Same Features**: No "Windows-only" or "Mac-only" features
- **Unified Settings**: Export settings, use on another OS

## Comparison: Desktop vs. Browser vs. Cloud Tools

### AWS DynamoDB Console (Browser)

**Limitations:**
- Requires constant AWS login
- Slow page loads and navigation
- No offline query building
- Lost work when tab closes
- Limited to AWS services only

### Kibana / OpenSearch Dashboards (Browser)

**Limitations:**
- Heavy resource usage (Node.js backend + browser)
- Slow startup (10-30 seconds)
- Requires Elasticsearch/OpenSearch running
- No DynamoDB support
- Complex deployment

### Dynobase (Desktop - Electron)

**Pros:**
- Desktop application
- Good feature set

**Cons:**
- Larger download size (~150 MB)
- Higher memory usage
- Subscription required ($12-30/month)
- Cloud sync (privacy concerns)

### DocKit (Desktop - Tauri)

**Advantages:**
- Small download size (~15 MB)
- Low memory footprint
- Free and open-source
- Multi-engine support
- Local-first privacy

## Desktop Client Features in DocKit

### Multi-Tab Interface

Work on multiple queries simultaneously:

```
Tab 1: DynamoDB - Production orders query
Tab 2: Elasticsearch - User search index
Tab 3: OpenSearch - Logs aggregation
Tab 4: DynamoDB Local - Testing new schema
```

Each tab maintains its own:
- Connection context
- Query state
- Result set
- Scroll position

### Drag-and-Drop

Native file operations:

- **Import JSON**: Drag file to import data
- **Export Results**: Drag result table to Desktop → creates CSV
- **Query Files**: Drag `.sql`/`.partiql` files to open
- **Connection Profiles**: Export/import via file drag

### System Clipboard Integration

Copy/paste works seamlessly:

- Copy query results → paste into Excel/Google Sheets
- Copy JSON → paste into code editor
- Copy connection string → paste into documentation
- Rich text formatting preserved

### Window Management

Professional workspace features:

- **Multiple Windows**: Open separate windows for different projects
- **Full Screen Mode**: Focus mode for complex queries
- **Always on Top**: Pin window above other apps
- **Minimize to Tray**: Background operation (Linux/Windows)

## Installation & Updates

### Easy Installation

**macOS:**
```bash
# Download .dmg
# Drag to Applications folder
# Done - no Homebrew or npm required
```

**Windows:**
```bash
# Download .exe installer
# Double-click to install
# Automatic Start Menu entry
```

**Linux:**
```bash
# .AppImage (no installation)
chmod +x DocKit.AppImage
./DocKit.AppImage

# Or .deb (Ubuntu/Debian)
sudo dpkg -i dockit.deb
```

### Auto-Updates

Desktop clients provide seamless updates:

1. **Background Check**: Checks for updates on launch
2. **Download**: Downloads new version in background
3. **Install**: One-click update, preserves settings
4. **Rollback**: Easy to revert if needed

No manual download or reinstall required.

## Use Cases for Desktop Clients

### Development Teams

**Scenario**: 5 developers managing microservices with DynamoDB

**Why Desktop Client:**
- Each developer has local setup
- No browser tabs competing for resources
- Offline query development during commutes
- Git-based query sharing (via local files)

### DevOps & SRE

**Scenario**: Managing production Elasticsearch clusters

**Why Desktop Client:**
- Quick access without opening browser
- Multiple cluster connections (dev/staging/prod)
- Keyboard shortcuts for rapid operations
- System notifications for long-running queries

### Data Analysts

**Scenario**: Querying OpenSearch for business intelligence

**Why Desktop Client:**
- Large result sets (browser tabs can't handle)
- Export to CSV for Excel/Tableau
- Save complex queries for recurring reports
- Multi-monitor support (drag windows)

### Consultants

**Scenario**: Managing databases for multiple clients

**Why Desktop Client:**
- Isolated connection profiles per client
- No accidental cross-client queries
- Offline access to query library
- Professional appearance (vs. browser tabs)

## Getting Started

### 1. Download DocKit

Visit [dockit.geekfun.club/download](/download) and choose your platform:

- macOS (Intel & Apple Silicon)
- Windows (64-bit)
- Linux (AppImage, .deb, .rpm)

### 2. Install

Follow platform-specific installation steps (see above)

### 3. Launch & Connect

Open DocKit and add your first database connection:

- DynamoDB (AWS or Local)
- Elasticsearch
- OpenSearch

### 4. Start Querying

Use the visual query builder or write PartiQL/JSON queries directly.

## Learn More

- **[DynamoDB GUI Client](/dynamodb-gui)** - DynamoDB features
- **[Elasticsearch GUI](/elasticsearch-gui)** - Elasticsearch features
- **[OpenSearch GUI](/opensearch-gui)** - OpenSearch features
- **[Local-First Design](/features/local-first)** - Privacy & offline capabilities
- **[Open Source](/features/open-source)** - Why DocKit is open source

---

**Questions about desktop vs. web tools?**
Check our [FAQ](/docs) or [open an issue](https://github.com/geek-fun/dockit/issues).

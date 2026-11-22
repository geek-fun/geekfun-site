---
title: DocKit Query DSL Editor for Elasticsearch, OpenSearch, and EasySearch
description: Run Query DSL requests, use mapping-aware autocomplete, review and export results, and reuse requests in DocKit's search editor.
---

# Run queries in the search editor

In the search editor, you can run REST requests against [Elasticsearch, OpenSearch, and EasySearch connections](/docs/dockit/connect-to-server). Search an index or inspect its mappings, then see what the server returned. The editor accepts Query DSL and supports JSON5 input and comments.

## Run a read-only request

Select your connection and open the search editor. Replace `orders` below with an index you can read. Put the cursor inside the request and press `⌘ + Enter` on macOS or `Ctrl + Enter` on Windows and Linux. The play button beside a request also runs that request.

```http
POST /orders/_search
{
  "size": 10,
  "query": { "match_all": {} }
}
```

Start each request on a new line with its HTTP method and path. Put the body below it if the request has one. When working with several requests, check the active connection before running each one.

## Write and inspect requests

- Use autocomplete to find REST endpoints and fields from the index mapping. Trigger suggestions manually with `⌘ + Space` or `Ctrl + Space` when your operating system passes that shortcut to DocKit.
- Use `⌘ + I` or `Ctrl + I` to format the current request. Open the request's gutter menu to copy it as cURL. Review the copied text before sharing it.
- Review the response in the result panel. Use its copy and export controls to save returned data. For index-wide file exports, open [Import & Export](/docs/dockit/import-export).
- Save requests as `.search` files for reuse, or reopen a previous request from [Query History](/docs/dockit/query-history). See [keyboard shortcuts](/docs/dockit/shortcut) for request navigation.

Use [Manage](/docs/dockit/manage-elasticsearch-cluster) for cluster health, nodes, shards, aliases, and templates. The Manage workspace requires Ultimate.

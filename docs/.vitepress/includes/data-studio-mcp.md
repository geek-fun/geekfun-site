<!-- #region codex -->
```bash [Codex]
codex mcp add data-studio -- npx -y @geek-fun/data-studio-mcp
```
<!-- #endregion codex -->

<!-- #region claude -->
```bash [Claude Code]
claude mcp add --transport stdio data-studio -- npx -y @geek-fun/data-studio-mcp
```
<!-- #endregion claude -->

<!-- #region cursor -->
```json [Cursor]
{
  "mcpServers": {
    "data-studio": {
      "command": "npx",
      "args": ["-y", "@geek-fun/data-studio-mcp"]
    }
  }
}
```
<!-- #endregion cursor -->

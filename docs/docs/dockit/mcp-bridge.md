---
title: Set Up DocKit's Local MCP Bridge
description: Start and troubleshoot the DocKit MCP bridge, connect a coding assistant through Data Studio Agent, and control database access with AI permissions.
---

# Set up the local MCP bridge

The DocKit MCP bridge makes your saved MongoDB, DynamoDB, and search database connections available to coding assistants through the [Data Studio Agent MCP package](/docs/data-studio-agent/). To use the bridge, sign in with access to Ultimate. The bridge listens on your machine at `127.0.0.1`.

## Connect a client

1. Save and test a database connection in DocKit. Open **Settings → MCP Bridge** and check for **Running on port**. Use **Restart Bridge** if it is stopped. **Auto-start** starts the bridge when DocKit launches.
2. In **Default AI permissions**, choose **Read** if you only want schema inspection and read queries. Check the [per-connection permissions](/docs/dockit/ai-permissions) for the saved connection as well.
3. Follow the [Data Studio Agent quick start](/docs/data-studio-agent/quick-start) to register the MCP package with your coding assistant. Start with a request to list accessible connections and describe the schema of a development database.

## When the client cannot see a connection

- Check that DocKit is running and its session is eligible. Closing the main window keeps DocKit and the bridge running in the tray. Choosing **Quit** stops them.
- Check **MCP Bridge** status for the actual listening port. Leave **Port** empty for automatic selection. Restart the bridge after changing the port.
- If the bridge runs but a connection is missing, check its [effective AI permissions](/docs/dockit/ai-permissions). The client’s connection list includes only connections that allow at least one AI action. If a tool is denied, review the action-level permission and database account privileges.

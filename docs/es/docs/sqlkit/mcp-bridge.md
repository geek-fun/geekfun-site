---
title: Conectar un agente de código a SqlKit mediante MCP
description: Inicia el puente MCP de SqlKit y registra Data Studio Agent en Codex, Claude Code o Cursor.
---

# Conectar un agente de código a SqlKit mediante MCP

Data Studio Agent es el servidor MCP que tu herramienta de código ejecuta en local. Envía las solicitudes SQL al puente de SqlKit para usar las conexiones guardadas. El puente requiere Ultimate.

[Agentic Data Studio](/es/docs/sqlkit/agentic-datastudio)

## Preparar SqlKit {#prepare-sqlkit}

Abre SqlKit, inicia sesión con Ultimate y guarda una conexión probada. En **Configuración → Puente MCP**, comprueba que el puente esté en ejecución. Reinícialo si hace falta y deja SqlKit abierto mientras uses el cliente.

En **Permisos de IA predeterminados**, selecciona **Lectura** y verifica que la conexión también permita leer. Instala Node.js 18 o posterior y npm en el equipo que ejecuta el cliente y comprueba `npx --version`.

[Conectar una base de datos](/es/docs/sqlkit/connect-to-database) · [Permisos de IA](/es/docs/sqlkit/ai-permissions)

## Registrar Data Studio Agent {#register}

Selecciona la configuración de tu cliente. Para Cursor, añade el JSON a `.cursor/mcp.json` del proyecto o a `~/.cursor/mcp.json` del usuario. Si ya existe `mcpServers`, añade la entrada al objeto existente.

::: code-group

<!--@include: @/.vitepress/includes/data-studio-mcp.md#codex-->

<!--@include: @/.vitepress/includes/data-studio-mcp.md#claude-->

<!--@include: @/.vitepress/includes/data-studio-mcp.md#cursor-->

:::

[Inicio rápido de Data Studio Agent (en inglés)](/docs/data-studio-agent/quick-start)

## Verificar la conexión {#verify}

Comprueba el registro con `codex mcp list` en Codex, `/mcp` en Claude Code o los ajustes de MCP en Cursor. Pide al agente que muestre las conexiones de SqlKit disponibles y enumere las tablas de una conexión de desarrollo sin modificar datos.

<DocsFigure src="/blog/codex-data-studio/codex-data-studio-architecture-branded.png" alt="La herramienta de código llama a Data Studio Agent y al puente MCP de SqlKit" caption="El servidor MCP local pasa las solicitudes SQL al puente de SqlKit." :width="3600" :height="2160" />

## Resolver problemas del puente {#troubleshoot}

Cuando el cliente no logra iniciar el servidor, comprueba que encuentra `npx` y puede descargar el paquete. Si el servidor no detecta SqlKit, abre la aplicación en el mismo equipo y verifica que el puente esté activo. Para una conexión que no aparece en la lista, revisa sus permisos de IA.

---
title: Configurar los permisos de IA de SqlKit
description: Configura los permisos predeterminados y por conexión para Data Studio y MCP, y revisa las acciones bloqueadas.
---

# Configurar los permisos de IA de SqlKit

SqlKit aplica la política de la conexión a las solicitudes del asistente interno y de clientes MCP. Cambiar los permisos requiere Ultimate.

## Configurar los permisos predeterminados y por conexión {#connection-permissions}

Abre **Configuración → Puente MCP → Permisos de IA predeterminados**. Selecciona **Lectura** y guarda si solo necesitas el esquema y consultas de lectura.

Edita una conexión guardada y abre **Avanzado → Permisos de IA**. Usa los valores predeterminados o elige **Personalizado** para decidir qué acciones permitir. Una conversación de Data Studio puede aplicar restricciones adicionales.

## Preguntar, Automático y aprobaciones del cliente {#approvals}

**Preguntar** solicita confirmación para operaciones permitidas de riesgo elevado, como escrituras. **Automático** puede ejecutar algunas de ellas directamente. Las acciones destructivas requieren confirmación en ambos modos salvo que exista una regla guardada aplicable. El cliente MCP controla sus avisos, y SqlKit y la base de datos siguen aplicando sus permisos.

## Revisar una operación bloqueada {#blocked-actions}

Usa **Revisar permisos** en el mensaje de Data Studio para identificar la conexión y la acción. Guarda los cambios necesarios y elige **Reintentar solicitud**. Usa **Sin acceso** para excluir una conexión de los flujos de IA.

[Agentic Data Studio](/es/docs/sqlkit/agentic-datastudio) · [Configurar MCP](/es/docs/sqlkit/mcp-bridge)

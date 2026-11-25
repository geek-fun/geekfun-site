---
title: Usar Agentic Data Studio en SqlKit
description: Configura un modelo, añade una conexión a Data Studio y usa el asistente de SqlKit para explorar esquemas o redactar SQL.
---

# Usar Agentic Data Studio en SqlKit

Agentic Data Studio es el espacio de IA integrado en SqlKit. Puedes añadir conexiones guardadas a una conversación. Para preguntar por la consulta activa, abre el asistente de IA desde Consultas. Ambas funciones requieren Ultimate.

[Configurar MCP](/es/docs/sqlkit/mcp-bridge)

## Configurar un proveedor de modelos {#configure-a-provider}

Abre **Configuración → LLMs → Agregar proveedor**. Elige un proveedor en la nube e introduce su clave de API, o configura un servicio local como Ollama o LM Studio. Inicia el servicio local antes de probarlo.

Guarda el proveedor y usa **Probar** y **Sincronizar modelos**. Si el proveedor no devuelve una lista, añade los identificadores de modelo en su configuración.

## Añadir una conexión e iniciar la conversación {#first-conversation}

Guarda y prueba una conexión. En **Data Studio**, abre **Nueva sesión**, añade la conexión como fuente y selecciona un modelo. Para empezar, usa una base de desarrollo, comprueba el permiso de lectura y conserva el modo **Preguntar**.

Por ejemplo, pide que identifique la tabla de pedidos y su columna de fecha y que prepare una consulta de recuento mensual sin ejecutarla. Revisa el SQL en el editor antes de ejecutarlo.

[Conectar una base de datos](/es/docs/sqlkit/connect-to-database) · [Permisos de IA](/es/docs/sqlkit/ai-permissions)

<DocsFigure src="/sqlkit-data-studio-ui.png" alt="Data Studio en SqlKit con una consulta SQL generada" caption="Data Studio usa el esquema de una conexión adjunta para preparar SQL." :width="1440" :height="935" />

## Usar el asistente junto a una consulta {#assistant}

Abre el asistente de IA en la barra superior de **Consultas** para pedir una explicación del SQL activo o de un error. Un proveedor en la nube puede recibir el mensaje y el contexto pertinente del esquema o de los resultados.

## Resolver problemas de configuración {#troubleshoot}

Si no hay modelos, comprueba que el proveedor esté activado y tenga modelos configurados. Si la fuente no aparece, guarda y prueba la conexión. Si una operación se bloquea, revisa los permisos de la conexión y de la conversación.

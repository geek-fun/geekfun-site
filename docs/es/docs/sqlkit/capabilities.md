---
title: Funciones de SqlKit | SQL, AI, MCP
description: Consulta cómo conectar bases de datos, ejecutar SQL, explorar esquemas, transferir datos y usar el asistente de IA o MCP en SqlKit.
---

# Funciones de SqlKit

Usa SqlKit para conectarte a una base de datos, explorar sus tablas, ejecutar SQL y guardar los resultados. Aquí encontrarás dónde empezar cada tarea y qué depende del controlador o del plan.

<div class="docs-section-links">

- [Instalar SqlKit](/es/docs/sqlkit/installation)
- [Bases de datos compatibles](/es/docs/sqlkit/#supported-databases)
- [Comparar planes](/es/pricing)

</div>

## Conectar una base de datos {#connections}

En **Conexiones → Agregar nueva conexión**, selecciona el tipo de base de datos e indica el servidor o el archivo local. Al probar una conexión JDBC, como Oracle, SqlKit comprueba el entorno de Java y el controlador. Con Ultimate puedes usar un perfil SSH guardado o encadenar varios servidores bastión.

[Añadir y probar una conexión](/es/docs/sqlkit/connect-to-database) · [Configurar un túnel SSH (en inglés)](/docs/sqlkit/ssh-tunnel)

<DocsFigure src="/sqlkit-client-ui.png" alt="Panel de SqlKit con varias conexiones guardadas" caption="Desde cada tarjeta se puede abrir la conexión o editar su configuración." :width="3424" :height="2224" />

## Ejecutar SQL e inspeccionar planes {#query}

En **Consultas**, comprueba la conexión y la base de datos antes de abrir una pestaña. Usa sugerencias de tablas y columnas, y ejecuta todo el script, el texto seleccionado o la sentencia bajo el cursor. En bases compatibles, **Explicar** muestra el plan. **EXPLAIN ANALYZE** ejecuta la sentencia para medir los tiempos reales.

[Editor SQL y resultados](/es/docs/sqlkit/query-editor) · [Atajos del editor](/es/docs/sqlkit/keyboard-shortcuts)

<DocsFigure src="/sqlkit-sql-editor-ui.png" alt="Árbol de objetos, editor SQL y cuadrícula de resultados de SqlKit" caption="Los resultados aparecen debajo del editor al ejecutar una consulta." :width="3424" :height="2224" />

## Explorar esquemas y relaciones {#schema}

Abre **Ver estructura** desde el árbol de objetos para revisar columnas, claves e índices. Con Ultimate puedes abrir el diagrama ER desde el menú de la base de datos o del esquema. El diagrama muestra las claves foráneas que devuelve la base de datos. Haz doble clic en una tabla para abrir sus filas.

[Estructuras y tablas (en inglés)](/docs/sqlkit/table-browser)

<DocsFigure src="/sqlkit-er-diagram-ui.png" alt="Diagrama ER de SqlKit con tablas, columnas y claves foráneas" caption="El diagrama permite seguir relaciones y abrir las tablas correspondientes." :width="3424" :height="2224" />

## Consultar, editar y transferir datos {#data}

Abre una tabla con doble clic y usa filtros y ordenación si el controlador los admite. Antes de editar una fila, revisa los valores que la identifican y el permiso de escritura. Guarda resultados en CSV o JSON. Con **Transferencia** de Ultimate puedes importar archivos con un mapeo de columnas o exportar tablas completas.

[Consultar y editar filas (en inglés)](/docs/sqlkit/table-browser) · [Importar y exportar archivos (en inglés)](/docs/sqlkit/import-export)

<DocsFigure src="/sqlkit-data-view-table-ui.png" alt="Cuadrícula de SqlKit con filtros y acciones por fila" caption="La cuadrícula reúne los datos, los filtros y las acciones por fila." :width="3424" :height="2224" />

## Usar la IA dentro de SqlKit {#ai}

Configura un proveedor de modelos o un servicio local en Agentic Data Studio, disponible con Ultimate. Pídele que explique una consulta o prepare SQL a partir del esquema conectado. Por ejemplo, identifica una columna de fecha para un informe mensual y revisa el SQL generado en el editor.

[Configurar Agentic Data Studio](/es/docs/sqlkit/agentic-datastudio)

<DocsFigure src="/sqlkit-data-studio-ui.png" alt="Asistente de SqlKit con contexto del esquema y SQL generado" caption="Puedes revisar el SQL generado antes de ejecutarlo." :width="1440" :height="935" />

## Conectar un agente de código mediante MCP {#mcp}

Con Ultimate, activa **Configuración → Puente MCP** y registra Data Studio Agent en tu herramienta de código. Usa permisos de lectura para consultar el esquema y los datos. Revisa los permisos de cada conexión antes de permitir escrituras. La cuenta de la base de datos sigue determinando qué operaciones son posibles.

[Configurar MCP](/es/docs/sqlkit/mcp-bridge) · [Configurar permisos de IA](/es/docs/sqlkit/ai-permissions)

## Requisitos de la base de datos y del plan {#requirements}

Los planes de ejecución, la edición de filas y los objetos disponibles dependen de la base de datos, el controlador y la cuenta. Cassandra y ScyllaDB usan CQL.

Community incluye conexiones, exploración de objetos, ejecución y guardado de SQL y exportación de resultados a CSV o JSON. Ultimate añade túneles SSH, diagramas ER, transferencia, el asistente de IA y MCP Bridge.

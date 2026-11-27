---
title: "Primeros pasos con SqlKit"
description: "Instala SqlKit, conecta una base de datos SQL y ejecuta una consulta para probar la sesión."
---

# Primeros pasos con SqlKit

SqlKit es un cliente de bases de datos de código abierto para macOS, Windows y Linux. Conéctate a un servidor o abre un archivo local para ver la estructura, editar SQL y consultar los resultados en el mismo espacio de trabajo.

<div class="docs-section-links">

- [Instalar SqlKit](/es/docs/sqlkit/installation)
- [Ver funciones](/es/docs/sqlkit/capabilities)
- [Bases de datos compatibles](#supported-databases)

</div>

<DocsFigure src="/sqlkit-sql-editor-ui.png" alt="Árbol de objetos, editor SQL y resultados de consulta en SqlKit" caption="El espacio de consultas muestra la estructura de la base, el editor y los resultados." :width="3424" :height="2224" eager />

1. [Instala SqlKit](/es/docs/sqlkit/installation).
2. [Añade y prueba una conexión](/es/docs/sqlkit/connect-to-database).
3. [Ejecuta una consulta de solo lectura](/es/docs/sqlkit/query-editor) y revisa el resultado.
4. Consulta los [atajos del editor](/es/docs/sqlkit/keyboard-shortcuts) para ejecutar y guardar SQL.

## Bases de datos compatibles con SqlKit {#supported-databases}

| Método de conexión | Bases de datos |
| --- | --- |
| Controlador TCP integrado | <!--@include: @/.vitepress/includes/sqlkit-databases.md#tcp--> |
| Controlador integrado para archivos locales | <!--@include: @/.vitepress/includes/sqlkit-databases.md#local--> |
| Controlador compatible con MySQL | <!--@include: @/.vitepress/includes/sqlkit-databases.md#mysql--> |
| Controlador compatible con PostgreSQL | <!--@include: @/.vitepress/includes/sqlkit-databases.md#postgresql--> |
| Puente JDBC | <!--@include: @/.vitepress/includes/sqlkit-databases.md#jdbc--> |
| Conexión HTTP | <!--@include: @/.vitepress/includes/sqlkit-databases.md#http--> |

Consulta la [guía de bases de datos y controladores (en inglés)](/docs/sqlkit/supported-databases) para ver los requisitos de conexión.

---
title: "Conectar SqlKit a una base de datos SQL"
description: "Configura la conexión y comprueba el host, el puerto, las credenciales y TLS antes de abrir el editor SQL."
---

# Conectar SqlKit a una base de datos SQL

1. Abre **Conexiones** y pulsa **Agregar nueva conexión**. Elige el motor y ponle un nombre.
2. En **Básico**, escribe el host, el puerto y las credenciales. Si usas SQLite, elige el archivo local. En **Avanzado**, ajusta TLS según las indicaciones de tu proveedor.
3. Pulsa **Probar conexión** y luego **Guardar**. Pulsa **Conectar** en la tarjeta guardada y abre **Consultas**.

## Puerto o archivo

| Base de datos | Configuración habitual |
| --- | --- |
| [MySQL](/es/docs/sqlkit/mysql-gui-client) | Puerto `3306` |
| [PostgreSQL](/es/docs/sqlkit/postgresql-gui-client) | Puerto `5432` y nombre de la base de datos |
| [SQL Server](/es/docs/sqlkit/sql-server-gui-client) | Puerto `1433` en muchas instancias predeterminadas |
| [Oracle](/es/docs/sqlkit/oracle-gui-client) | Puerto `1521` y nombre de servicio o SID para una conexión básica |
| [SQLite](/es/docs/sqlkit/sqlite-gui-client) | Ruta al archivo local |

Usa el puerto que te indique el administrador. Al probar una conexión JDBC, SqlKit intenta descargar los componentes que faltan. Consulta **Configuración → JRE y controladores** si la descarga falla.

## Si la prueba falla

Si la conexión agota el tiempo de espera, comprueba que el host y el puerto sean accesibles. Si fallan las credenciales, comprueba el usuario y sus permisos en la base. Para los errores de TLS, confirma el nombre del servidor y la CA. Cuando consigas conectar, [ejecuta una consulta de solo lectura](/es/docs/sqlkit/query-editor).

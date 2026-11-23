---
title: "Cliente GUI de PostgreSQL para macOS, Windows y Linux | SqlKit"
description: "Conéctate a Postgres con SqlKit, configura TLS y comprueba qué base y esquema están activos."
---

# Cliente GUI de PostgreSQL para macOS, Windows y Linux

En **Conexiones → Agregar nueva conexión**, selecciona **PostgreSQL**. Usa el host, el puerto (normalmente `5432`), el nombre de la base y las credenciales de tu rol. En **Avanzado**, usa **Verificación completa** con la CA correspondiente cuando el proveedor exija comprobar el certificado y el nombre del servidor.

Tras probar y guardar, abre **Consultas**. Expande `public` u otro esquema para ver las tablas. Ejecuta la siguiente consulta para ver el nombre de la base y del esquema activos.

```sql
SELECT current_database() AS active_database, current_schema() AS active_schema;
```

Si ves otra tabla con el mismo nombre, usa el esquema en la consulta, por ejemplo `reporting.orders`. Si no ves tablas, actualiza el árbol y confirma con el administrador que tu rol tiene acceso al esquema y a los objetos. [Guía del editor SQL](/es/docs/sqlkit/query-editor).

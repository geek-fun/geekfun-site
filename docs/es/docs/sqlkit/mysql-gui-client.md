---
title: "Cliente GUI de MySQL para macOS, Windows y Linux | SqlKit"
description: "Conecta SqlKit a MySQL, revisa la base activa en el editor SQL y soluciona errores de acceso."
---

# Cliente GUI de MySQL para macOS, Windows y Linux

SqlKit incluye un controlador para MySQL. Puedes explorar tablas e índices y ejecutar SQL sin instalar otro controlador.

## Conectar a MySQL

Abre **Conexiones → Agregar nueva conexión** y elige **MySQL**. Escribe el host, el usuario, la contraseña y el puerto (por defecto, `3306`). Indica la base que quieras abrir al conectar. Configura TLS en **Avanzado** si lo exige el servidor. Prueba, guarda y abre la conexión.

## Verificar la base activa

En **Consultas**, comprueba el nombre de la base activa y la versión del servidor con esta consulta.

```sql
SELECT DATABASE() AS active_database, VERSION() AS server_version;
```

Si `active_database` es `NULL`, selecciona una base en la barra lateral. Ante un error de acceso, pide al administrador que compruebe el host desde el que MySQL recibe la conexión y los permisos de tu usuario. Para MariaDB, selecciona **MariaDB** en el [formulario de conexión](/es/docs/sqlkit/connect-to-database).

---
title: "Cliente GUI de Microsoft SQL Server para macOS, Windows y Linux | SqlKit"
description: "Conecta SqlKit a SQL Server con un inicio de sesión SQL, el puerto TCP de la instancia y las opciones de cifrado."
---

# Cliente GUI de Microsoft SQL Server para macOS, Windows y Linux

Elige **SQL Server** en **Conexiones → Agregar nueva conexión**. Indica el host, puerto TCP, base de datos y credenciales de SQL Server. Muchas instancias predeterminadas usan `1433`. Para una instancia con nombre, pide el puerto TCP exacto al administrador.

Configura el cifrado en **Avanzado** y prueba la conexión. Guarda la conexión y usa esta consulta T-SQL en **Consultas** para comprobar la sesión.

```sql
SELECT DB_NAME() AS active_database, SUSER_SNAME() AS login_name;
```

Expande `dbo` o el esquema de tu aplicación para ver las tablas. Ante un tiempo de espera, confirma que TCP/IP esté habilitado y que el puerto sea accesible desde tu equipo. Si falla la validación TLS, pide al administrador el nombre del servidor y la CA correctos. [Guía de conexión](/es/docs/sqlkit/connect-to-database).

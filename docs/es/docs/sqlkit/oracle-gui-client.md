---
title: "Cliente GUI de Oracle Database para macOS, Windows y Linux | SqlKit"
description: "Conecta Oracle con un nombre de servicio, SID, alias TNS o cartera en la nube mediante JDBC."
---

# Cliente GUI de Oracle Database para macOS, Windows y Linux

En **Conexiones → Agregar nueva conexión**, selecciona **Oracle**. Elige el método de conexión según la información que te dio el administrador.

- **Conexión básica.** Host, puerto del listener (habitualmente `1521`) y nombre del servicio o SID.
- **TNS.** Carpeta que contiene `tnsnames.ora` y alias de TNS.
- **Cartera en la nube.** Selecciona la carpeta donde extrajiste el wallet e indica el alias de servicio. Introduce la contraseña del wallet si hace falta.

Escribe el usuario y la contraseña de Oracle. Al probar la conexión, SqlKit comprueba Java, el puente JDBC y el controlador. Si falla alguna descarga, revisa **Configuración → JRE y controladores**.

Esta consulta muestra el servicio y el esquema activos. Ejecútala en **Consultas**.

```sql
SELECT SYS_CONTEXT('USERENV', 'SERVICE_NAME') AS service_name,
       SYS_CONTEXT('USERENV', 'CURRENT_SCHEMA') AS current_schema
FROM dual;
```

Si el listener desconoce el servicio, revisa si el formulario espera un SID o un nombre de servicio. Si la lista de alias TNS está vacía, verifica la ubicación de `tnsnames.ora`. [Guía del editor SQL](/es/docs/sqlkit/query-editor).

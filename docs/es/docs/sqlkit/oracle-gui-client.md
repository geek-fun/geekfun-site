---
title: "Cliente GUI de Oracle Database para macOS, Windows y Linux | SqlKit"
description: "Conecta Oracle con un nombre de servicio, SID, alias TNS o cartera en la nube mediante JDBC."
---

# Cliente GUI de Oracle Database para macOS, Windows y Linux

En **Conexiones → Agregar nueva conexión**, selecciona **Oracle**. Usa el método que indique tu administrador:

- **Conexión básica.** Host, puerto del listener (habitualmente `1521`) y nombre del servicio o SID.
- **TNS.** Carpeta que contiene `tnsnames.ora` y alias de TNS.
- **Cartera en la nube.** Carpeta del wallet extraído y alias de servicio. Añade su contraseña si se requiere.

Escribe el usuario y la contraseña de Oracle. La prueba comprueba Java, el puente JDBC y el controlador. Si no se descargan, revisa **Configuración → JRE y controladores**.

Comprueba el servicio y el esquema desde **Consultas**:

```sql
SELECT SYS_CONTEXT('USERENV', 'SERVICE_NAME') AS service_name,
       SYS_CONTEXT('USERENV', 'CURRENT_SCHEMA') AS current_schema
FROM dual;
```

Si el listener desconoce el servicio, revisa si el formulario espera un SID o un nombre de servicio. Si la lista de alias TNS está vacía, verifica la ubicación de `tnsnames.ora`. [Guía del editor SQL](/es/docs/sqlkit/query-editor).

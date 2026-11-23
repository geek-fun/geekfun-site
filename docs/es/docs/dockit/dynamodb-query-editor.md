---
title: "Consultar DynamoDB con PartiQL en DocKit"
description: "Lee elementos de DynamoDB con una clave de partición en el editor visual o con PartiQL."
---

# Consultar DynamoDB con PartiQL en DocKit

[Conectar a la base de datos](./connect-to-server)

Selecciona una tabla o un índice en el editor visual y escribe el valor de la clave de partición. Si hay una clave de ordenación, puedes añadir una condición para delimitar la consulta. Sin la clave de partición, el constructor advierte que hará un recorrido.

Para guardar la consulta como texto, abre el editor PartiQL. Cambia `Orders`, `customerId` y `example-customer` por tu tabla, tu clave de partición y su valor.

```sql
SELECT * FROM "Orders" WHERE "customerId" = 'example-customer';
```

Usa el botón de ejecución o pulsa `⌘ + Enter` en macOS y `Ctrl + Enter` en Windows y Linux.

Usa los controles del panel de resultados para cambiar de página. Una página vacía puede ir seguida de otra con coincidencias si aplicas filtros de atributos.

---
title: "Consultar MongoDB en DocKit"
description: "Ejecuta find para leer documentos de una colección de MongoDB."
---

# Consultar MongoDB en DocKit

[Conectar a la base de datos](./connect-to-server)

Selecciona la base de datos en la barra del editor y sustituye `orders` por una colección que puedas leer.

```javascript
db.orders.find({ status: "open" }).limit(20)
```

Usa el botón de ejecución o pulsa `⌘ + Enter` en macOS y `Ctrl + Enter` en Windows y Linux.

Abre la vista de árbol o JSON en los resultados para examinar objetos y listas anidados. Si falta algún resultado, ajusta el filtro o la proyección antes de exportar.

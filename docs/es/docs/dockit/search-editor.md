---
title: "Ejecutar la primera consulta de búsqueda en DocKit"
description: "Prueba una petición de solo lectura en Elasticsearch, OpenSearch o EasySearch y revisa la respuesta de tu servidor."
---

# Ejecutar la primera consulta de búsqueda en DocKit

[Conecta el servidor](/es/docs/dockit/connect-to-server), elige la conexión y abre su editor. Sustituye `orders` por un índice que puedas leer.

```http
POST /orders/_search
{
  "size": 10,
  "query": { "match_all": {} }
}
```

Para ejecutar la petición, coloca el cursor dentro y pulsa `⌘ + Enter` en macOS o `Ctrl + Enter` en Windows y Linux. También puedes usar el botón de ejecución junto a la petición. El ejemplo devuelve hasta diez resultados.

Empieza cada petición con el método HTTP y la ruta en una línea aparte. Escribe el cuerpo debajo. Comprueba la conexión activa antes de ejecutar otra petición. Puedes guardar peticiones en archivos `.search` y volver a abrirlas más adelante.

Consulta los [atajos del editor](/es/docs/dockit/shortcut) o sigue las guías de [MongoDB](./mongodb-workspace) y [DynamoDB con PartiQL](./dynamodb-query-editor).

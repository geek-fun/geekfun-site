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

Coloca el cursor dentro de la petición. Usa `⌘ + Enter` en macOS, `Ctrl + Enter` en Windows y Linux o el botón de reproducción junto a la petición. El ejemplo devuelve como máximo diez resultados de búsqueda.

Empieza cada petición con el método HTTP y la ruta en una línea aparte. Escribe el cuerpo debajo. Comprueba la conexión activa antes de ejecutar otra petición. Puedes guardar peticiones en archivos `.search` y volver a abrirlas más adelante.

Consulta los [atajos del editor](/es/docs/dockit/shortcut). Para otros motores, consulta [Consultar MongoDB en DocKit](./mongodb-workspace) o [Consultar DynamoDB con PartiQL en DocKit](./dynamodb-query-editor).

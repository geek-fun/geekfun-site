---
layout: product
showBody: true
title: DocKit | GUI de escritorio NoSQL agéntica para MongoDB, Elasticsearch, OpenSearch y DynamoDB
description: 'GUI de escritorio NoSQL de código abierto para MongoDB, Elasticsearch, OpenSearch, DynamoDB y EasySearch. Community gratis; Ultimate añade agente de IA y MCP.'
ogImage: https://www.geekfun.club/og/dockit-en.png
head:
  - - meta
    - name: keywords
      content: cliente gui mongodb, cliente de escritorio mongodb, cliente gui elasticsearch, cliente gui opensearch, cliente gui dynamodb, cliente gui nosql, gui de escritorio nosql, cliente de bases de datos con IA, GUI NoSQL nativa de IA, asistente de IA para DynamoDB, IA para Elasticsearch, IA para OpenSearch, consultas en lenguaje natural, DocKit, cliente GUI NoSQL, GUI DynamoDB, GUI Elasticsearch, GUI OpenSearch, GUI MongoDB, cliente de bases de datos, alternativa a Dynobase, alternativa a Kibana, herramienta de bases de datos de código abierto, editor PartiQL, cliente de bases de datos de escritorio, cliente de bases de datos para Mac, cliente de bases de datos para Windows, cliente de bases de datos para Linux, Agentic Data Studio, EasySearch
  - - link
    - rel: canonical
      href: https://www.geekfun.club/es/products/dockit/
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/products/dockit/
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/products/dockit/
  - - link
    - rel: alternate
      hreflang: es
      href: https://www.geekfun.club/es/products/dockit/
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/products/dockit/
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "DocKit",
        "alternateName": ["Cliente GUI MongoDB", "Cliente GUI Elasticsearch", "Cliente GUI OpenSearch", "Cliente GUI DynamoDB", "Cliente GUI EasySearch", "Cliente GUI NoSQL", "GUI de escritorio NoSQL", "Agentic Data Studio"],
        "description": "Cliente GUI de escritorio de código abierto (Apache 2.0) para MongoDB, Elasticsearch, OpenSearch, DynamoDB y EasySearch, con ejecución local, asistente de IA integrado y Agentic Data Studio para crear y ejecutar consultas en lenguaje natural.",
        "applicationCategory": "DatabaseApplication",
        "operatingSystem": "Windows, macOS, Linux",
        "url": "https://www.geekfun.club/es/products/dockit/",
        "inLanguage": "es",
        "offers": {
          "@type": "Offer",
          "name": "Community",
          "price": "0",
          "priceCurrency": "USD",
          "url": "https://www.geekfun.club/es/pricing"
        },
        "featureList": [
          "Generación de consultas con IA",
          "Agentic Data Studio",
          "Lenguaje natural a SQL/PartiQL/MQL",
          "Integración con OpenAI, Anthropic y DeepSeek",
          "Cliente GUI MongoDB",
          "Cliente GUI Elasticsearch",
          "Cliente GUI OpenSearch",
          "Cliente GUI DynamoDB",
          "Cliente GUI EasySearch",
          "Editor PartiQL",
          "Editor de consultas MongoDB",
          "Constructor visual de consultas",
          "Persistencia del historial de consultas",
          "Soporte para múltiples bases de datos",
          "Importación y exportación de datos",
          "Asistente de importación y exportación",
          "Gestor de tareas en segundo plano",
          "Explorador de archivos locales",
          "Autenticación AWS SSO",
          "Autocompletado de ES|QL",
          "Gestión de clústeres",
          "Editor Monaco",
          "Gestión del ciclo de vida de tablas"
        ],
        "screenshot": "https://www.geekfun.club/dockit-client-ui.png",
        "downloadUrl": "https://www.geekfun.club/es/download#dockit",
        "author": {
          "@type": "Organization",
          "name": "GEEKFUN",
          "url": "https://www.geekfun.club"
        },
        "license": "https://github.com/geek-fun/dockit/blob/main/LICENSE",
        "sameAs": [
          "https://github.com/geek-fun/dockit",
          "https://www.geekfun.club/products/dockit/"
        ]
      }

hero:
  name: DocKit
  headline: "Cliente GUI de bases de datos NoSQL"
  animatedText: "Agentic"
  tagline: "Conecta MongoDB, Elasticsearch, OpenSearch, DynamoDB y EasySearch con la edición Community, gratuita y de código abierto. Ultimate añade Agentic Data Studio y MCP para trabajar con tus datos en lenguaje natural."
  logo: /dockit.png
  screenshot: /dockit-client-ui.png
  actions:
    - text: Iniciar prueba gratis
      link: https://console.geekfun.club/subscribe?intent=trial
      theme: brand
      external: true
    - text: Descargar
      link: /es/download#dockit
      theme: alt

databases:
  title: "Soporte nativo para bases de datos NoSQL"
  items:
    - { name: MongoDB, logo: /db-mongodb.svg, link: /products/dockit/mongodb-gui-client }
    - { name: DynamoDB, logo: /db-dynamodb.svg, link: /products/dockit/dynamodb-gui-client }
    - { name: Elasticsearch, logo: /db-elasticsearch.svg, link: /products/dockit/elasticsearch-gui-client }
    - { name: OpenSearch, logo: /db-opensearch.png, link: /products/dockit/opensearch-gui-client }
    - { name: EasySearch, logo: /db-easysearch.svg }

showcase:
  - title: "Agentic Data Studio"
    body: "Habla con tus bases de datos en lenguaje natural. El agente de IA de datos de DocKit escribe consultas, inspecciona esquemas, crea índices, actualiza documentos y devuelve resultados, con permisos por fuente y una puerta de seguridad para acciones destructivas. Por ejemplo, pide 'busca los pedidos de más de $500 de la semana pasada' para obtener la consulta generada. Funciona con OpenAI, Anthropic y DeepSeek, además de Ollama y LM Studio para usarlo sin conexión."
    image: /dockit-gui-client-demo.gif
    align: left
  - title: "Gestión de datos de múltiples bases de datos"
    body: "Administra MongoDB, DynamoDB, Elasticsearch, OpenSearch y EasySearch desde una sola interfaz. En DynamoDB, ejecuta PartiQL o crea consultas visuales con 12 operadores de filtro, administra índices secundarios globales y configura la recuperación a un momento dado (PITR)."
    image: /dockit-multi-database-manage-demo.gif
    align: right
  - title: "Importación y exportación"
    body: "Importa y exporta datos desde una interfaz interactiva. Elige el origen y el destino, mapea los campos visualmente y selecciona cuáles incluir. Las operaciones se ejecutan en segundo plano con progreso en tiempo real y admiten JSON, CSV y JSONL."
    image: /dockit-import-export-demo.gif
    align: left
  - title: "Privacidad local primero"
    body: "DocKit se ejecuta como aplicación de escritorio, por lo que una recarga de pestaña no borra tu trabajo. Las credenciales, las consultas y la configuración de LLM permanecen en tu equipo sin usar la nube, y el historial de consultas se conserva entre sesiones. Con Ollama y LM Studio funciona por completo sin conexión."
    image: /dockit-query-history.png
    align: right

features:
  - { title: "Agentic Data Studio", body: "Habla con tus bases de datos en lenguaje natural. El agente de IA de datos escribe consultas, inspecciona esquemas, crea índices y actualiza documentos, con permisos por fuente y una puerta de seguridad para acciones destructivas.", icon: "sparkles" }
  - { title: "Editor basado en Monaco", body: "Usa Monaco Editor, el mismo editor de VS Code, con resaltado de sintaxis, autocompletado, formato y atajos de teclado conocidos.", icon: "edit" }
  - { title: "Privacidad local primero", body: "Las credenciales, las consultas y la configuración de LLM se guardan en local, y el historial de consultas se registra automáticamente. Con Ollama y LM Studio funciona por completo sin conexión.", icon: "history" }
  - { title: "Soporte para múltiples bases de datos", body: "Administra MongoDB, DynamoDB, Elasticsearch, OpenSearch y EasySearch desde una sola interfaz y cambia entre bases de datos sin abrir otra herramienta.", icon: "database" }
  - { title: "Importación y exportación", body: "Importa y exporta grandes conjuntos de datos en JSON, CSV y JSONL mediante operaciones por lotes preparadas para millones de registros.", icon: "import" }
  - { title: "Gestión de clústeres", body: "Supervisa el estado de los nodos, gestiona shards, revisa índices y administra alias desde las herramientas visuales de clúster integradas.", icon: "cluster" }
  - { title: "Tareas en segundo plano", body: "La importación, la exportación y las operaciones de larga duración se ejecutan como tareas en segundo plano con progreso en tiempo real y seguimiento del estado. Sigue usando DocKit mientras las tareas se ejecutan.", icon: "layers" }
  - { title: "Explorador de archivos", body: "Explora, crea y organiza archivos de consultas locales (.search, .partiql, .mongo) directamente en la aplicación. Abre los archivos como pestañas del editor con ordenación por nombre, fecha o tamaño.", icon: "search" }
  - { title: "Historial de consultas", body: "Cada consulta se registra automáticamente, con hasta 500 entradas por conexión y soporte para favoritos. Puedes copiar, recargar o volver a ejecutar consultas anteriores.", icon: "history" }

platforms:
  title: "Disponible en todas las plataformas"
  items:
    - { name: macOS, logo: /platform/platform-macos.svg }
    - { name: Windows, logo: /platform/platform-windows.svg }
    - { name: Linux, logo: /platform/platform-linux.svg }

cta:
  title: "Gestión de bases de datos con IA integrada"
  body: "Escribe y depura consultas complejas con el asistente de IA de DocKit y Agentic Data Studio para dedicar menos tiempo a la sintaxis repetitiva."
  actions:
    - { text: "Iniciar prueba gratis", link: "https://console.geekfun.club/subscribe?intent=trial", theme: "brand", external: true }
    - { text: "Descargar", link: "/es/download#dockit", theme: "alt" }
    - { text: "Prueba SqlKit", link: "/es/products/sqlkit/", theme: "alt" }
    - { text: "Documentación", link: "/es/docs/dockit/", theme: "alt" }
---

## Por qué DocKit para equipos con múltiples bases de datos

La mayoría de los equipos no usan una sola base de datos NoSQL. Un equipo que ejecuta Elasticsearch para búsquedas y DynamoDB para cargas clave-valor normalmente necesita dos herramientas separadas: Kibana o Elasticvue para una, y Dynobase o NoSQL Workbench para la otra. DocKit cubre las tres en una sola aplicación de escritorio.

| | DocKit | Kibana | Elasticvue | Dynobase | NoSQL Workbench |
|---|---|---|---|---|---|
| **MongoDB** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Elasticsearch** | ✅ | ✅ | ✅ | ❌ | ❌ |
| **OpenSearch** | ✅ | ❌ | ✅ | ❌ | ❌ |
| **EasySearch** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **DynamoDB** | ✅ | ❌ | ❌ | ✅ | ✅ |
| **Asistente de IA** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Agentic Data Studio** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Nativo de escritorio** | ✅ | ❌ | Parcial | ✅ | ✅ |
| **Código abierto** | ✅ Apache 2.0 | Mixto | ✅ MIT | ❌ | ❌ |
| **Precio** | Community: gratis · Ultimate 9,90 USD/mes | Gratis | Gratis | $12-30/mes | Gratis |

## Cliente GUI de Elasticsearch

DocKit es un cliente GUI de Elasticsearch pensado para ingenieros que trabajan a diario en el editor de consultas. Reemplaza la pestaña Dev Tools de Kibana por un editor basado en Monaco con soporte para JSON5, comentarios en línea, autocompletado de campos a partir del mapping en vivo y generación de consultas con IA. También incluye autocompletado integrado para ES|QL.

Conéctate a cualquier clúster de Elasticsearch (local, autohospedado o en la nube) con Basic Auth o API Key. Explora índices, gestiona mappings y alias, supervisa la salud del clúster y de los shards con métricas detalladas a nivel de shard (docs, store, fielddata, query cache, tasas de indexación, estadísticas de merge, segmentos) e importa/exporta datos en JSON, CSV o JSONL (formato bulk). Hay disponible un catálogo de sintaxis con más de 120 endpoints de la API de Elasticsearch y OpenSearch como referencia. Las consultas se guardan como archivos locales, así que no se pierde nada al cerrar la aplicación.

[Cliente GUI de Elasticsearch: todos los detalles](/products/dockit/elasticsearch-gui-client)

## Cliente GUI de OpenSearch

DocKit es un cliente GUI de OpenSearch de código abierto y una alternativa de escritorio a OpenSearch Dashboards para el trabajo diario con consultas. Arranca en menos de 2 segundos, consume alrededor de 150 MB de RAM y guarda los datos en local, de modo que no hace falta ejecutar una instancia de Dashboards.

El mismo editor Monaco, asistente de IA, gestión de clústeres y funciones de importación/exportación funcionan de forma idéntica en OpenSearch 1.x, 2.x y 3.x, incluidos los clústeres de AWS OpenSearch Service.

[Cliente GUI de OpenSearch: todos los detalles](/products/dockit/opensearch-gui-client)

## Cliente GUI de DynamoDB

DocKit es un cliente GUI de DynamoDB de código abierto que reemplaza la consola de AWS para el trabajo diario con tablas. Incluye un editor PartiQL con autocompletado basado en el esquema, un constructor visual de consultas con 12 operadores de filtro, CRUD de ítems en línea, paginación con tamaños configurables y gestión del ciclo de vida de las tablas (gestión de GSI, consulta de LSI, TTL, streams, PITR, cifrado, métricas de CloudWatch y vaciado de tablas). También genera consultas con IA usando los nombres reales de tus atributos como contexto e importa o exporta datos en JSON y CSV.

Es compatible con DynamoDB Local para desarrollo local, perfiles de AWS, SSO, claves de acceso y autenticación con roles de IAM en cualquier región.

[Cliente GUI de DynamoDB: todos los detalles](/products/dockit/dynamodb-gui-client)

## Cliente GUI de MongoDB

DocKit es un cliente GUI de MongoDB de código abierto con editor de consultas, autocompletado y formato de resultados. Permite explorar documentos con paginación y operaciones CRUD en línea. En la vista Manage puedes revisar índices, estadísticas de almacenamiento y metadatos de cada colección.

Puedes conectarte con autenticación, TLS y configuraciones de replica set. DocKit admite escrituras en lote (bulk write), guarda el historial de consultas con favoritos por conexión e importa o exporta colecciones en JSON, CSV y JSONL.

[Documentación del cliente GUI de MongoDB](/es/docs/dockit/connect-to-server)

## Soporte de EasySearch

DocKit admite EasySearch de forma nativa como tipo de conexión dedicado junto a Elasticsearch y OpenSearch, con configuración e icono propios para gestionar todos tus motores de búsqueda desde una sola interfaz.

## Agentic Data Studio

Agentic Data Studio de DocKit te permite trabajar con tus bases de datos en lenguaje natural. Describe lo que necesitas y el agente escribe consultas, inspecciona esquemas, actualiza documentos, elimina registros, crea índices y devuelve resultados. Cada operación pasa por herramientas validadas con permisos por fuente, confirmación explícita antes de acciones destructivas y protección de credenciales para no exponer secretos de conexión al LLM. Funciona con OpenAI, Anthropic y DeepSeek, además de Ollama y LM Studio para usarlo sin conexión.

[Guía de Agentic Data Studio (en inglés)](/docs/dockit/agentic-datastudio)

## Preguntas frecuentes

**¿Funciona DocKit sin conexión?**
Sí. Todas las conexiones, consultas y el historial se guardan localmente. El asistente de IA y Agentic Data Studio solo necesitan conexión a internet cuando envías un prompt.

**¿DocKit es compatible con MongoDB?**
Sí. DocKit es totalmente compatible con MongoDB: gestión de conexiones, editor de consultas con autocompletado, explorador de documentos con CRUD en línea, vista Manage para índices y metadatos de colecciones, escrituras en lote, historial de consultas con estrellas/marcadores e importación/exportación. EasySearch también está soportado como tipo de conexión dedicado.

**¿Hay una versión web?**
No. DocKit es una aplicación de escritorio para macOS, Windows y Linux, diseñada para guardar todo en local sin depender de la nube ni exigir inicio de sesión.

**¿Qué pasa con la compatibilidad entre Elasticsearch y OpenSearch?**
DocKit detecta automáticamente a qué motor estás conectado y ajusta las llamadas de la API en consecuencia. El mismo formulario de conexión sirve para ambos.

**¿DocKit es de código abierto?**
Sí, bajo licencia Apache 2.0. El código fuente completo está en [github.com/geek-fun/dockit](https://github.com/geek-fun/dockit).

**¿Hay un plan de pago?**
Sí. La edición Community sigue siendo gratuita y de código abierto, mientras que la suscripción de pago Ultimate (9,90 USD/mes o 99,00 USD/año, con prueba gratuita de 7 días) incluye funciones adicionales como el agente de IA, MCP y la gestión de clústeres.

**¿También soportan bases de datos SQL?**
DocKit está diseñado específicamente para bases de datos NoSQL. Si necesitas soporte para PostgreSQL, MySQL, SQL Server o SQLite, prueba [SqlKit](/es/products/sqlkit/), nuestro cliente SQL de escritorio de código abierto creado por el mismo equipo.

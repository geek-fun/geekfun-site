---
layout: product
title: DocKit — GUI de escritorio NoSQL agéntica para MongoDB, Elasticsearch, OpenSearch y DynamoDB
description: 'DocKit es una GUI de escritorio NoSQL agéntica de código abierto para MongoDB, Elasticsearch, OpenSearch, DynamoDB y EasySearch. Su agente de IA de datos escribe consultas, inspecciona esquemas y gestiona datos mediante lenguaje natural — con privacidad primero y de forma local. La edición Community es gratuita y de código abierto; el agente de IA forma parte de la suscripción de pago Ultimate.'
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
        "description": "Cliente GUI de escritorio de código abierto para MongoDB, Elasticsearch, OpenSearch, DynamoDB y EasySearch. Genera consultas de bases de datos a partir de lenguaje natural con un asistente de IA integrado. Agentic Data Studio para interactuar con bases de datos en lenguaje natural. Rápido, local primero, Apache 2.0.",
        "applicationCategory": "DatabaseApplication",
        "operatingSystem": "Windows, macOS, Linux",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD"
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
        "downloadUrl": "https://www.geekfun.club/download",
        "softwareVersion": "1.4.0",
        "author": {
          "@type": "Organization",
          "name": "GEEKFUN",
          "url": "https://www.geekfun.club"
        },
        "license": "https://github.com/geek-fun/dockit/blob/main/LICENSE",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "ratingCount": "1096",
          "bestRating": "5",
          "worstRating": "1"
        },
        "sameAs": [
          "https://github.com/geek-fun/dockit",
          "https://www.geekfun.club/products/dockit/"
        ]
      }

hero:
  name: DocKit
  headline: "Cliente GUI de bases de datos NoSQL"
  animatedText: "Agentic"
  tagline: "Agente de IA de datos de código abierto que gestiona tus bases de datos. Conecta MongoDB, Elasticsearch, OpenSearch, DynamoDB y EasySearch — y describe lo que necesitas en lenguaje natural. El agente escribe consultas, inspecciona esquemas, actualiza documentos y devuelve resultados. Privacidad primero, local, Apache 2.0."
  logo: /dockit.png
  screenshot: /dockit-client-ui.png
  actions:
    - text: Iniciar prueba gratis
      link: https://console.geekfun.club/subscribe?intent=trial
      theme: brand
      external: true
    - text: Descargar
      link: /es/download
      theme: alt

databases:
  title: "Soporte nativo para NoSQL moderno"
  items:
    - { name: MongoDB, logo: /db-mongodb.svg, link: /products/dockit/mongodb-gui-client }
    - { name: DynamoDB, logo: /db-dynamodb.svg, link: /products/dockit/dynamodb-gui-client }
    - { name: Elasticsearch, logo: /db-elasticsearch.svg, link: /products/dockit/elasticsearch-gui-client }
    - { name: OpenSearch, logo: /db-opensearch.png, link: /products/dockit/opensearch-gui-client }
    - { name: EasySearch, logo: /db-easysearch.svg }

showcase:
  - title: "Agentic Data Studio"
    body: "Habla con tus bases de datos en lenguaje natural. El agente de IA de datos de DocKit escribe consultas, inspecciona esquemas, crea índices, actualiza documentos y devuelve resultados — con permisos por fuente y una puerta de seguridad para acciones destructivas. Pide 'busca los pedidos de más de $500 de la semana pasada' y obtén consultas optimizadas al instante. Compatible con OpenAI, Anthropic y DeepSeek, además de Ollama y LM Studio para un uso totalmente sin conexión."
    image: /dockit-gui-client-demo.gif
    align: left
  - title: "Gestión de datos de múltiples bases de datos"
    body: "Administra MongoDB, DynamoDB, Elasticsearch, OpenSearch y EasySearch desde una sola interfaz. Supervisa el estado del clúster, gestiona índices, sigue las métricas y mueve datos entre bases de datos con la importación, exportación y copia de seguridad integradas."
    image: /dockit-multi-database-manage-demo.gif
    align: right
  - title: "Importación y copia de seguridad"
    body: "Exporta y restaura tus datos a través de una interfaz interactiva. Elige el origen y el destino, mapea los campos visualmente, selecciona qué campos incluir y deja que DocKit se encargue del resto — todo se ejecuta como tareas en segundo plano con progreso en tiempo real. Compatible con JSON, CSV y JSONL."
    image: /dockit-import-export-demo.gif
    align: left
  - title: "Privacidad local primero"
    body: "¿Cansado de las herramientas basadas en el navegador que pierden tu trabajo cuando una pestaña se actualiza? DocKit funciona como aplicación de escritorio — las credenciales, las consultas y la configuración de LLM permanecen en tu equipo, sin dependencia de la nube. El historial de consultas se conserva entre sesiones. Totalmente sin conexión con Ollama y LM Studio."
    image: /dockit-query-history.png
    align: right

features:
  - { title: "Agentic Data Studio", body: "Habla con tus bases de datos en lenguaje natural. El agente de IA de datos escribe consultas, inspecciona esquemas, crea índices y actualiza documentos — con permisos por fuente y una puerta de seguridad para acciones destructivas.", icon: "sparkles" }
  - { title: "Editor de nivel de escritorio", body: "Monaco Editor aporta la potencia de VS Code a tus consultas — resaltado de sintaxis, autocompletado, formato y los atajos de teclado que ya conoces.", icon: "edit" }
  - { title: "Privacidad local primero", body: "Credenciales, consultas y configuración de LLM guardadas localmente. El historial de consultas se registra automáticamente. Totalmente sin conexión con Ollama y LM Studio.", icon: "history" }
  - { title: "Soporte para múltiples bases de datos", body: "Administra MongoDB, DynamoDB, Elasticsearch, OpenSearch y EasySearch desde una única interfaz unificada. Cambia de base de datos al instante.", icon: "database" }
  - { title: "Importación y exportación", body: "Mueve grandes conjuntos de datos con soporte de JSON, CSV y JSONL. Las operaciones por lotes manejan millones de registros de forma fiable.", icon: "import" }
  - { title: "Gestión de clústeres", body: "Supervisa la salud de los nodos, gestiona shards, sigue los índices y controla los alias — todo con las herramientas visuales de clúster integradas.", icon: "cluster" }
  - { title: "Tareas en segundo plano", body: "La importación, la exportación y las operaciones de larga duración se ejecutan como tareas en segundo plano con progreso en tiempo real y seguimiento del estado. Sigue usando DocKit mientras las tareas se ejecutan.", icon: "layers" }
  - { title: "Explorador de archivos", body: "Explora, crea y organiza archivos de consultas locales (.search, .partiql, .mongo) directamente en la aplicación. Abre los archivos como pestañas del editor con ordenación por nombre, fecha o tamaño.", icon: "search" }
  - { title: "Historial de consultas", body: "Cada consulta se registra automáticamente. 500 entradas por conexión con estrellas/marcadores. Copia, recarga o vuelve a ejecutar consultas anteriores.", icon: "history" }

platforms:
  title: "Disponible en todas las plataformas"
  items:
    - { name: macOS, logo: /platform/platform-macos.svg }
    - { name: Windows, logo: /platform/platform-windows.svg }
    - { name: Linux, logo: /platform/platform-linux.svg }

cta:
  title: "Gestión de bases de datos, con IA nativa"
  body: "Deja de lidiar con sintaxis de consultas complejas. Deja que el asistente de IA de DocKit y Agentic Data Studio se encarguen del trabajo repetitivo mientras tú te concentras en los datos."
  actions:
    - { text: "Iniciar prueba gratis", link: "https://console.geekfun.club/subscribe?intent=trial", theme: "brand", external: true }
    - { text: "Descargar", link: "/es/download", theme: "alt" }
    - { text: "Prueba SqlKit →", link: "/products/sqlkit/", theme: "alt" }
---

## Por qué DocKit para equipos con múltiples bases de datos

La mayoría de los equipos no usan una sola base de datos NoSQL. Un equipo que ejecuta Elasticsearch para búsquedas y DynamoDB para cargas clave-valor normalmente necesita dos herramientas separadas — Kibana/Elasticvue para una y Dynobase/NoSQL Workbench para la otra. DocKit cubre las tres en una sola aplicación de escritorio.

| | DocKit | Kibana | Elasticvue | Dynobase | NoSQL Workbench |
|---|---|---|---|---|---|---|
| **MongoDB** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Elasticsearch** | ✅ | ✅ | ✅ | ❌ | ❌ |
| **OpenSearch** | ✅ | ❌ | ✅ | ❌ | ❌ |
| **EasySearch** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **DynamoDB** | ✅ | ❌ | ❌ | ✅ | ✅ |
| **Asistente de IA** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Agentic Data Studio** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Nativo de escritorio** | ✅ | ❌ | Parcial | ✅ | ✅ |
| **Código abierto** | ✅ Apache 2.0 | Mixto | ✅ MIT | ❌ | ❌ |
| **Precio** | Community: gratis · Ultimate $9.9/mes | Gratis | Gratis | $12–30/mes | Gratis |

## Cliente GUI de Elasticsearch

DocKit es un **cliente GUI de Elasticsearch** completo, diseñado para ingenieros que pasan tiempo real en el editor de consultas. Reemplaza la pestaña Dev Tools de Kibana con un editor basado en Monaco que admite sintaxis JSON5, comentarios en línea, autocompletado de campos a partir de tu mapping en vivo y generación de consultas asistida por IA. El autocompletado de ES|QL está integrado para el lenguaje de consultas de próxima generación de Elasticsearch.

Conéctate a cualquier clúster de Elasticsearch — local, autohospedado o en la nube — con Basic Auth o API Key. Explora índices, gestiona mappings y alias, supervisa la salud del clúster y de los shards con métricas detalladas a nivel de shard (docs, store, fielddata, query cache, tasas de indexación, estadísticas de merge, segmentos) e importa/exporta datos en JSON, CSV o JSONL (formato bulk). Hay disponible un catálogo de sintaxis con más de 120 endpoints de la API de Elasticsearch y OpenSearch como referencia. Las consultas se guardan como archivos locales, así que no se pierde nada al cerrar la aplicación.

→ [Cliente GUI de Elasticsearch: todos los detalles](/products/dockit/elasticsearch-gui-client)

## Cliente GUI de OpenSearch

DocKit es un **cliente GUI de OpenSearch** de código abierto y una alternativa de escritorio a OpenSearch Dashboards para el trabajo diario con consultas. Arranca en menos de 2 segundos, usa unos 150 MB de RAM y guarda todo localmente — sin necesidad de una instancia de Dashboards.

El mismo editor Monaco, asistente de IA, gestión de clústeres y funciones de importación/exportación funcionan de forma idéntica en OpenSearch 1.x, 2.x y 3.x, incluidos los clústeres de AWS OpenSearch Service.

→ [Cliente GUI de OpenSearch: todos los detalles](/products/dockit/opensearch-gui-client)

## Cliente GUI de DynamoDB

DocKit es un **cliente GUI de DynamoDB** de código abierto que reemplaza la consola de AWS para el trabajo diario con tablas. Incluye un editor PartiQL con autocompletado consciente del esquema, un constructor visual de consultas con más de 13 operadores de filtro, CRUD de ítems en línea, paginación con tamaños de página configurables y gestión completa del ciclo de vida de las tablas — creación de GSI/LSI, TTL, streams, PITR, cifrado, métricas de CloudWatch y vaciado de tablas. Generación de consultas con IA que inyecta los nombres reales de tus atributos como contexto, e importación/exportación para JSON y CSV.

Es compatible con DynamoDB Local para desarrollo local, perfiles de AWS, SSO, claves de acceso y autenticación con roles de IAM en cualquier región.

→ [Cliente GUI de DynamoDB: todos los detalles](/products/dockit/dynamodb-gui-client)

## Cliente GUI de MongoDB

DocKit es un **cliente GUI de MongoDB** de código abierto con un editor de consultas completo que ofrece autocompletado y formato de resultados. Explora documentos con paginación y operaciones CRUD en línea. La vista Manage permite examinar la infraestructura a nivel de colección — índices, estadísticas de almacenamiento y metadatos de un vistazo.

Conéctate con autenticación, TLS y configuraciones de replica set. Soporte de escrituras en lote (bulk write) para operaciones por lotes eficientes. Historial de consultas con favoritos de estrella/marcador, guardado por conexión. Importa y exporta colecciones en JSON, CSV y JSONL.

→ [Documentación del cliente GUI de MongoDB](/docs/dockit/connect-to-server)

## Soporte de EasySearch

DocKit admite **EasySearch** de forma nativa como un tipo de conexión dedicado junto a Elasticsearch y OpenSearch. EasySearch se separa de OpenSearch con configuración e iconografía independientes, lo que facilita gestionar todos tus motores de búsqueda desde una sola interfaz.

## Agentic Data Studio

**Agentic Data Studio** de DocKit te permite interactuar con tus bases de datos mediante lenguaje natural. Describe lo que necesitas — el agente escribe consultas, inspecciona esquemas, actualiza documentos, elimina registros, crea índices y devuelve resultados. Cada operación pasa por herramientas validadas con seguridad integrada: permisos detallados por fuente, una puerta de seguridad que exige confirmación explícita antes de acciones destructivas y una arquitectura que protege las credenciales y nunca expone los secretos de conexión al LLM. Compatible con OpenAI, Anthropic y DeepSeek, además de Ollama y LM Studio para un uso totalmente sin conexión.

→ [Guía de Agentic Data Studio](/docs/dockit/agentic-datastudio)

## Preguntas frecuentes

**¿Funciona DocKit sin conexión?**
Sí. Todas las conexiones, consultas y el historial se guardan localmente. El asistente de IA y Agentic Data Studio solo necesitan conexión a internet cuando envías un prompt.

**¿DocKit es compatible con MongoDB?**
Sí. DocKit es totalmente compatible con MongoDB: gestión de conexiones, editor de consultas con autocompletado, explorador de documentos con CRUD en línea, vista Manage para índices y metadatos de colecciones, escrituras en lote, historial de consultas con estrellas/marcadores e importación/exportación. EasySearch también está soportado como tipo de conexión dedicado.

**¿Hay una versión web?**
No. DocKit es una aplicación de escritorio para macOS, Windows y Linux. Es una decisión intencional — almacenamiento local primero, sin dependencia de la nube y sin necesidad de iniciar sesión.

**¿Qué pasa con la compatibilidad entre Elasticsearch y OpenSearch?**
DocKit detecta automáticamente a qué motor estás conectado y ajusta las llamadas de la API en consecuencia. El mismo formulario de conexión sirve para ambos.

**¿DocKit es de código abierto?**
Sí — licencia Apache 2.0. El código fuente completo está en [github.com/geek-fun/dockit](https://github.com/geek-fun/dockit).

**¿Hay un plan de pago?**
Sí. La edición Community sigue siendo gratuita y de código abierto, mientras que la suscripción de pago Ultimate ($9.9/mes o $99/año, con prueba gratuita de 7 días) desbloquea funciones avanzadas como el agente de IA, MCP y la gestión de clústeres.

**¿También soportan bases de datos SQL?**
DocKit está diseñado específicamente para bases de datos NoSQL. Si necesitas soporte para PostgreSQL, MySQL, SQL Server o SQLite, prueba [**SqlKit**](/products/sqlkit/) — nuestro cliente SQL de escritorio de código abierto creado por el mismo equipo.

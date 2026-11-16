---
layout: product
title: DocKit — GUI desktop Agentic NoSQL para MongoDB, Elasticsearch, OpenSearch e DynamoDB
description: O DocKit é uma GUI desktop NoSQL agentic open source para MongoDB, Elasticsearch, OpenSearch, DynamoDB e EasySearch. Seu agente de IA de dados escreve consultas, inspeciona esquemas e gerencia dados por linguagem natural — com prioridade à privacidade e execução local. A edição Community é gratuita e open source; o agente de IA faz parte da assinatura paga Ultimate.
ogImage: https://www.geekfun.club/og/dockit-en.png
head:
  - - meta
    - name: keywords
      content: cliente GUI mongodb, cliente desktop mongodb, cliente gui elasticsearch, cliente gui opensearch, cliente gui dynamodb, cliente gui nosql, gui desktop nosql, cliente de banco de dados com IA, GUI NoSQL com IA, assistente de IA para DynamoDB, Elasticsearch com IA, OpenSearch com IA, consultas em linguagem natural, DocKit, cliente GUI NoSQL, GUI DynamoDB, GUI Elasticsearch, GUI OpenSearch, GUI MongoDB, cliente de banco de dados, alternativa ao Dynobase, alternativa ao Kibana, ferramenta de banco de dados open source, editor PartiQL, cliente de banco de dados desktop, cliente de banco de dados para Mac, cliente de banco de dados para Windows, cliente de banco de dados para Linux, Agentic Data Studio, EasySearch
  - - link
    - rel: canonical
      href: https://www.geekfun.club/pt-BR/products/dockit/
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
      hreflang: pt-BR
      href: https://www.geekfun.club/pt-BR/products/dockit/
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
        "alternateName": ["cliente GUI MongoDB", "cliente GUI Elasticsearch", "cliente GUI OpenSearch", "cliente GUI DynamoDB", "cliente GUI EasySearch", "cliente GUI NoSQL", "GUI desktop NoSQL", "Agentic Data Studio"],
        "description": "Cliente GUI desktop open source para MongoDB, Elasticsearch, OpenSearch, DynamoDB e EasySearch. Gere consultas de banco de dados a partir de linguagem natural com um assistente de IA integrado. Agentic Data Studio para interação com bancos de dados em linguagem natural. Rápido, local-first, Apache 2.0.",
        "applicationCategory": "DatabaseApplication",
        "operatingSystem": "Windows, macOS, Linux",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD"
        },
        "featureList": [
          "Geração de consultas com IA",
          "Agentic Data Studio",
          "Linguagem natural para SQL/PartiQL/MQL",
          "Integração com OpenAI, Anthropic e DeepSeek",
          "Cliente GUI MongoDB",
          "Cliente GUI Elasticsearch",
          "Cliente GUI OpenSearch",
          "Cliente GUI DynamoDB",
          "Cliente GUI EasySearch",
          "Editor PartiQL",
          "Editor de consultas MongoDB",
          "Construtor visual de consultas",
          "Persistência do histórico de consultas",
          "Suporte a múltiplos bancos de dados",
          "Importação e exportação de dados",
          "Assistente de importação e exportação",
          "Gerenciador de tarefas em segundo plano",
          "Navegador de arquivos locais",
          "Autenticação AWS SSO",
          "Autocompletar ES|QL",
          "Gerenciamento de clusters",
          "Editor Monaco",
          "Gerenciamento do ciclo de vida de tabelas"
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
  headline: "Cliente GUI para bancos de dados NoSQL"
  animatedText: "Agentic"
  tagline: "Agente de IA de dados open source que gerencia seus bancos de dados. Conecte MongoDB, Elasticsearch, OpenSearch, DynamoDB e EasySearch — depois descreva o que precisa em linguagem natural. O agente escreve consultas, inspeciona esquemas, atualiza documentos e retorna resultados. Privacidade em primeiro lugar, execução local, Apache 2.0."
  logo: /dockit.png
  screenshot: /dockit-client-ui.png
  actions:
    - text: Iniciar teste grátis
      link: https://console.geekfun.club/subscribe?intent=trial
      theme: brand
      external: true
    - text: Baixar
      link: /pt-BR/download
      theme: alt

databases:
  title: "Suporte nativo a NoSQL moderno"
  items:
    - { name: MongoDB, logo: /db-mongodb.svg, link: /products/dockit/mongodb-gui-client }
    - { name: DynamoDB, logo: /db-dynamodb.svg, link: /products/dockit/dynamodb-gui-client }
    - { name: Elasticsearch, logo: /db-elasticsearch.svg, link: /products/dockit/elasticsearch-gui-client }
    - { name: OpenSearch, logo: /db-opensearch.png, link: /products/dockit/opensearch-gui-client }
    - { name: EasySearch, logo: /db-easysearch.svg }

showcase:
  - title: "Agentic Data Studio"
    body: "Converse com seus bancos de dados em linguagem natural. O agente de IA de dados do DocKit escreve consultas, inspeciona esquemas, cria índices, atualiza documentos e retorna resultados — com permissões por fonte e um portão de segurança para ações destrutivas. Pergunte 'encontre pedidos acima de $500 da última semana' e receba consultas otimizadas na hora. Suporta OpenAI, Anthropic e DeepSeek, além de Ollama e LM Studio para uso totalmente offline."
    image: /dockit-gui-client-demo.gif
    align: left
  - title: "Gerenciamento de dados em múltiplos bancos de dados"
    body: "Gerencie MongoDB, DynamoDB, Elasticsearch, OpenSearch e EasySearch a partir de uma única interface. Monitore a saúde do cluster, gerencie índices, acompanhe métricas e mova dados entre bancos de dados com importação, exportação e backup integrados."
    image: /dockit-multi-database-manage-demo.gif
    align: right
  - title: "Importação e Backup"
    body: "Exporte e restaure seus dados por uma interface interativa. Escolha a origem e o destino, mapeie os campos visualmente, selecione quais campos incluir e deixe o DocKit cuidar do resto — tudo executado como tarefas em segundo plano com progresso em tempo real. Suporta JSON, CSV e JSONL."
    image: /dockit-import-export-demo.gif
    align: left
  - title: "Privacidade local-first"
    body: "Cansado de ferramentas no navegador que perdem seu trabalho quando a aba é atualizada? O DocKit roda como um aplicativo desktop — credenciais, consultas e configurações de LLM ficam na sua máquina, sem dependência de nuvem. O histórico de consultas persiste entre sessões. Totalmente offline com Ollama e LM Studio."
    image: /dockit-query-history.png
    align: right

features:
  - { title: "Agentic Data Studio", body: "Converse com seus bancos de dados em linguagem natural. O agente de IA de dados escreve consultas, inspeciona esquemas, cria índices e atualiza documentos — com permissões por fonte e um portão de segurança para ações destrutivas.", icon: "sparkles" }
  - { title: "Editor de nível desktop", body: "O Monaco Editor traz a potência do VS Code para suas consultas — realce de sintaxe, autocompletar, formatação e os atalhos de teclado que você já conhece.", icon: "edit" }
  - { title: "Privacidade local-first", body: "Credenciais, consultas e configurações de LLM salvas localmente. Histórico de consultas rastreado automaticamente. Totalmente offline com Ollama e LM Studio.", icon: "history" }
  - { title: "Suporte a múltiplos bancos de dados", body: "Gerencie MongoDB, DynamoDB, Elasticsearch, OpenSearch e EasySearch em uma única interface unificada. Alterne entre bancos de dados instantaneamente.", icon: "database" }
  - { title: "Importação e exportação", body: "Movimente grandes conjuntos de dados com suporte a JSON, CSV e JSONL. Operações em lote lidam com milhões de registros com confiabilidade.", icon: "import" }
  - { title: "Gerenciamento de clusters", body: "Monitore a saúde dos nós, gerencie shards, acompanhe índices e controle aliases — tudo com as ferramentas visuais de cluster integradas.", icon: "cluster" }
  - { title: "Tarefas em segundo plano", body: "Importação, exportação e operações longas rodam como tarefas em segundo plano com progresso em tempo real e acompanhamento de status. Continue usando o DocKit enquanto as tarefas executam.", icon: "layers" }
  - { title: "Navegador de arquivos", body: "Navegue, crie e organize arquivos de consulta locais (.search, .partiql, .mongo) diretamente no aplicativo. Abra os arquivos como abas do editor com ordenação por nome, data ou tamanho.", icon: "search" }
  - { title: "Histórico de consultas", body: "Cada consulta registrada automaticamente. 500 entradas por conexão com estrelas/marcadores. Copie, recarregue ou reexecute consultas passadas.", icon: "history" }

platforms:
  title: "Disponível em todas as plataformas"
  items:
    - { name: macOS, logo: /platform/platform-macos.svg }
    - { name: Windows, logo: /platform/platform-windows.svg }
    - { name: Linux, logo: /platform/platform-linux.svg }

cta:
  title: "Gerenciamento de bancos de dados, com IA nativa"
  body: "Pare de brigar com sintaxes de consulta complexas. Deixe o assistente de IA do DocKit e o Agentic Data Studio cuidarem do trabalho repetitivo enquanto você foca nos dados."
  actions:
    - { text: "Iniciar teste grátis", link: "https://console.geekfun.club/subscribe?intent=trial", theme: "brand", external: true }
    - { text: "Baixar", link: "/pt-BR/download", theme: "alt" }
    - { text: "Experimente o SqlKit →", link: "/products/sqlkit/", theme: "alt" }
---

## Por que o DocKit para equipes com múltiplos bancos de dados

A maioria das equipes não usa apenas um banco de dados NoSQL. Uma equipe que roda Elasticsearch para busca e DynamoDB para cargas chave-valor normalmente precisa de duas ferramentas separadas — Kibana/Elasticvue para uma, Dynobase/NoSQL Workbench para a outra. O DocKit cobre as três em um único aplicativo desktop.

| | DocKit | Kibana | Elasticvue | Dynobase | NoSQL Workbench |
|---|---|---|---|---|---|
| **MongoDB** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Elasticsearch** | ✅ | ✅ | ✅ | ❌ | ❌ |
| **OpenSearch** | ✅ | ❌ | ✅ | ❌ | ❌ |
| **EasySearch** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **DynamoDB** | ✅ | ❌ | ❌ | ✅ | ✅ |
| **Assistente de IA** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Agentic Data Studio** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Desktop nativo** | ✅ | ❌ | Parcial | ✅ | ✅ |
| **Código aberto** | ✅ Apache 2.0 | Misto | ✅ MIT | ❌ | ❌ |
| **Preço** | Community: grátis · Ultimate $9.9/mês | Grátis | Grátis | $12–30/mês | Grátis |

## Cliente GUI Elasticsearch

O DocKit é um **cliente GUI Elasticsearch** completo, feito para engenheiros que passam tempo de verdade no editor de consultas. Ele substitui a aba Dev Tools do Kibana por um editor baseado em Monaco com suporte a sintaxe JSON5, comentários em linha, autocompletar de campos a partir do mapping em tempo real e geração de consultas assistida por IA. O autocompletar ES|QL vem integrado para a linguagem de consultas de próxima geração do Elasticsearch.

Conecte-se a qualquer cluster Elasticsearch — local, auto-hospedado ou na nuvem — com Basic Auth ou API Key. Navegue por índices, gerencie mappings e aliases, monitore a saúde do cluster e dos shards com métricas detalhadas por shard (documentos, armazenamento, fielddata, cache de consultas, taxas de indexação, estatísticas de merge, segmentos) e importe/exporte dados em JSON, CSV ou JSONL (formato bulk). Um catálogo de sintaxe com mais de 120 endpoints de API do Elasticsearch e do OpenSearch está disponível para consulta. As consultas são persistidas como arquivos locais, então nada se perde quando você fecha o aplicativo.

→ [Detalhes completos do cliente GUI Elasticsearch](/products/dockit/elasticsearch-gui-client)

## Cliente GUI OpenSearch

O DocKit é um **cliente GUI OpenSearch** open source e uma alternativa desktop ao OpenSearch Dashboards para o trabalho diário de consultas. Ele inicia em menos de 2 segundos, usa cerca de 150 MB de RAM e armazena tudo localmente — sem necessidade de uma instância do Dashboards.

Os mesmos editor Monaco, assistente de IA, gerenciamento de clusters e recursos de importação/exportação funcionam de forma idêntica no OpenSearch 1.x, 2.x e 3.x, incluindo clusters do AWS OpenSearch Service.

→ [Detalhes completos do cliente GUI OpenSearch](/products/dockit/opensearch-gui-client)

## Cliente GUI DynamoDB

O DocKit é um **cliente GUI DynamoDB** open source que substitui o Console da AWS no trabalho diário com tabelas. Ele inclui um editor PartiQL com autocompletar ciente do esquema, um construtor visual de consultas com mais de 13 operadores de filtro, CRUD inline de itens, paginação com tamanhos de página configuráveis e gerenciamento completo do ciclo de vida das tabelas — criação de GSI/LSI, TTL, streams, PITR, criptografia, métricas do CloudWatch e limpeza de tabelas. Geração de consultas com IA usando seus nomes reais de atributos como contexto, além de importação/exportação em JSON e CSV.

Também há suporte a DynamoDB Local para desenvolvimento local, perfis da AWS, SSO, chaves de acesso e autenticação por papel IAM em qualquer região.

→ [Detalhes completos do cliente GUI DynamoDB](/products/dockit/dynamodb-gui-client)

## Cliente GUI MongoDB

O DocKit é um **cliente GUI MongoDB** open source com um editor de consultas completo que oferece autocompletar e formatação de resultados. Navegue por documentos com paginação e operações CRUD inline. A visualização Manage fornece navegação da infraestrutura no nível das coleções — índices, estatísticas de armazenamento e metadados de relance.

Conecte-se com autenticação, TLS e configurações de replica set. Há suporte a gravação em lote (bulk write) para operações em lote eficientes. O histórico de consultas tem favoritos por estrela/marcador e é persistido por conexão. Importe e exporte coleções em JSON, CSV e JSONL.

→ [Documentação do cliente GUI MongoDB](/docs/dockit/connect-to-server)

## Suporte ao EasySearch

O DocKit suporta nativamente o **EasySearch** como um tipo de conexão dedicado ao lado do Elasticsearch e do OpenSearch. O EasySearch é separado do OpenSearch, com configuração e iconografia independentes, o que facilita o gerenciamento de todos os seus mecanismos de busca a partir de uma única interface.

## Agentic Data Studio

O **Agentic Data Studio** do DocKit permite interagir com seus bancos de dados por linguagem natural. Descreva o que você precisa — o agente escreve consultas, inspeciona esquemas, atualiza documentos, exclui registros, cria índices e retorna resultados. Cada operação passa por ferramentas validadas com segurança integrada: permissões granulares por fonte, um portão de segurança que exige confirmação explícita antes de ações destrutivas e uma arquitetura segura para credenciais que nunca expõe segredos de conexão ao LLM. Suporta OpenAI, Anthropic e DeepSeek, além de Ollama e LM Studio para uso totalmente offline.

→ [Guia do Agentic Data Studio](/docs/dockit/agentic-datastudio)

## Perguntas frequentes

**O DocKit funciona offline?**
Sim. Todas as conexões, consultas e históricos são armazenados localmente. O assistente de IA e o Agentic Data Studio exigem conexão com a internet apenas quando você envia um prompt.

**O DocKit suporta MongoDB?**
Sim. O DocKit suporta totalmente o MongoDB, com gerenciamento de conexões, editor de consultas com autocompletar, navegador de documentos com CRUD inline, visualização Manage para índices e metadados de coleções, gravação em lote, histórico de consultas com estrelas/marcadores e importação/exportação. O EasySearch também é suportado como um tipo de conexão dedicado.

**Existe uma versão web?**
Não. O DocKit é um aplicativo desktop para macOS, Windows e Linux. Isso é intencional — armazenamento local-first, sem dependência de nuvem, sem login.

**E a compatibilidade entre Elasticsearch e OpenSearch?**
O DocKit detecta automaticamente a qual mecanismo você está conectado e ajusta as chamadas de API de acordo. O mesmo formulário de conexão funciona para ambos.

**O DocKit é open source?**
Sim — licença Apache 2.0. O código-fonte completo está em [github.com/geek-fun/dockit](https://github.com/geek-fun/dockit).

**Existe um plano pago?**
Sim. A edição Community continua gratuita e open source, enquanto a assinatura paga Ultimate ($9.9/mês ou $99/ano, com 7 dias de teste grátis) desbloqueia recursos avançados como o agente de IA, MCP e gerenciamento de clusters.

**Vocês também suportam bancos de dados SQL?**
O DocKit foi criado especificamente para bancos de dados NoSQL. Se você precisa de suporte a PostgreSQL, MySQL, SQL Server ou SQLite, confira o [**SqlKit**](/products/sqlkit/) — nosso cliente SQL desktop open source complementar, da mesma equipe.

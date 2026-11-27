---
layout: product
title: DocKit | GUI desktop Agentic NoSQL para MongoDB, Elasticsearch, OpenSearch e DynamoDB
description: O DocKit é uma GUI desktop NoSQL agentic open source para MongoDB, Elasticsearch, OpenSearch, DynamoDB e EasySearch. Seu agente de IA de dados escreve consultas, inspeciona esquemas e gerencia dados em linguagem natural, com execução local e foco em privacidade. A edição Community é gratuita e open source; o agente de IA faz parte da assinatura paga Ultimate.
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
        "description": "Cliente GUI desktop open source (Apache 2.0) para MongoDB, Elasticsearch, OpenSearch, DynamoDB e EasySearch, com execução local, assistente de IA integrado e Agentic Data Studio para criar e executar consultas em linguagem natural.",
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
  headline: "Cliente GUI para bancos de dados NoSQL"
  animatedText: "Agentic"
  tagline: "Conecte-se ao MongoDB, Elasticsearch, OpenSearch, DynamoDB e EasySearch com a edição Community, gratuita e de código aberto. A edição Ultimate inclui Agentic Data Studio e MCP para trabalhar com seus dados em linguagem natural."
  logo: /dockit.png
  screenshot: /dockit-client-ui.png
  actions:
    - text: Iniciar teste grátis
      link: https://console.geekfun.club/subscribe?intent=trial
      theme: brand
      external: true
    - text: Baixar
      link: /pt-BR/download#dockit
      theme: alt

databases:
  title: "Suporte nativo a bancos de dados NoSQL"
  items:
    - { name: MongoDB, logo: /db-mongodb.svg, link: /products/dockit/mongodb-gui-client }
    - { name: DynamoDB, logo: /db-dynamodb.svg, link: /products/dockit/dynamodb-gui-client }
    - { name: Elasticsearch, logo: /db-elasticsearch.svg, link: /products/dockit/elasticsearch-gui-client }
    - { name: OpenSearch, logo: /db-opensearch.png, link: /products/dockit/opensearch-gui-client }
    - { name: EasySearch, logo: /db-easysearch.svg }

showcase:
  - title: "Agentic Data Studio"
    body: "Trabalhe com seus bancos de dados em linguagem natural. O agente de IA de dados do DocKit escreve consultas, inspeciona esquemas, cria índices, atualiza documentos e retorna resultados, com permissões por fonte e confirmação explícita antes de ações destrutivas. Por exemplo, peça 'encontre pedidos acima de $500 da última semana' para gerar a consulta. Funciona com OpenAI, Anthropic e DeepSeek, além de Ollama e LM Studio para uso offline."
    image: /dockit-gui-client-demo.gif
    align: left
  - title: "Gerenciamento de dados em múltiplos bancos de dados"
    body: "Gerencie MongoDB, DynamoDB, Elasticsearch, OpenSearch e EasySearch em uma interface. No DynamoDB, execute PartiQL ou monte consultas visuais com 12 operadores de filtro, gerencie índices secundários globais e configure a recuperação pontual (PITR)."
    image: /dockit-multi-database-manage-demo.gif
    align: right
  - title: "Importação e exportação"
    body: "Importe e exporte seus dados por uma interface interativa. Escolha a origem e o destino, mapeie os campos visualmente e selecione quais incluir. As operações rodam em segundo plano com progresso em tempo real e suportam JSON, CSV e JSONL."
    image: /dockit-import-export-demo.gif
    align: left
  - title: "Privacidade local-first"
    body: "O DocKit roda como aplicativo desktop, então atualizar uma aba do navegador não apaga seu trabalho. Credenciais, consultas e configurações de LLM ficam na sua máquina sem depender da nuvem, e o histórico de consultas permanece salvo entre sessões. Com Ollama e LM Studio funciona completamente offline."
    image: /dockit-query-history.png
    align: right

features:
  - { title: "Agentic Data Studio", body: "Trabalhe com seus bancos de dados em linguagem natural. O agente de IA de dados escreve consultas, inspeciona esquemas, cria índices e atualiza documentos, com permissões por fonte e confirmação antes de ações destrutivas.", icon: "sparkles" }
  - { title: "Editor baseado no Monaco", body: "Usa o Monaco Editor, o mesmo editor do VS Code, com realce de sintaxe, autocompletar, formatação e atalhos de teclado conhecidos.", icon: "edit" }
  - { title: "Privacidade local-first", body: "Credenciais, consultas e configurações de LLM ficam salvas localmente, e o histórico de consultas é registrado automaticamente. Com Ollama e LM Studio funciona offline.", icon: "history" }
  - { title: "Suporte a múltiplos bancos de dados", body: "Gerencie MongoDB, DynamoDB, Elasticsearch, OpenSearch e EasySearch em uma só interface e alterne entre bancos sem trocar de ferramenta.", icon: "database" }
  - { title: "Importação e exportação", body: "Importe e exporte grandes conjuntos de dados em JSON, CSV e JSONL com operações em lote preparadas para milhões de registros.", icon: "import" }
  - { title: "Gerenciamento de clusters", body: "Monitore a saúde dos nós, gerencie shards, acompanhe índices e controle aliases com as ferramentas visuais de cluster integradas.", icon: "cluster" }
  - { title: "Tarefas em segundo plano", body: "Importação, exportação e operações longas rodam como tarefas em segundo plano com progresso em tempo real e acompanhamento de status. Continue usando o DocKit enquanto as tarefas executam.", icon: "layers" }
  - { title: "Navegador de arquivos", body: "Navegue, crie e organize arquivos de consulta locais (.search, .partiql, .mongo) diretamente no aplicativo. Abra os arquivos como abas do editor com ordenação por nome, data ou tamanho.", icon: "search" }
  - { title: "Histórico de consultas", body: "Cada consulta é registrada automaticamente, com até 500 entradas por conexão e suporte a favoritos. Você pode copiar, recarregar ou reexecutar consultas anteriores.", icon: "history" }

platforms:
  title: "Disponível em todas as plataformas"
  items:
    - { name: macOS, logo: /platform/platform-macos.svg }
    - { name: Windows, logo: /platform/platform-windows.svg }
    - { name: Linux, logo: /platform/platform-linux.svg }

cta:
  title: "Gerenciamento de bancos de dados com IA integrada"
  body: "Escreva e depure consultas complexas com o assistente de IA do DocKit e o Agentic Data Studio para gastar menos tempo com sintaxe repetitiva."
  actions:
    - { text: "Iniciar teste grátis", link: "https://console.geekfun.club/subscribe?intent=trial", theme: "brand", external: true }
    - { text: "Baixar", link: "/pt-BR/download#dockit", theme: "alt" }
    - { text: "Experimente o SqlKit", link: "/pt-BR/products/sqlkit/", theme: "alt" }
    - { text: "Documentação", link: "/pt-BR/docs/dockit/", theme: "alt" }
---

## Por que o DocKit para equipes com múltiplos bancos de dados

A maioria das equipes não usa apenas um banco de dados NoSQL. Uma equipe que roda Elasticsearch para busca e DynamoDB para cargas chave-valor normalmente precisa de duas ferramentas separadas: Kibana ou Elasticvue para uma, e Dynobase ou NoSQL Workbench para a outra. O DocKit cobre esses fluxos em um único aplicativo desktop.

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
| **Preço** | Community: grátis · Ultimate USD 9,90/mês | Grátis | Grátis | $12-30/mês | Grátis |

## Cliente GUI Elasticsearch

O DocKit é um cliente GUI Elasticsearch feito para engenheiros que trabalham diariamente no editor de consultas. Ele substitui a aba Dev Tools do Kibana por um editor baseado em Monaco com suporte a sintaxe JSON5, comentários em linha, autocompletar de campos a partir do mapping em tempo real e geração de consultas assistida por IA. Também traz autocompletar integrado para ES|QL.

Conecte-se a qualquer cluster Elasticsearch (local, auto-hospedado ou na nuvem) com Basic Auth ou API Key. Navegue por índices, gerencie mappings e aliases, monitore a saúde do cluster e dos shards com métricas detalhadas por shard (documentos, armazenamento, fielddata, cache de consultas, taxas de indexação, estatísticas de merge, segmentos) e importe/exporte dados em JSON, CSV ou JSONL (formato bulk). Um catálogo de sintaxe com mais de 120 endpoints de API do Elasticsearch e do OpenSearch está disponível para consulta. As consultas são persistidas como arquivos locais, então nada se perde quando você fecha o aplicativo.

[Detalhes completos do cliente GUI Elasticsearch](/products/dockit/elasticsearch-gui-client)

## Cliente GUI OpenSearch

O DocKit é um cliente GUI OpenSearch open source e uma alternativa desktop ao OpenSearch Dashboards para o trabalho diário de consultas. Ele inicia em menos de 2 segundos, usa cerca de 150 MB de RAM e armazena os dados localmente, sem exigir uma instância do Dashboards.

Os mesmos editor Monaco, assistente de IA, gerenciamento de clusters e recursos de importação/exportação funcionam de forma idêntica no OpenSearch 1.x, 2.x e 3.x, incluindo clusters do AWS OpenSearch Service.

[Detalhes completos do cliente GUI OpenSearch](/products/dockit/opensearch-gui-client)

## Cliente GUI DynamoDB

O DocKit é um cliente GUI DynamoDB open source que substitui o Console da AWS no trabalho diário com tabelas. Ele inclui um editor PartiQL com autocompletar baseado no esquema, um construtor visual de consultas com 12 operadores de filtro, CRUD inline de itens, paginação com tamanhos configuráveis e gerenciamento do ciclo de vida das tabelas (GSIs, consulta de LSIs, TTL, streams, PITR, criptografia, métricas do CloudWatch e limpeza de tabelas). Também gera consultas com IA usando os nomes reais dos seus atributos como contexto e importa ou exporta dados em JSON e CSV.

Também há suporte a DynamoDB Local para desenvolvimento local, perfis da AWS, SSO, chaves de acesso e autenticação por papel IAM em qualquer região.

[Detalhes completos do cliente GUI DynamoDB](/products/dockit/dynamodb-gui-client)

## Cliente GUI MongoDB

O DocKit é um cliente GUI MongoDB open source com editor de consultas, autocompletar e formatação de resultados. Você pode navegar por documentos com paginação e operações CRUD inline, e usar a visualização Manage para conferir índices, estatísticas de armazenamento e metadados de cada coleção.

Conecte-se com autenticação, TLS e configurações de replica set. O DocKit suporta gravação em lote (bulk write), mantém histórico de consultas com favoritos por conexão e importa ou exporta coleções em JSON, CSV e JSONL.

[Documentação do cliente GUI MongoDB](/pt-BR/docs/dockit/connect-to-server)

## Suporte ao EasySearch

O DocKit suporta nativamente o EasySearch como um tipo de conexão dedicado ao lado do Elasticsearch e do OpenSearch, com configuração e ícone independentes para gerenciar vários mecanismos de busca na mesma interface.

## Agentic Data Studio

O Agentic Data Studio do DocKit permite trabalhar com seus bancos de dados em linguagem natural. Descreva o que você precisa e o agente escreve consultas, inspeciona esquemas, atualiza documentos, exclui registros, cria índices e retorna resultados. Cada operação passa por ferramentas validadas com permissões por fonte, confirmação explícita antes de ações destrutivas e proteção de credenciais para não expor segredos de conexão ao LLM. Funciona com OpenAI, Anthropic e DeepSeek, além de Ollama e LM Studio para uso offline.

[Guia do Agentic Data Studio (em inglês)](/docs/dockit/agentic-datastudio)

## Perguntas frequentes

**O DocKit funciona offline?**
Sim. Todas as conexões, consultas e históricos são armazenados localmente. O assistente de IA e o Agentic Data Studio exigem conexão com a internet apenas quando você envia um prompt.

**O DocKit suporta MongoDB?**
Sim. O DocKit suporta totalmente o MongoDB, com gerenciamento de conexões, editor de consultas com autocompletar, navegador de documentos com CRUD inline, visualização Manage para índices e metadados de coleções, gravação em lote, histórico de consultas com estrelas/marcadores e importação/exportação. O EasySearch também é suportado como um tipo de conexão dedicado.

**Existe uma versão web?**
Não. O DocKit é um aplicativo desktop para macOS, Windows e Linux, projetado para salvar os dados localmente sem depender da nuvem nem exigir login.

**E a compatibilidade entre Elasticsearch e OpenSearch?**
O DocKit detecta automaticamente a qual mecanismo você está conectado e ajusta as chamadas de API de acordo. O mesmo formulário de conexão funciona para ambos.

**O DocKit é open source?**
Sim, sob licença Apache 2.0. O código-fonte completo está em [github.com/geek-fun/dockit](https://github.com/geek-fun/dockit).

**Existe um plano pago?**
Sim. A edição Community continua gratuita e open source, enquanto a assinatura paga Ultimate (USD 9,90/mês ou USD 99,00/ano, com 7 dias de teste grátis) inclui recursos adicionais como o agente de IA, MCP e gerenciamento de clusters.

**Vocês também suportam bancos de dados SQL?**
O DocKit foi criado especificamente para bancos de dados NoSQL. Se você precisa de suporte a PostgreSQL, MySQL, SQL Server ou SQLite, confira o [SqlKit](/products/sqlkit/), nosso cliente SQL desktop open source da mesma equipe.

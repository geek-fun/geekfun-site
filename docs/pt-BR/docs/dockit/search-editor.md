---
title: "Executar a primeira consulta de busca no DocKit"
description: "Envie uma requisição de leitura para Elasticsearch, OpenSearch ou EasySearch e confira a resposta do servidor."
---

# Executar a primeira consulta de busca no DocKit

Depois de [conectar o servidor](/pt-BR/docs/dockit/connect-to-server), abra o editor da conexão. Troque `orders` pelo nome de um índice que você tenha permissão para ler.

```http
POST /orders/_search
{
  "size": 10,
  "query": { "match_all": {} }
}
```

Deixe o cursor dentro da requisição e use `⌘ + Enter` no macOS ou `Ctrl + Enter` no Windows e Linux. Você também pode clicar no botão de execução ao lado dela. O exemplo retorna até dez resultados.

Comece cada requisição em uma linha nova com o método HTTP e o caminho. Coloque o corpo JSON logo abaixo. Se o editor tiver várias requisições, confira a conexão ativa antes de executar. Salve as que pretende reutilizar como arquivos `.search`.

Veja os [atalhos do editor](/pt-BR/docs/dockit/shortcut) e os guias de [Consultar MongoDB no DocKit](./mongodb-workspace) e [Consultar DynamoDB com PartiQL no DocKit](./dynamodb-query-editor).

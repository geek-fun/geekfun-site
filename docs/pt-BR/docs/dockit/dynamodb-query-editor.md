---
title: "Consultar DynamoDB com PartiQL no DocKit"
description: "Leia itens por chave de partição no editor visual ou com uma instrução PartiQL."
---

# Consultar DynamoDB com PartiQL no DocKit

[Conectar ao banco](./connect-to-server)

Escolha a tabela ou o índice no editor visual. Informe o valor da chave de partição e, se houver, adicione uma condição de chave de ordenação. Sem a chave de partição, o editor avisa que fará uma varredura.

Para guardar a consulta como texto, abra o editor PartiQL. Substitua `Orders`, `customerId` e `example-customer` pela tabela, chave de partição e valor que você quer consultar.

```sql
SELECT * FROM "Orders" WHERE "customerId" = 'example-customer';
```

Use o botão de execução ou pressione `⌘ + Enter` no macOS e `Ctrl + Enter` no Windows e Linux.

Use os controles do painel de resultados para avançar nas páginas. Se houver um filtro de atributos, uma página vazia pode ser seguida por outra com itens.

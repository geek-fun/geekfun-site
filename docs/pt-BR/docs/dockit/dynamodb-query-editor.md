---
title: "Consultar DynamoDB com PartiQL no DocKit"
description: "Leia itens por chave de partição no editor visual ou com uma instrução PartiQL."
---

# Consultar DynamoDB com PartiQL no DocKit

[Conectar ao banco](./connect-to-server)

Escolha a tabela ou o índice no editor visual. Informe o valor da chave de partição e, se houver, adicione uma condição de chave de ordenação. Sem a chave de partição, o editor avisa que fará uma varredura.

Para guardar a consulta como texto, abra o editor PartiQL. Substitua `Orders` pelo nome da tabela. Troque `customerId` e `example-customer` pelo nome e pelo valor da chave de partição.

```sql
SELECT * FROM "Orders" WHERE "customerId" = 'example-customer';
```

Use o botão de execução ou pressione `⌘ + Enter` no macOS e `Ctrl + Enter` no Windows e Linux.

Use os controles do painel de resultados para avançar. Se uma página vier vazia depois de aplicar um filtro de atributos, prossiga para a próxima. Ainda pode haver itens que correspondem ao filtro.

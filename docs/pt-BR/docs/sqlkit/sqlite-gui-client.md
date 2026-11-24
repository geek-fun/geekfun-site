---
title: "Cliente GUI e visualizador de bancos SQLite | SqlKit"
description: "Abra um arquivo SQLite no SqlKit, liste as tabelas e execute consultas locais."
---

# Cliente GUI e visualizador de bancos SQLite

Abra **Conexões → Adicionar nova conexão** e selecione **SQLite**. Clique em **Abrir...** para usar um arquivo existente ou em **Novo...** para criar outro. Salve e clique em **Conectar**.

Em **Consultas**, abra uma tabela pela árvore ou rode a consulta abaixo para listar as tabelas e views.

```sql
SELECT type, name
FROM sqlite_schema
WHERE type IN ('table', 'view')
ORDER BY type, name;
```

Um banco novo começa sem tabelas de usuário. Se você esperava encontrar dados, confira se a conexão usa o arquivo certo. Para bancos criptografados com SQLCipher, escolha **SQLCipher** e informe a chave. [Guia do editor SQL](/pt-BR/docs/sqlkit/query-editor).

---
title: "Cliente GUI e visualizador de bancos SQLite | SqlKit"
description: "Abra um arquivo SQLite no SqlKit, liste as tabelas e execute consultas locais."
---

# Cliente GUI e visualizador de bancos SQLite

Abra **Conexões → Adicionar nova conexão** e selecione **SQLite**. Clique em **Abrir...** para usar um arquivo existente ou em **Novo...** para criar outro. Salve e clique em **Conectar**.

Abra uma tabela pela árvore em **Consultas**. Você também pode listar tabelas e views com a consulta abaixo.

```sql
SELECT type, name
FROM sqlite_schema
WHERE type IN ('table', 'view')
ORDER BY type, name;
```

Se esperava ver dados, confira se a conexão está apontando para o arquivo certo. Um banco recém-criado começa sem tabelas de usuário. Para bancos criptografados com SQLCipher, escolha **SQLCipher** e informe a chave. [Guia do editor SQL](/pt-BR/docs/sqlkit/query-editor).

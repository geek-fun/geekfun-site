---
title: "Executar a primeira consulta SQL no SqlKit"
description: "Confira a conexão no editor, rode uma instrução de leitura e salve o SQL ou exporte as linhas retornadas."
---

# Executar a primeira consulta SQL no SqlKit

Após [conectar um banco](/pt-BR/docs/sqlkit/connect-to-database), abra **Consultas** e clique em **Nova consulta**. Confira na barra do editor se a conexão e o banco são os que você quer usar. Rode esta consulta de leitura para testar a sessão.

```sql
SELECT 1 AS connection_check;
```

No Oracle, rode `SELECT 1 AS connection_check FROM dual;`. Clique em **Executar** e confira se o painel de resultados mostra `1`.

Para rodar apenas um trecho, selecione-o e use `⌘ + Enter` no macOS ou `Ctrl + Enter` no Windows e Linux. Sem seleção, o atalho executa a instrução sob o cursor. O botão **Executar** roda todo o conteúdo.

Na árvore de objetos, clique duas vezes em uma tabela para abri-la. Você pode exportar as linhas da consulta para CSV ou JSON pelo painel de resultados. Para guardar o SQL, use `⌘ + S` ou `Ctrl + S`. [Outros atalhos](/pt-BR/docs/sqlkit/keyboard-shortcuts).

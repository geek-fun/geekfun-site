---
title: "Executar a primeira consulta SQL no SqlKit"
description: "Confira a conexão no editor, rode uma instrução de leitura e salve o SQL ou exporte as linhas retornadas."
---

# Executar a primeira consulta SQL no SqlKit

Após [conectar um banco](/pt-BR/docs/sqlkit/connect-to-database), abra **Consultas** e clique em **Nova consulta**. Verifique a conexão e o banco na barra do editor. Use esta instrução para testar a sessão:

```sql
SELECT 1 AS connection_check;
```

No Oracle, rode `SELECT 1 AS connection_check FROM dual;`. Clique em **Executar** e confira se o painel de resultados mostra `1`.

Para rodar apenas um trecho, selecione-o e use `⌘ + Enter` no macOS ou `Ctrl + Enter` no Windows e Linux. Sem seleção, o atalho executa a instrução sob o cursor. O botão **Executar** roda todo o conteúdo.

Abra uma tabela com dois cliques na árvore de objetos. Os controles do painel de resultados exportam as linhas da consulta para CSV ou JSON. Para guardar o SQL, use `⌘ + S` ou `Ctrl + S`. [Outros atalhos](/pt-BR/docs/sqlkit/keyboard-shortcuts).

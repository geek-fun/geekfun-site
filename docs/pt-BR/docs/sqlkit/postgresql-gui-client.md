---
title: "Cliente GUI para PostgreSQL no macOS, Windows e Linux | SqlKit"
description: "Conecte ao PostgreSQL, verifique o certificado do servidor e confirme o banco e o esquema ativos."
---

# Cliente GUI para PostgreSQL no macOS, Windows e Linux

Abra **Conexões → Adicionar nova conexão** e selecione **PostgreSQL**. Preencha o host, a porta (em geral `5432`), o banco e as credenciais do seu papel. Em **Avançado**, escolha **Verificação completa** com a CA correta se precisar verificar o certificado e o nome do servidor.

Teste, salve e abra **Consultas**. Rode este SQL para conferir a sessão:

```sql
SELECT current_database() AS active_database, current_schema() AS active_schema;
```

Expanda `public` ou o esquema de trabalho na árvore. Use um nome qualificado, como `reporting.orders`, se houver tabelas com o mesmo nome em esquemas diferentes. Se uma tabela não aparecer, atualize a árvore e confirme as permissões do papel. [Guia do editor SQL](/pt-BR/docs/sqlkit/query-editor).

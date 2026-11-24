---
title: "Conectar o DocKit a um banco de dados"
description: "Configure conexões para Elasticsearch, OpenSearch, EasySearch, MongoDB ou DynamoDB no DocKit."
---

# Conectar o DocKit a um banco de dados

Clique em **+** e escolha o tipo de conexão.

- **Elasticsearch, OpenSearch e EasySearch.** Preencha a URL do servidor com `http://` ou `https://` e a porta, normalmente `9200`. Use autenticação básica ou chave de API conforme o servidor. Mantenha a verificação do certificado em HTTPS.
- **MongoDB.** Informe host e porta ou cole a URI do provedor. Se usar SCRAM, confirme o banco onde o usuário foi criado (geralmente `admin`).
- **DynamoDB.** Selecione o modo de conexão. Para chave de acesso, preencha região, ID e chave secreta. AWS Profile, SSO e Assume Role exigem Ultimate. Para DynamoDB Local, experimente `http://localhost:8000` com credenciais fictícias.

Clique em **Testar conexão**. Se o teste passar, use **Confirmar** e abra a conexão na barra lateral. Se aparecer um erro de permissão, verifique quais índices, coleções ou tabelas sua conta pode consultar.

[Faça a primeira busca](/pt-BR/docs/dockit/search-editor) ou consulte o [guia de conexões remotas (em inglês)](/docs/dockit/remote-connections).

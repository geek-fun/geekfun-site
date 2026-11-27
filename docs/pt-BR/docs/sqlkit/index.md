---
title: "Primeiros passos com o SqlKit"
description: "Instale o SqlKit, conecte um banco de dados SQL e execute uma consulta de teste no editor."
---

# Primeiros passos com o SqlKit

O SqlKit é um cliente de banco de dados de código aberto para macOS, Windows e Linux. Conecte-se a um servidor ou abra um arquivo local para explorar a estrutura, editar SQL e ver os resultados na mesma área.

<div class="docs-section-links">

- [Instalar o SqlKit](/pt-BR/docs/sqlkit/installation)
- [Ver recursos](/pt-BR/docs/sqlkit/capabilities)
- [Bancos compatíveis](#supported-databases)

</div>

<DocsFigure src="/sqlkit-sql-editor-ui.png" alt="Árvore de objetos, editor SQL e resultados de consulta no SqlKit" caption="A área de consultas reúne a estrutura do banco, o editor e os resultados." :width="3424" :height="2224" eager />

[Instale o SqlKit](/pt-BR/docs/sqlkit/installation) e [crie uma conexão](/pt-BR/docs/sqlkit/connect-to-database). Para testar a conexão, [execute uma consulta de leitura](/pt-BR/docs/sqlkit/query-editor). Use os [atalhos de teclado](/pt-BR/docs/sqlkit/keyboard-shortcuts) para executar e salvar SQL no editor.

## Bancos de dados compatíveis com o SqlKit {#supported-databases}

| Método de conexão | Bancos de dados |
| --- | --- |
| Driver TCP integrado | <!--@include: @/.vitepress/includes/sqlkit-databases.md#tcp--> |
| Driver integrado para arquivos locais | <!--@include: @/.vitepress/includes/sqlkit-databases.md#local--> |
| Driver compatível com MySQL | <!--@include: @/.vitepress/includes/sqlkit-databases.md#mysql--> |
| Driver compatível com PostgreSQL | <!--@include: @/.vitepress/includes/sqlkit-databases.md#postgresql--> |
| Ponte JDBC | <!--@include: @/.vitepress/includes/sqlkit-databases.md#jdbc--> |
| Conexão HTTP | <!--@include: @/.vitepress/includes/sqlkit-databases.md#http--> |

Consulte o [guia de bancos e drivers (em inglês)](/docs/sqlkit/supported-databases) para ver os requisitos de conexão.

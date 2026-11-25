---
title: Conectar um agente de código ao SqlKit via MCP
description: Inicie a ponte MCP do SqlKit e registre o Data Studio Agent no Codex, Claude Code ou Cursor.
---

# Conectar um agente de código ao SqlKit via MCP

O Data Studio Agent é o servidor MCP que sua ferramenta de código inicia localmente. Ele encaminha solicitações SQL à ponte do SqlKit para usar conexões salvas. A ponte exige Ultimate.

[Agentic Data Studio](/pt-BR/docs/sqlkit/agentic-datastudio)

## Preparar o SqlKit {#prepare-sqlkit}

Abra o SqlKit, entre com Ultimate e salve uma conexão testada. Em **Configurações → Ponte MCP**, confira se a ponte está em execução. Reinicie-a se necessário e deixe o SqlKit aberto enquanto usar o cliente.

Em **Permissões padrão de IA**, selecione **Leitura** e confirme que a conexão também permite leitura. Instale o Node.js 18 ou posterior e o npm na máquina que executa o cliente e confira `npx --version`.

[Conectar um banco de dados](/pt-BR/docs/sqlkit/connect-to-database) · [Permissões da IA](/pt-BR/docs/sqlkit/ai-permissions)

## Registrar o Data Studio Agent {#register}

Escolha a configuração do seu cliente. No Cursor, adicione o JSON ao arquivo `.cursor/mcp.json` do projeto ou `~/.cursor/mcp.json` do usuário. Se já houver um objeto `mcpServers`, adicione a entrada a ele.

::: code-group

<!--@include: @/.vitepress/includes/data-studio-mcp.md#codex-->

<!--@include: @/.vitepress/includes/data-studio-mcp.md#claude-->

<!--@include: @/.vitepress/includes/data-studio-mcp.md#cursor-->

:::

[Início rápido do Data Studio Agent (em inglês)](/docs/data-studio-agent/quick-start)

## Verificar a conexão {#verify}

Confira o registro com `codex mcp list` no Codex, `/mcp` no Claude Code ou nas configurações de MCP do Cursor. Peça ao agente para listar as conexões disponíveis no SqlKit e as tabelas de uma conexão de desenvolvimento sem alterar dados.

<DocsFigure src="/blog/codex-data-studio/codex-data-studio-architecture-branded.png" alt="A ferramenta de código acessa o Data Studio Agent e a ponte MCP do SqlKit" caption="O servidor MCP local encaminha solicitações SQL à ponte do SqlKit." :width="3600" :height="2160" />

## Resolver problemas da ponte {#troubleshoot}

Se o cliente não iniciar o servidor, confira se encontra `npx` e consegue baixar o pacote. Se o servidor não encontrar o SqlKit, abra o app na mesma máquina e verifique a ponte. Se faltar uma conexão, confira as permissões de IA dessa conexão.

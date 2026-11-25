---
title: Usar o Agentic Data Studio no SqlKit
description: Configure um modelo, adicione uma conexão ao Data Studio e use o assistente do SqlKit para explorar esquemas ou escrever SQL.
---

# Usar o Agentic Data Studio no SqlKit

O Agentic Data Studio é a área de IA do SqlKit. Você pode adicionar conexões salvas a uma conversa. Para tirar dúvidas sobre a consulta atual, abra o assistente de IA na área Consultas. Os dois recursos exigem Ultimate.

[Configurar MCP](/pt-BR/docs/sqlkit/mcp-bridge)

## Configurar um provedor de modelos {#configure-a-provider}

Abra **Configurações → LLMs → Adicionar provedor**. Escolha um provedor na nuvem e informe a chave de API, ou configure um serviço local como Ollama ou LM Studio. Inicie o serviço local antes de testar.

Salve o provedor e use **Testar** e **Sincronizar modelos**. Se o serviço não listar modelos, informe os IDs na configuração do provedor.

## Adicionar uma conexão e iniciar a conversa {#first-conversation}

Salve e teste uma conexão. No **Data Studio**, abra uma **Nova sessão**, adicione a conexão como fonte e escolha um modelo. Para começar, use um banco de desenvolvimento, confira a permissão de leitura e mantenha o modo **Perguntar**.

Por exemplo, peça que identifique a tabela de pedidos e a coluna de data e prepare um SQL de contagem mensal sem executá-lo. Revise o SQL no editor antes de executar.

[Conectar um banco de dados](/pt-BR/docs/sqlkit/connect-to-database) · [Permissões da IA](/pt-BR/docs/sqlkit/ai-permissions)

<DocsFigure src="/sqlkit-data-studio-ui.png" alt="Data Studio no SqlKit com um SQL gerado" caption="O Data Studio usa o esquema da conexão adicionada para preparar SQL." :width="1440" :height="935" />

## Usar o assistente ao lado da consulta {#assistant}

Abra o assistente de IA na barra superior de **Consultas** e peça uma explicação do SQL atual ou de um erro. Um provedor na nuvem pode receber o prompt e o contexto relevante do esquema ou dos resultados.

## Resolver problemas de configuração {#troubleshoot}

Se não houver modelos, confira se o provedor está habilitado e tem modelos cadastrados. Se a fonte não aparecer, salve e teste a conexão. Se uma operação for bloqueada, confira as permissões da conexão e da conversa.

---
title: Configurar permissões da IA no SqlKit
description: Defina as permissões padrão e por conexão para Data Studio e MCP e revise ações bloqueadas.
---

# Configurar permissões da IA no SqlKit

O SqlKit aplica a política de acesso da conexão a solicitações do assistente interno e de clientes MCP. Alterar as permissões exige Ultimate.

## Definir permissões padrão e por conexão {#connection-permissions}

Abra **Configurações → Ponte MCP → Permissões padrão de IA**. Selecione **Leitura** e salve se precisar consultar apenas o esquema e os dados.

Edite uma conexão salva e abra **Avançado → Permissões da IA**. Use os padrões ou escolha **Personalizado** para definir as ações permitidas. Uma conversa no Data Studio pode restringir o acesso ainda mais.

## Perguntar, Automático e aprovações do cliente {#approvals}

**Perguntar** solicita confirmação para operações permitidas de risco elevado, como gravações. **Automático** pode executar algumas delas diretamente. Ações destrutivas pedem confirmação nos dois modos, salvo se houver uma regra de confirmação salva. O cliente MCP controla seus avisos, e as permissões do SqlKit e do banco continuam valendo.

## Revisar uma ação bloqueada {#blocked-actions}

No Data Studio, use **Revisar permissões** para identificar a conexão e a ação. Salve as permissões necessárias e escolha **Repetir solicitação**. Para excluir uma conexão dos fluxos de IA, selecione **Sem acesso**.

[Agentic Data Studio](/pt-BR/docs/sqlkit/agentic-datastudio) · [Configurar MCP](/pt-BR/docs/sqlkit/mcp-bridge)

---
title: Recursos do SqlKit | SQL, AI, MCP
description: Veja como conectar bancos de dados, rodar SQL, visualizar esquemas, transferir dados e usar o assistente de IA e o MCP no SqlKit.
---

# Recursos do SqlKit

No SqlKit, você pode conectar um banco de dados, explorar tabelas, executar SQL e salvar os resultados. Cada tarefa começa em uma área específica do aplicativo, e alguns recursos dependem do banco, do driver ou do plano Ultimate.

<div class="docs-section-links">

- [Instalar o SqlKit](/pt-BR/docs/sqlkit/installation)
- [Bancos compatíveis](/pt-BR/docs/sqlkit/#supported-databases)
- [Comparar planos](/pt-BR/pricing)

</div>

## Conectar um banco de dados {#connections}

Em **Conexões → Adicionar nova conexão**, escolha o tipo de banco e informe o endereço do servidor ou o caminho do arquivo local. O teste de uma conexão JDBC, como Oracle, verifica o ambiente Java e o driver. Com Ultimate, é possível reutilizar perfis SSH e encadear hosts bastião.

[Adicionar e testar uma conexão](/pt-BR/docs/sqlkit/connect-to-database) · [Configurar túnel SSH (em inglês)](/docs/sqlkit/ssh-tunnel)

<DocsFigure src="/sqlkit-client-ui.png" alt="Área de conexões do SqlKit com perfis de bancos salvos" caption="Use os controles de cada cartão para abrir a conexão ou editar o perfil." :width="3424" :height="2224" />

## Executar SQL e inspecionar planos {#query}

Em **Consultas**, confira a conexão e o banco antes de abrir uma aba. O editor sugere nomes de tabelas e colunas e executa o script inteiro, o trecho selecionado ou a instrução sob o cursor. Em bancos compatíveis, **Explicar** mostra o plano. **Explain Analyze** executa a instrução para coletar tempos reais.

[Editor SQL e resultados](/pt-BR/docs/sqlkit/query-editor) · [Atalhos de teclado](/pt-BR/docs/sqlkit/keyboard-shortcuts)

<DocsFigure src="/sqlkit-sql-editor-ui.png" alt="Árvore de objetos, editor SQL e grade de resultados do SqlKit" caption="Os resultados aparecem abaixo do editor depois da consulta." :width="3424" :height="2224" />

## Explorar esquemas e relações {#schema}

Na árvore de objetos, abra **Ver estrutura** para verificar colunas, chaves e índices. Com Ultimate, abra o diagrama ER pelo menu do banco ou esquema. O diagrama mostra as chaves estrangeiras que o banco informa. Clique duas vezes em uma tabela para abrir suas linhas.

[Estruturas e tabelas (em inglês)](/docs/sqlkit/table-browser)

<DocsFigure src="/sqlkit-er-diagram-ui.png" alt="Diagrama ER do SqlKit exibindo tabelas e chaves estrangeiras" caption="O diagrama ajuda a seguir as relações e abrir as tabelas relacionadas." :width="3424" :height="2224" />

## Consultar, editar e transferir dados {#data}

Clique duas vezes em uma tabela para abrir suas linhas. Filtre ou ordene os dados quando o driver oferecer suporte. Antes de editar uma linha, confira os valores que a identificam e a permissão de escrita. Salve resultados em CSV ou JSON. No Ultimate, **Transferência** importa arquivos com mapeamento de colunas ou exporta tabelas.

[Consultar e editar linhas (em inglês)](/docs/sqlkit/table-browser) · [Importar e exportar arquivos (em inglês)](/docs/sqlkit/import-export)

<DocsFigure src="/sqlkit-data-view-table-ui.png" alt="Grade de dados do SqlKit exibindo filtros e ações por linha" caption="Os filtros e as ações por linha ficam na mesma aba dos dados." :width="3424" :height="2224" />

## Usar IA no SqlKit {#ai}

Configure um provedor de modelos ou um serviço local no Agentic Data Studio, disponível no Ultimate. Peça uma explicação ou um rascunho de consulta com base no esquema conectado. Por exemplo, identifique a coluna de data para um relatório mensal e revise o SQL no editor.

[Configurar o Agentic Data Studio](/pt-BR/docs/sqlkit/agentic-datastudio)

<DocsFigure src="/sqlkit-data-studio-ui.png" alt="Assistente do SqlKit exibindo o contexto do esquema e SQL gerado" caption="Revise o SQL no editor antes de executar a consulta." :width="1440" :height="935" />

## Conectar um agente de código via MCP {#mcp}

Com Ultimate, ative **Configurações → Ponte MCP** e registre o Data Studio Agent na sua ferramenta de código. Use a permissão de leitura para consultar o esquema e os dados. Confira as permissões de cada conexão antes de habilitar alterações. A conta do banco continua determinando as operações disponíveis.

[Configurar MCP](/pt-BR/docs/sqlkit/mcp-bridge) · [Configurar permissões da IA](/pt-BR/docs/sqlkit/ai-permissions)

## Requisitos do banco e do plano {#requirements}

Planos de execução, edição de linhas e objetos disponíveis dependem do banco, do driver e das permissões da conta. Cassandra e ScyllaDB usam CQL.

O Community inclui conexões, navegação entre objetos, execução e salvamento de SQL e exportação de resultados em CSV ou JSON. O Ultimate inclui ainda túneis SSH, diagramas ER, transferência, o assistente de IA e MCP Bridge.

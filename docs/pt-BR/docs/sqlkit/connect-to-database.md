---
title: "Conectar o SqlKit a um banco de dados SQL"
description: "Configure e teste uma conexão SQL. Veja as portas padrão e onde ajustar TLS e drivers JDBC."
---

# Conectar o SqlKit a um banco de dados SQL

1. Em **Conexões**, clique em **Adicionar nova conexão**. Dê um nome à conexão e escolha o banco.
2. Em **Básico**, preencha host, porta e credenciais ou indique o arquivo local. Use **Avançado** para ajustar TLS conforme o servidor.
3. Clique em **Testar conexão**. Se funcionar, clique em **Salvar** e depois em **Conectar** no cartão. Abra **Consultas**.

| Banco | Porta ou arquivo |
| --- | --- |
| [MySQL](/pt-BR/docs/sqlkit/mysql-gui-client) | `3306` |
| [PostgreSQL](/pt-BR/docs/sqlkit/postgresql-gui-client) | `5432` e nome do banco |
| [SQL Server](/pt-BR/docs/sqlkit/sql-server-gui-client) | `1433` em muitas instâncias padrão |
| [Oracle Database](/pt-BR/docs/sqlkit/oracle-gui-client) | `1521` e nome do serviço ou SID na conexão básica |
| [SQLite](/pt-BR/docs/sqlkit/sqlite-gui-client) | Caminho do arquivo local |

Se o servidor usar uma porta diferente da listada acima, informe a porta fornecida pelo administrador. Ao testar uma conexão JDBC, o SqlKit verifica se o Java, a ponte JDBC e o driver estão disponíveis. Se algum download falhar, abra **Configurações → JRE e drivers**.

Se o teste expirar, confirme o host, a porta e se o acesso exige VPN. Para erros de autenticação, confirme as credenciais e as permissões. Para erros de TLS, verifique a CA e o nome do servidor. Quando a conexão funcionar, [rode uma consulta de leitura](/pt-BR/docs/sqlkit/query-editor).

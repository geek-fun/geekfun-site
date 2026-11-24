---
title: "Cliente GUI para SQL Server no macOS, Windows e Linux | SqlKit"
description: "Conecte ao Microsoft SQL Server com uma conta SQL, a porta TCP da instância e as opções de criptografia do servidor."
---

# Cliente GUI para SQL Server no macOS, Windows e Linux

Em **Conexões → Adicionar nova conexão**, escolha **SQL Server**. Informe host, porta, nome do banco, usuário e senha. Instâncias padrão geralmente usam a porta `1433`. Para uma instância nomeada, peça ao administrador a porta TCP em uso.

Ajuste a criptografia em **Avançado**, teste e salve. Em **Consultas**, rode o T-SQL abaixo para conferir o banco ativo e o login.

```sql
SELECT DB_NAME() AS active_database, SUSER_SNAME() AS login_name;
```

Expanda `dbo` ou o esquema usado pela aplicação. Se o teste expirar, verifique se TCP/IP está habilitado na instância e se a porta está acessível. Para erros de certificado, confirme o nome do servidor e a CA com o administrador. [Guia de conexão](/pt-BR/docs/sqlkit/connect-to-database).

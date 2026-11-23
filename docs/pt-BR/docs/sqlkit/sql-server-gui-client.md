---
title: "Cliente GUI para SQL Server no macOS, Windows e Linux | SqlKit"
description: "Conecte ao Microsoft SQL Server com uma conta SQL, a porta TCP da instância e as opções de criptografia do servidor."
---

# Cliente GUI para SQL Server no macOS, Windows e Linux

Em **Conexões → Adicionar nova conexão**, escolha **SQL Server**. Informe host, porta, nome do banco, usuário e senha. A porta padrão costuma ser `1433`. Se a instância for nomeada, peça a porta TCP efetiva ao administrador.

Ajuste a criptografia em **Avançado**, teste e salve. A consulta T-SQL abaixo confirma o banco e o login. Rode-a em **Consultas**.

```sql
SELECT DB_NAME() AS active_database, SUSER_SNAME() AS login_name;
```

Expanda `dbo` ou o esquema usado pela aplicação. Se o teste expirar, verifique se TCP/IP está habilitado na instância e se a porta está acessível. Para erros de certificado, confirme o nome do servidor e a CA com o administrador. [Guia de conexão](/pt-BR/docs/sqlkit/connect-to-database).

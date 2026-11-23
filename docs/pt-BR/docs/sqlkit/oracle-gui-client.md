---
title: "Cliente GUI para Oracle Database no macOS, Windows e Linux | SqlKit"
description: "Conecte ao Oracle pelo driver JDBC com nome de serviço, SID, alias TNS ou wallet na nuvem."
---

# Cliente GUI para Oracle Database no macOS, Windows e Linux

Em **Conexões → Adicionar nova conexão**, selecione **Oracle** e escolha o método informado pelo administrador.

- **Conexão básica.** Informe host, porta do listener (geralmente `1521`) e nome do serviço ou SID.
- **TNS.** Escolha a pasta com `tnsnames.ora` e indique o alias TNS.
- **Wallet na nuvem.** Selecione a pasta extraída e o alias do serviço. Preencha a senha do wallet se necessário.

Informe as credenciais do Oracle e teste a conexão. Se faltar Java ou um componente JDBC, confira **Configurações → JRE e drivers**.

Em **Consultas**, confira o serviço e o esquema ativos:

```sql
SELECT SYS_CONTEXT('USERENV', 'SERVICE_NAME') AS service_name,
       SYS_CONTEXT('USERENV', 'CURRENT_SCHEMA') AS current_schema
FROM dual;
```

Se o listener indicar serviço desconhecido, confirme se você preencheu o nome de serviço ou SID correto. Se não aparecerem aliases TNS, confira a pasta selecionada. [Guia do editor SQL](/pt-BR/docs/sqlkit/query-editor).

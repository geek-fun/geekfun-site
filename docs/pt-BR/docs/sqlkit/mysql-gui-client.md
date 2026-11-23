---
title: "Cliente GUI para MySQL no macOS, Windows e Linux | SqlKit"
description: "Use o driver integrado do MySQL para conectar seu banco e conferir a versão do servidor e o banco ativo."
---

# Cliente GUI para MySQL no macOS, Windows e Linux

Em **Conexões → Adicionar nova conexão**, selecione **MySQL**. Preencha host, porta (geralmente `3306`) e credenciais. Informe o nome do banco se quiser abri-lo automaticamente. Configure TLS em **Avançado** conforme o provedor, teste e salve.

Em **Consultas**, rode a consulta abaixo para conferir o banco ativo e a versão do servidor.

```sql
SELECT DATABASE() AS active_database, VERSION() AS server_version;
```

Se `active_database` vier como `NULL`, selecione o banco na barra lateral. Se a conexão retornar “Access denied”, peça ao administrador que confira o host de origem e os privilégios da conta. Para MariaDB, escolha **MariaDB** no [formulário de conexão](/pt-BR/docs/sqlkit/connect-to-database).

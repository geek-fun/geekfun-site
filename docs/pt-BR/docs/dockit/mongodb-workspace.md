---
title: "Consultar MongoDB no DocKit"
description: "Use find para ler documentos e examinar objetos e listas no MongoDB."
---

# Consultar MongoDB no DocKit

[Conectar ao banco](./connect-to-server)

Escolha o banco na barra do editor e substitua `orders` por uma coleção que sua conta pode ler.

```javascript
db.orders.find({ status: "open" }).limit(20)
```

Use o botão de execução ou pressione `⌘ + Enter` no macOS e `Ctrl + Enter` no Windows e Linux.

Abra a visualização em árvore ou JSON no painel de resultados para examinar objetos e listas aninhados. Ajuste o filtro ou a projeção antes de exportar se o resultado estiver incompleto.

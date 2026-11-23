---
title: "Cliente GUI y visor de bases SQLite | SqlKit"
description: "Abre un archivo SQLite local en SqlKit, lista sus tablas y vistas y exporta el resultado de una consulta."
---

# Cliente GUI y visor de bases SQLite

En **Conexiones → Agregar nueva conexión**, elige **SQLite**. Pulsa **Abrir...** para usar un archivo existente o **Nuevo...** para elegir dónde crear uno. Guarda la conexión y pulsa **Conectar**.

En **Consultas**, abre una tabla del árbol. También puedes listar las tablas y vistas con esta consulta.

```sql
SELECT type, name
FROM sqlite_schema
WHERE type IN ('table', 'view')
ORDER BY type, name;
```

Si esperabas datos y no aparecen, comprueba la ruta del archivo. Una base recién creada comienza sin tablas de usuario. Para un archivo cifrado con SQLCipher, elige **SQLCipher** e introduce su clave. [Guía del editor SQL](/es/docs/sqlkit/query-editor).

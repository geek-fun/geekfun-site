---
title: "Ejecutar la primera consulta SQL en SqlKit"
description: "Comprueba una conexión con SQL, revisa los resultados y guarda la consulta para volver a usarla."
---

# Ejecutar la primera consulta SQL en SqlKit

Después de [conectar una base de datos](/es/docs/sqlkit/connect-to-database), abre **Consultas** y pulsa **Nueva consulta**. Comprueba qué conexión y base aparecen en la pestaña. Ejecuta esta prueba:

```sql
SELECT 1 AS connection_check;
```

En Oracle, usa `SELECT 1 AS connection_check FROM dual;`. Pulsa **Ejecutar** y comprueba que el panel de resultados muestre `1`.

Selecciona una parte del SQL y pulsa `⌘ + Enter` en macOS o `Ctrl + Enter` en Windows y Linux para ejecutar solo la selección. Sin selección, el atajo ejecuta la sentencia bajo el cursor. **Ejecutar** en la barra procesa todo el editor.

En el árbol de objetos, haz doble clic en una tabla para abrir sus filas. Desde los resultados puedes exportar a CSV o JSON. Guarda el SQL con `⌘ + S` o `Ctrl + S`. Consulta los [atajos del editor](/es/docs/sqlkit/keyboard-shortcuts).

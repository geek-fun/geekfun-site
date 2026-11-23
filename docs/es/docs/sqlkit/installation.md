---
title: "Instalar SqlKit en macOS, Windows y Linux"
description: "Elige el instalador de SqlKit para tu sistema y prepara la primera conexión."
---

# Instalar SqlKit en macOS, Windows y Linux

En la [página de descargas de SqlKit](/es/download#sqlkit), elige el paquete de tu sistema. Los instaladores para Mac son universales (Apple Silicon e Intel). Los de Windows y Linux son para x64.

## macOS

Abre el archivo `.dmg` y arrastra SqlKit a **Aplicaciones**. Luego ábrelo desde esa carpeta.

## Windows

Ejecuta el instalador `.exe` o `.msi` y sigue los pasos que aparecen en pantalla. Al terminar, abre SqlKit desde el menú Inicio.

## Linux

- Debian y Ubuntu usan el paquete `.deb`. Desde la carpeta de descargas, ejecuta `sudo apt install ./paquete.deb` con el nombre real del archivo.
- Para Fedora, usa el paquete `.rpm` con `sudo dnf install ./paquete.rpm`.
- Para AppImage, da permiso de ejecución al archivo con `chmod +x ./archivo.AppImage` y ábrelo. Sustituye `archivo.AppImage` por el nombre descargado.

## Primera apertura

Abre **Conexiones** y [añade una base de datos](/es/docs/sqlkit/connect-to-database). MySQL, PostgreSQL, SQL Server y SQLite tienen controladores integrados. Si usas Oracle, la prueba de conexión comprueba los componentes de Java y JDBC.

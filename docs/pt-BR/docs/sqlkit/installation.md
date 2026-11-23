---
title: "Instalar o SqlKit no macOS, Windows e Linux"
description: "Encontre o instalador do SqlKit para seu sistema e veja como abrir o aplicativo pela primeira vez."
---

# Instalar o SqlKit no macOS, Windows e Linux

Na [página de download](/pt-BR/download#sqlkit), selecione o pacote do SqlKit para o seu sistema. O instalador do Mac funciona em Apple Silicon e Intel. Os pacotes de Windows e Linux são para x64.

## macOS

Abra o arquivo `.dmg`. Arraste o SqlKit para **Aplicativos** e abra o programa nessa pasta.

## Windows

Abra o instalador `.exe` ou `.msi` e siga as instruções. Depois, inicie o SqlKit pelo menu Iniciar.

## Linux

- No Debian ou Ubuntu, instale o `.deb` usando `sudo apt install ./pacote.deb` na pasta de downloads.
- No Fedora, use o `.rpm` com `sudo dnf install ./pacote.rpm`.
- Se escolher AppImage, dê permissão de execução com `chmod +x ./arquivo.AppImage` e abra o arquivo.

Troque os nomes nos comandos pelos nomes dos arquivos baixados.

## Primeiro acesso

Abra **Conexões** para [adicionar um banco de dados](/pt-BR/docs/sqlkit/connect-to-database). O SqlKit tem drivers integrados para MySQL, PostgreSQL, SQL Server e SQLite. Ao testar uma conexão Oracle, o app verifica os componentes Java e JDBC.

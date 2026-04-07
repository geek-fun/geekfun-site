---
title: DocKit Keyboard Shortcuts - Productivity Guide for DynamoDB Elasticsearch GUI
description: Complete list of DocKit keyboard shortcuts for efficient DynamoDB, Elasticsearch, OpenSearch management. Boost productivity with auto-complete, query execution, navigation shortcuts in desktop GUI client.
head:
  - - meta
    - name: keywords
      content: DocKit, shortcuts, keyboard shortcuts, productivity, efficiency
  - - link
    - rel: canonical
      href: https://www.geekfun.club/docs/dockit/shortcut
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/docs/dockit/shortcut
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/docs/dockit/shortcut
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/docs/dockit/shortcut
---

# DocKit Shortcuts Introduction

As a Desktop Application, DocKit provides a set of shortcuts to help users use DocKit more efficiently. This document
outlines the available shortcuts and corresponding actions.
These shortcuts are designed to streamline your workflow and enhance your productivity when working with DocKit to
manage your Elasticsearch/OpenSearch server.

## Shortcuts

| Feature         | Shortcut                                                        | Description                                                              | State              |
| --------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------ | ------------------ |
| General editing | `Ctrl/Cmd + I`                                                  | Auto indent current request.                                             | :white_check_mark: |
| General editing | `Ctrl/Cmd + /`                                                  | Comment/Uncomment line or block.                                         | :white_check_mark: |
| General editing | `Ctrl + Space`                                                  | Open Autocomplete (even if not typing).                                  | :white_check_mark: |
| General editing | `Ctrl/Cmd + Enter`                                              | Submit request.                                                          | :white_check_mark: |
| General editing | `Ctrl/Cmd + Up/Down`                                            | Jump to the previous/next request start or end.                          | :white_check_mark: |
| General editing | macOS: `Cmd + Alt + L`<br>Win/Linux: `Ctrl + Shift + L`         | Collapse/expand current scope.                                           | :white_check_mark: |
| General editing | macOS: `Cmd + Alt + 0`<br>Win/Linux: `Ctrl + Shift + F`         | Collapse all scopes but the current one.                                 | :white_check_mark: |
| General editing | macOS: `Cmd + Shift + Alt + 0`<br>Win/Linux: `Ctrl + Shift + E` | Expand all scopes.                                                       | :white_check_mark: |
| Autocomplete    | `Down arrow`                                                    | Switch focus to autocomplete menu. Use arrows to further select a term.  | :white_check_mark: |
| Autocomplete    | `Enter/Tab`                                                     | Select the currently selected or the top most term in autocomplete menu. | :white_check_mark: |
| Autocomplete    | `Esc`                                                           | Close autocomplete menu.                                                 | :white_check_mark: |
| Elasticsearch   | `Ctrl/Cmd + D`                                                  | Open documentation for current request.                                  | :white_check_mark: |

> **Platform note:** On Windows and Linux, `Ctrl+Shift+digit` is intercepted by the OS for input language switching. Letter keys (F=Fold, E=Expand) are used instead to ensure universal compatibility.

![dockit ui](/client-ui.png)

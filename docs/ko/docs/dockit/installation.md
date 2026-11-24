---
title: "macOS, Windows, Linux에 DocKit 설치하기"
description: "운영 체제에 맞는 DocKit 설치 파일을 받아 설치하고 앱을 처음 실행합니다."
---

# macOS, Windows, Linux에 DocKit 설치하기

[다운로드 페이지](/ko/download#dockit)에서 운영 체제에 맞는 DocKit 설치 파일을 선택합니다. Mac 설치 파일은 Apple Silicon과 Intel을 모두 지원합니다. Windows와 Linux 패키지는 x64용입니다.

## macOS

`.dmg` 파일을 열고 DocKit을 **응용 프로그램** 폴더로 끌어다 놓습니다. 복사가 끝나면 해당 폴더에서 앱을 실행합니다.

## Windows

`.exe` 또는 `.msi`를 실행하고 설치 프로그램의 안내를 따릅니다. 설치가 끝나면 시작 메뉴에서 DocKit을 엽니다.

## Linux

- Debian과 Ubuntu에서는 `.deb` 파일을 `sudo apt install ./package.deb`로 설치합니다.
- Fedora에서는 `.rpm` 파일을 `sudo dnf install ./package.rpm`으로 설치합니다.
- AppImage를 사용하려면 `chmod +x ./app.AppImage`로 실행 권한을 설정한 다음 파일을 엽니다.

명령의 파일 이름은 실제로 내려받은 이름으로 바꿉니다.

## 처음 실행하기

**+**를 눌러 [첫 연결을 추가합니다](/ko/docs/dockit/connect-to-server). 창을 닫아도 DocKit은 백그라운드에서 계속 실행되며 진행 중인 전송도 이어집니다. 앱을 완전히 종료하려면 메뉴 막대나 시스템 트레이에서 종료를 선택합니다.

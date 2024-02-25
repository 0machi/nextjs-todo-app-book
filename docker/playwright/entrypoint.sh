#!/bin/bash
# Xサーバ番号10に仮想ディスプレイを1920x1080x16で1枚作成
Xvfb :10 -screen 0 1920x1080x16 &
# x11vncを立ち上げ、localhostの5910ポートのみアクセスを許可
x11vnc -rfbport 5910 -forever -localhost &
# websockifyでホスト側のブラウザから8010ポートでコンテナの5910番ポートを見れるように橋渡し
websockify --web=/usr/share/novnc 8010 localhost:5910 &

npx playwright run-server --port 3001

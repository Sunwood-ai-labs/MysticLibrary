#!/bin/sh
set -e

CERT_DIR="/etc/nginx/certs"
CRT_FILE="$CERT_DIR/server.crt"
KEY_FILE="$CERT_DIR/server.key"

mkdir -p "$CERT_DIR"

if [ ! -f "$CRT_FILE" ] || [ ! -f "$KEY_FILE" ]; then
  echo "自己署名証明書を生成します..."
  openssl req -x509 -nodes -days 365 \
    -newkey rsa:2048 \
    -keyout "$KEY_FILE" \
    -out "$CRT_FILE" \
    -subj "/C=JP/ST=Tokyo/L=Tokyo/O=Example/OU=Dev/CN=localhost"
  echo "証明書生成完了: $CRT_FILE, $KEY_FILE"
else
  echo "証明書は既に存在します: $CRT_FILE, $KEY_FILE"
fi
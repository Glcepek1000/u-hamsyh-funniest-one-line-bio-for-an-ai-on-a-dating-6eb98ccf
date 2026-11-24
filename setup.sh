#!/bin/sh
# One-shot setup: no dependencies, no network, no secrets.
# Requires Node >= 22 (main.ts runs as native TypeScript).
set -eu
if ! command -v node >/dev/null 2>&1; then
  echo "error: node is required (version 22 or later)" >&2
  exit 1
fi
node --version
node main.ts
echo "wrote entry.txt:"
wc -c "${OUTPUT_DIR:-/output}/entry.txt"

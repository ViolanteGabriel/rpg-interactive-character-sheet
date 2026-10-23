#!/usr/bin/env bash
set -eu
SHEET_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
python3 "$SHEET_DIR/iniciar-ficha.py"

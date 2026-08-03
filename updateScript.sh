#!/usr/bin/env bash
# Generates nerdfont.csv and nerdfont.txt from the Nerd Fonts webfont.css build output.
# Usage: ./updateScript.sh [path/to/webfont.css]
set -euo pipefail

URL="https://www.nerdfonts.com/assets/css/webfont.css"
INPUT="${1:-webfont.css}"
downloaded=0

if [[ ! -f "$INPUT" ]]; then
  echo "Not found: $INPUT — downloading from $URL" >&2
  if command -v curl >/dev/null 2>&1; then
    curl -fsSL -o "$INPUT" "$URL"
  elif command -v wget >/dev/null 2>&1; then
    wget -qO "$INPUT" "$URL"
  else
    echo "Error: need curl or wget to download webfont.css" >&2
    exit 1
  fi
  downloaded=1
fi

exec 3> nerdfont.csv
exec 4> nerdfont.txt

while IFS=, read -r name code; do
  padded="00000000${code}"
  padded="${padded: -8}"
  printf '%s,%s,\U'"$padded"'\n' "$name" "$code" >&3
  printf '\U'"$padded"' %s\n' "${name//-/ }" >&4
done < <(
  grep -oE '\.nf-[A-Za-z0-9_-]+:before\{content:"\\[0-9a-fA-F]+"\}' "$INPUT" \
    | sed -E 's/^\.([A-Za-z0-9_-]+):before\{content:"\\([0-9a-fA-F]+)"\}$/\1,\2/' \
    | LC_ALL=C sort -t, -k1,1
)

exec 3>&- 4>&-

if [[ "$downloaded" -eq 1 ]]; then
  rm -f "$INPUT"
fi

echo "Wrote $(wc -l < nerdfont.csv) icons to nerdfont.csv and nerdfont.txt"

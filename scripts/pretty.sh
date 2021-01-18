#!/usr/bin/env bash
# set -x
set -euo pipefail
cd "`dirname "$0"`/.."

# for MAXFILE in `find dist -maxdepth 1 -name '*.json' -type f`; do
for MAXFILE in `find dist -name '*.json' -type f -maxdepth 1` `find dist -name '*.dat.json' -type f`; do
  # https://unix.stackexchange.com/questions/19654/how-do-i-change-the-extension-of-multiple-files
  MINFILE="${MAXFILE%.json}.min.json"
  echo "$MAXFILE -> $MINFILE"
  mv -f "$MAXFILE" "$MINFILE"
  node scripts/pretty.js < "$MINFILE" > "$MAXFILE"
  rm "$MINFILE"
done

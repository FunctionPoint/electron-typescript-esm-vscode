#!/bin/bash

# Exit script if a step fails
set -e
# Set working directory to script directory.
cd "$(dirname "$0")"

echo "==== Copy HTML to build"

cp src/index.html build/index.html

echo "==== Rename preload.js to .mjs"

# 2024-09-01:
# The preload.js script is an ESM module (just like the rest)
# The current Electron does need's it to have the *.mjs  extension
# Just copy it to be idempotent and not confuse VSCode.

cp build/preload.js build/preload.mjs

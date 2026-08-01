#!/bin/bash
# This script builds and tests the Counter project.

# Exit script if a step fails.
set -e
# Set working directory to script directory.
cd "$(dirname "$0")"

echo "==== Building: Electron"

# Build TypeScript

tsc

# Per-launch build step

./preLaunch.sh



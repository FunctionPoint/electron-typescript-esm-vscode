#!/bin/bash
# This script removes all installed / compiled / generated artifacts for this project.
# and remove installed NPM modules. To restore: npm install

# Exit script if a step fails.
set -e
# Change to script folder.
cd "$(dirname "$0")"

echo "Cleaning..."
rm -fr ./build

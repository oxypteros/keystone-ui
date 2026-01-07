#!/bin/bash

# Check https://mcr.microsoft.com/en-us/product/playwright/tags for updates
IMAGE="mcr.microsoft.com/playwright:v1.57.0-noble"

echo "📦 Starting Playwright in Podman ($IMAGE)..."
echo "🔗 Connecting to host network..."

# Run Podman
# --rm: Remove container after run
# -it: Interactive terminal (colors, output)
# --network host: Allows container to see localhost:3000 running on Fedora
# --userns=keep-id: CRITICAL. Maps your Fedora User ID to the Container User. 
# Without this, files created (like reports) will be owned by Root.
# -v $(pwd):/work/:Z : Mounts current dir. 
# :Z tells SELinux to allow the container to modify files.
podman run --rm -it \
  --network host \
  --userns=keep-id \
  -v "$(pwd):/work/:Z" \
  -w /work/ \
  $IMAGE \
   /bin/bash -c "
    npm config set update-notifier false &&
    npm config set fund false &&
    npm config set audit false &&
    npm install --loglevel=error &&
    npx playwright test
    "
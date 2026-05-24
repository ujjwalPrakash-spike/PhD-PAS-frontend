#!/bin/bash

git fetch origin ctc
git reset --hard origin/ctc

# Remove old packages and build files
rm -rf node_modules/ ./.next/

# Install dependencies and build
yarn install --frozen-lockfile
yarn build

# Start Server
yarn start

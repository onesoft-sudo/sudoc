#!/bin/sh

# build.sh -- Run helper scripts and build the project

dir="$(dirname "$0")"

node "$dir/init.ts"
node "$dir/genindexes.ts"
next build
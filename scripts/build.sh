#!/bin/sh

# build.sh -- Run helper scripts and build the project

dir="$(dirname "$0")"

node "$dir/generate-sitemap.mts"
node "$dir/generate-page-index.mts"
next build
#!/bin/bash

npm run build:prod

echo "Replace docs"
rm -rf docs
cp -r dist docs
git add docs --all
git commit -m "Release to docs"
git push

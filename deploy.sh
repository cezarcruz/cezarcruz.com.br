#!/bin/bash

# Commit changes.
msg="rebuilding site `date`"

if [ $# -eq 1 ]
  then msg="$1"
else
  echo "Forneca uma mensagem para o commit."
  exit 1
fi

cp ads.txt public/

echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"

# Build the project.
hugo -t mainroad # if using a theme, replace by `hugo -t <yourtheme>`

# Go To Public folder
cd public
# Add changes to git.
git add -A

git commit -m "$msg"

# Push source and build repos.
git push origin master

# Come Back
cd ..

git add -A

git commit -m "$msg"

git push origin master

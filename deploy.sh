#!/bin/bash

set -e

REMOTE=$(git remote get-url origin)

DEPLOY_BRANCH="master"
DEPLOY_DIR="dist"
DEPLOY_DIR2="apps"

echo "Checking for yarn..."
if ! command -v yarn; then
	echo "Yarn not available, please ensure it is installed"
	exit 1
fi

if ! [ -d "node_modules" ]; then
	yarn
fi

echo "Removing previous deployment..."
rm -rf dist || /bin/true

echo "Building deployment..."
if ! yarn build; then
	echo "Failed to build deployment, exiting."
fi

#  cd $DEPLOY_DIR

echo "Initializing git in build directory.."
git init . -b master
git remote add origin $REMOTE
git fetch origin $DEPLOY_BRANCH

echo "Deploying..."
git add .
git commit -m "Deployment to ubacm.org"
git push --force origin master


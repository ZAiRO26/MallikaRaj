#!/bin/bash
set -e

echo "Starting build process..."

# Navigate to the React app directory
cd gucci-clone

echo "Installing dependencies..."
npm ci --legacy-peer-deps

echo "Building React app..."
npm run build

echo "Build completed successfully!" 
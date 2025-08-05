#!/bin/bash
set -e

echo "Starting build process..."

# Navigate to the React app directory
cd gucci-clone

echo "Current directory: $(pwd)"
echo "Listing contents:"
ls -la

echo "Checking if public/index.html exists..."
if [ ! -f "public/index.html" ]; then
    echo "ERROR: public/index.html not found!"
    echo "Contents of public directory:"
    ls -la public/
    exit 1
fi

echo "Installing dependencies..."
npm ci --legacy-peer-deps

echo "Building React app..."
npm run build

echo "Checking build output..."
if [ ! -d "build" ]; then
    echo "ERROR: build directory not created!"
    exit 1
fi

echo "Build completed successfully!"
echo "Build directory contents:"
ls -la build/ 
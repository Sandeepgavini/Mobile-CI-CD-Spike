#!/bin/bash
set -ex

# Install dependencies
npm install

# Build the app
react-native ci --platform android

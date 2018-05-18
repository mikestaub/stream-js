#!/bin/bash
set -e
./node_modules/.bin/webpack
npm test
./bin/coveralls.sh
if [ "$(node --version)" == "v6.7.0" ]; then
    ./node_modules/.bin/eslint src/**/*.js;
    ./node_modules/.bin/dtslint types/getstream
fi
npm install -g bower
bower install getstream

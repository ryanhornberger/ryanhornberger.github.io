#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

echo '--------------'
echo 'watching'
echo '--------------'

node --harmony $DIR/../node_modules/webpack/bin/webpack.js --watch --config $DIR/../webpack.config.js 
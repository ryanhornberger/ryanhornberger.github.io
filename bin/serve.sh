#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

echo '--------------'
echo 'serving'
echo '--------------'

node --harmony $DIR/../_compiled/server.js
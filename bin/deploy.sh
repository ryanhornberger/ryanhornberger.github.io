#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

echo '--------------'
echo 'deploying to github'
echo '--------------'

REV=`git rev-parse HEAD`
REVSUB=${REV:0:8}

echo ''
echo "building revision $REVSUB"
echo '--------------'

node --harmony $DIR/../node_modules/webpack/bin/webpack.js --config $DIR/../webpack.config.babel.js 

echo ''
echo 'preparing _deployed submodule'
echo '--------------'

cd $DIR/../
git submodule init
git submodule update
cd $DIR/../_deployed/
git pull

rm -fr $DIR/../_deployed/*
cp -r $DIR/../_compiled/public/* $DIR/../_deployed/
cp $DIR/../CNAME $DIR/../_deployed/CNAME
git add .
git commit -m "Site updated to revision $REVSUB"

echo ''
echo 'deploying'
echo '--------------'

git push origin master

cd $DIR/../
git add .
git commit -m "Site updated to revision $REVSUB"
git push origin development

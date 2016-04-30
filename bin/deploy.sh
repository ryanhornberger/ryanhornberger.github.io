#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

echo '--------------'
echo 'deploying to github'
echo '--------------'

echo ''
echo 'building'
echo '--------------'

node --harmony $DIR/../node_modules/webpack/bin/webpack.js --config $DIR/../webpack.config.babel.js 

echo ''
echo 'deploying'
echo '--------------'

rm -rf $DIR/../../tmp/
mkdir $DIR/../../tmp/
mv $DIR/../_compiled/public/* $DIR/../../tmp/
mv $DIR/../CNAME $DIR/../../tmp/
mv $DIR/../node_modules/ $DIR/../../node_modules/
git checkout master
rm -rf $DIR/../*
mv $DIR/../../tmp/* .

#
#      system "mv dist/* #{tmp}"
#      system 'git checkout master'
#      system 'rm -rf ./*'
#      system 'rm -rf ./.sass-cache'
#      system "mv #{tmp}/* ."
#      message = "Site updated at #{Time.now.utc}"
#      system 'git add .'
#      system "git commit -am #{message.shellescape}"
#      system 'git push origin master'
#      system 'git checkout development'
#      system "echo 'Deployed to GitHub'"#
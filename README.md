# www.ryanhornberger.com

This site is built using an isomorphic react application.

## Prerequisits

This site expects node v4.2.2. Ensure that is installed before proceeding.

Development happens on the 'development' branch and deploys go to the 'master' branch

## Setup

    git clone https://github.com/ryanhornberger/ryanhornberger.github.io.git ryanhornberger.github.io.git
    cd ryanhornberger.github.io.git
    npm install

## Run

    ./bin/watch.sh

and from another terminal

    ./bin/serve.sh

## Deploy

This project deploys to github pages. The 'development' branch maintains a git-submodule referencing the 'master' 
branch in the directory named '_deployed'. The deploy script compiles the current site, copies the static files
into the '_deployed' directory and pushes up the submodule (thus the master branch).

  ./bin/deploy.sh
  
## Understanding a few things

The site, when run locally is running off of a node-express server. It is capable of serving files without precompiling
any of the html pages.

The config.jsx can be configured to output precompiled assets for any url the server can handle. I use these precompiled
assets to publish on github pages so I don't need a node server running to host the site.

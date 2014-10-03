RyanHornberger.com
==================

This site is powered by Jekyll using ruby and the rake gem.

## Prerequisits

This application requires Ruby to build. Look at .ruby-version for the current ruby version needed. Make sure you are using that version of ruby before you proceed. On OSX I currently recommend using RVM to load up the appropriate ruby. 

	< install the appropriate version of ruby >
	
This application is also set up to use Bower for web library package management. Bower requires you have access to node.js. So install Node.js from their install tools on their website.

	< install the appropriate version of node.js >

Once you have node.js installed. Make sure you install bower.
	
	sudo npm install -g bower


## Setup

Once you are ready to build, 'cd' to this application directory and run the following commands to get ready to work:

	gem install bundle
	bundle install


## Development
	rake app:serve     # compile and serve static site
	rake app:watch     # compile and serve static site (watch for changes)


## Deployment
	rake app:generate  # Generate blog files
	rake app:publish   # Generate and publish blog GitHub
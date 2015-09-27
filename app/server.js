'use strict';

import express from 'express';
import path from 'path';
import fs from 'fs';
import app from './app';

class Server {

  	constructor(setupCallback) {
	  	this.express = express();

	  	setupCallback(this.express);

	  	// default page not found handling
		this.express.use(function(req, res, next){
			res.status(404).send('404 - Page not found');
		});

		// default runtime exceptions error handler
		this.express.use(function(err, req, res, next) {
			console.error(err);
			res.status(err.status || 500).send('Error');
		});
  	}

  	start() {
  		var port = process.env.PORT || 8080;
  		this.express.set('port', port);

		var listener = this.express.listen(port, function() {
			console.log('~~~~~~~~~~~~~~~~~~~~~');
			console.log('NODE ENV: ' + process.env.NODE_ENV);
			console.log('Express server listening on port ' + port);
			console.log('~~~~~~~~~~~~~~~~~~~~~');
		});
  	}

}

var server = new Server(function(express){
	express.use(app);
});

server.start();

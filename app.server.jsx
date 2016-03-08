'use strict';

import express from 'express';
import app from './app';

var server = express();
server.use(app);

//Runtime exceptions error handler
server.use(function(err, req, res, next) {
    console.log(err);
    res.status(err.status || 500).send('error');
});

server.set('port', process.argv[3] || process.env.PORT || 8080);

var listener = server.listen(server.get('port'), function() {
    console.log('------------------------------------------------');
    console.log('NODE_ENV: ' + process.env.NODE_ENV);
    console.log('COMPILE_TIME: ' + COMPILE_TIME);
    console.log('Express server listening on port ' + server.get('port'));
    console.log('------------------------------------------------');
}.bind(this));
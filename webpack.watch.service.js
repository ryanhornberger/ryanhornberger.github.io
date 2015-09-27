'use strict';

var webpack = require('webpack');
var path = require('path');
var WebpackServerWatcher = require('webpack-server-watcher');

//paths
var webpackConfigPath = path.join(__dirname, 'webpack.config.js');
var compiledServerPath = path.join(__dirname, '_compiled', 'server.js');

//prepare the compiler 
var webpackConfig = require(webpackConfigPath);
var compiler = webpack(webpackConfig);

//start the server watcher
var webServerWatcher = new WebpackServerWatcher(compiler, compiledServerPath);
webServerWatcher.watch();
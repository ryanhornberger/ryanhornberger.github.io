'use strict';

var path = require('path');

var epicenter = require('epicenter');
{
	epicenter.configure({
		rootPath: __dirname
	})
}

var webpackConfigs = epicenter.clearCompiledFiles().buildWebpackConfigs();

// NOTICE: you can modify the configs for custom settings here (as needed).
// simply modify the webpackConfigs array to your desired specifications.

module.exports = webpackConfigs;

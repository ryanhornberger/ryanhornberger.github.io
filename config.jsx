'use strict';

export default {

	// -- precompile configuration
	// this application can be precompiled to static files for serving on a static site service
	// enable and configure the precompile here
	serveAsPrecompiledAssets: true,
	precompile: 
	{
		paths: 
		[
			'/',
		    '/404.html',
		    '/portfolio/one'
		]
	}

};
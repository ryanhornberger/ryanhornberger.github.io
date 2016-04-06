'use strict';

import express from 'express';
import path from 'path';
import config from 'config';
import ServerRenderer from 'isomorphicTools/ServerRenderer';

console.log('Config: ', JSON.stringify(config, null, 4));

class App 
{
    constructor(options) 
    {
        this.router = express.Router();
        this.serverRenderer = new ServerRenderer(0);

        // this site is an isomorphic (universal) reactjs web application.
        // every page request is "routed" through the ServerRenderer class which takes
        // the request path and produces the response.

        // If you would prefer you can serve all static pages by first precompiling them
        // into static files by setting 'config.serveAsPrecompiledAssets = true'. You will
        // also need to add each path you want precompiled to the "PrecompiledPaths.js" file.

            if (config.serveAsPrecompiledAssets) 
            {

                this.router.use(express.static(path.join('_compiled', 'public'),{
                    redirect: false
                }));

            }

        // Otherwise the application will be served directly through this server.

            else
            {

                this.router.use('*', function(req, res, next) 
                {
                    var results = this.serverRenderer.render(req.originalUrl);
                    if (results.document) {
                        res.status(200);
                        res.type('html');
                        res.send(results.document);
                    } else if (results.redirect) {
                        res.redirect(302, results.redirect.pathname);
                    } else {
                        next();
                    };
                }.bind(this));

                this.router.use(express.static(path.join('_compiled', 'public'),{
                    redirect: false
                }));

                this.router.use('*', function(req, res, next) 
                {
                    res.status(404);
                    res.type('html');
                    res.send('page not found');
                }.bind(this));
            }

        // 
    }

}

export default new App().router;

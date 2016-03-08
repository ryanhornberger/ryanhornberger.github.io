'use strict';

import express from 'express';
import path from 'path';

class App 
{

    constructor(options) 
    {
        this.router = express.Router();

        // precompiled and static resources first
        this.router.use(express.static(path.join('_compiled', 'public'),{
            redirect: false
        }));

        /*
        // this is where you can bind the react application for server side render
        // it would look something like this:

        import ServerRender from 'ServerRenderer'

        // the the react application
        this.router.use('*', function(req, res) 
        {
            new ServerRenderer(0).render(req.originalUrl}, function(x, document) {
                if (document) {
                    res.status(200);
                    res.type('html');
                    res.send(document);
                }
            });
        });
        */
    }

}

export default new App().router;

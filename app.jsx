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
    }

}

export default new App().router;

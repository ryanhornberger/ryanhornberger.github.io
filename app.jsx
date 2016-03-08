'use strict';

import express from 'express';
import path from 'path';

class App {

    constructor(options) {

        this.router = express.Router();

        // precompiled and static resources
        this.router.use(express.static(path.join('_compiled', 'public')));
    }

}

export default new App().router;

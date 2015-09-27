'use strict';

// Now begin the imports
import express from 'express';
import path from 'path';
import fse from 'fs-extra';
import jsDemoRouter from 'jsdemo/jsDemoRouter.js';

class App {

    constructor(options) {
        this.router = express.Router();
 
        //NOTICE: Place additional routing logic here

        //jsdemo server side
        this.router.use('/js-demo/dynamic-page', jsDemoRouter);

		//search compiled files next
		this.router.use(express.static(path.join(__dirname, '..', '_compiled', 'precompiled')));
		//then search static files
		this.router.use(express.static(path.join(__dirname, 'static')));

		//NOTICE: or maybe place additional routing logic here

		//App 404 handling
		this.router.use(function(req, res, next){
			res.status(404).send(fse.readFileSync(path.join(__dirname, '..', '_compiled', 'precompiled','404.html'), 'utf8')); 
		});		
    }
    
}

export default new App().router;

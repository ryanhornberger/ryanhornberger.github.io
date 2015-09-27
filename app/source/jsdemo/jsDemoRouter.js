'use strict';

import express from 'express';
import RenderBoxes from 'jsdemo/components/RenderBoxes.js';

class JsDemoRouter {

    constructor(options) {
        this.router = express.Router();
 
        this.router.use(function(req, res, next){
			
			// uses the same code as the demo's client side javascript
			var boxes = new RenderBoxes(200,200).render();
			
			res.send(boxes + '<link rel="stylesheet" href="/index.css" /><style>body{background-color:#ddddff;}</style>'); 

		});		
    }
    
}

export default new JsDemoRouter().router;
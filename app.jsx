'use strict';

import express from 'express';
import path from 'path';

import React, { Component, PropTypes } from 'react';
import ReactDOMServer from 'react-dom/server';
import Helmet from 'react-helmet';

import HelmetWrapper from 'app/helmet';
import WebApp from 'app/app';

class App 
{

    constructor(options) 
    {
        this.router = express.Router();

        // precompiled and static resources first
        this.router.use(express.static(path.join('_compiled', 'public')));

        // the the react application
        this.router.use('*', function(req, res){
			var appHtml = ReactDOMServer.renderToStaticMarkup(new WebApp().render());
            
            let head = Helmet.rewind();
            
            var pageHtml = ReactDOMServer.renderToStaticMarkup(new HelmetWrapper({
                head: head,
                appHtml: appHtml
            }).render());
			
            var html = '<!DOCTYPE html>{{page}}'.replace('{{page}}', pageHtml);
			
            res.type('html');
			res.send(html);
        });
    }

}

export default new App().router;

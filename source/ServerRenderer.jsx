'use strict';

import React, { Component, PropTypes } from 'react';
import ReactDOMServer from 'react-dom/server';
import Helmet from 'react-helmet';

import { match, RoutingContext } from 'react-router';
import Routes from 'app/routes';

import HelmetWrapper from 'app/helmet';

var routes = new Routes().render();

module.exports = function render(locals, callback) {
	var url = locals.path;

	var result = null;

	match({ routes, location: url }, function(error, redirectLocation, renderProps)
    {
    	if (renderProps) {
    		var content = ReactDOMServer.renderToStaticMarkup(<RoutingContext 
	            history={renderProps.history} 
	            createElement={renderProps.createElement}
	            location={renderProps.location}
	            routes={renderProps.routes}
	            params={renderProps.params}
	            components={renderProps.components}
	            />);

    		var head = Helmet.rewind();

	        var pageHtml = ReactDOMServer.renderToStaticMarkup(new HelmetWrapper({
	            head: head,
	            content: content
	        }).render());

	        result = '<!DOCTYPE html>{{page}}'.replace('{{page}}', pageHtml);
    	}
    });

	callback(null, result);


	/* this is how I did it before I tried precompiled

	match({ routes, location: req.originalUrl }, function(error, redirectLocation, renderProps)
    {
        
        if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search);
            return;
        }

        var content = null;
        
        if (error) {
        
            res.status(500);

            content = error.message;
        
        } else if (renderProps) {

            res.status(200);
        
            content = ReactDOMServer.renderToStaticMarkup(<RoutingContext 
                history={renderProps.history} 
                createElement={renderProps.createElement}
                location={renderProps.location}
                routes={renderProps.routes}
                params={renderProps.params}
                components={renderProps.components}
                />);

        } else {

            res.status(404);

            content = '404 - Not found';

        }

        var head = Helmet.rewind();

        var wrappedHtml = ReactDOMServer.renderToStaticMarkup(new HelmetWrapper({
            head: head,
            content: content
        }).render());

        res.type('html');
        res.send(
            '<!DOCTYPE html>{{page}}'.replace('{{page}}', wrappedHtml)
        );
    });
    */

    /*
    This was how I did it before React-Router

    import WebApp from 'app/app';

	var appHtml = ReactDOMServer.renderToStaticMarkup(new WebApp().render());
    
    let head = Helmet.rewind();
    
    var pageHtml = ReactDOMServer.renderToStaticMarkup(new HelmetWrapper({
        head: head,
        appHtml: appHtml
    }).render());
	
    var html = '<!DOCTYPE html>{{page}}'.replace('{{page}}', pageHtml);
	
    res.type('html');
	res.send(html);
    */
};
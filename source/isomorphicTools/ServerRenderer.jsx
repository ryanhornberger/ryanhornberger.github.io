'use strict';

import React, { Component, PropTypes } from 'react';
import ReactDOMServer from 'react-dom/server';
import Helmet from 'react-helmet';

import { match, RoutingContext } from 'react-router';
import Routes from 'app/routes';

import ServerHelmetWrapper from 'isomorphicTools/ServerHelmetWrapper';

var routes = new Routes().render();

class ServerRenderer
{
    constructor(trim)
    {
        this.trim = trim;
    }

    render(url) 
    {
        var result = null;

        match({ routes, location: url.substring(this.trim) }, function(error, redirectLocation, renderProps)
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

                var pageHtml = ReactDOMServer.renderToStaticMarkup(new ServerHelmetWrapper({
                    head: head,
                    content: content
                }).render());

                result = {
                    error: error,
                    redirect: redirectLocation,
                    document: '<!DOCTYPE html>{{page}}'.replace('{{page}}', pageHtml)
                };
            } else {
                result = {
                    error: error,
                    redirect: redirectLocation,
                    document: null
                };
            }
        });

        return result;
    }
}

module.exports = ServerRenderer;

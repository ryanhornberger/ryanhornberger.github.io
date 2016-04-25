'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Redirect, IndexRedirect } from 'react-router';
import HomePage from 'com/ryanhornberger/routes/home/HomePage2';

var routes = (
	<Route path="/">

	    <IndexRoute component={HomePage} />

	</Route>
);

/*
	import AsdfPage from 'app/routes/asdf/index'

	    <Route path="asdf/">
	        <IndexRoute component={AsdfPage} />
	    </Route>
	    <Redirect from="asdf" to="asdf/" />
*/

class Routes extends React.Component 
{
	
	render()
	{
		var history = this.props ? this.props.history : null;

		return (
			<Router history={history}>
                
                {routes}

            </Router>
		);
	}
		
}

module.exports = Routes;

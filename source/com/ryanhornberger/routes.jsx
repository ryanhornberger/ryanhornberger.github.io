'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Redirect, IndexRedirect } from 'react-router';
import HomePage from 'com/ryanhornberger/routes/home/HomePage';
import FourOhFour from 'com/ryanhornberger/routes/404';

import PortfolioOne from 'com/ryanhornberger/routes/portfolio/1/PortfolioOnePage';


var routes = (
	<Route path="/">

	    <IndexRoute component={HomePage} />

	    <Route path="/portfolio/one" component={PortfolioOne} />
		
	    <Route path="404.html" component={FourOhFour} />

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

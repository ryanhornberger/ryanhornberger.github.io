'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Redirect, IndexRedirect } from 'react-router';
import HomePage from 'app/routes/index';
import AsdfPage from 'app/routes/asdf/index'

class Routes extends React.Component 
{
	
	render()
	{
		return (
			<Router>
                
                <Route path="/">
                    <IndexRoute component={HomePage} />

                    <Route path="asdf/">
                        <IndexRoute component={AsdfPage} />
                    </Route>
                    <Redirect from="asdf" to="asdf/" />
                    
                </Route>

            </Router>
		);
	}
		
}

module.exports = Routes;

'use strict'

import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';

class App extends React.Component 
{
	
	render()
	{
		return (
			<div className="page">
				<Helmet title="My Title" />

				App content here

			</div>
		);
	}
		
}

module.exports = App;

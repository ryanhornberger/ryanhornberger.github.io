'use strict'

import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';

class HomePage extends React.Component 
{
	
	render()
	{
		return (
			<div>
				<Helmet title="Homepage TITLE!" />
				Homepage!
			</div>
		);
	}
		
}

module.exports = HomePage;

'use strict'

import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';

class Spring2016Template extends React.Component 
{

	render()
	{
		return (
			<div>
				<Helmet 
					link={[
						
						// site.scss
						{
							"rel": "stylesheet", 
							"type": "text/css", 
							"href": "/site.css"
						}
						
					]}
				/>

				<h1>Spring 2016 Template</h1>

				{this.props.children}

			</div>
		);
	}
		
}

module.exports = Spring2016Template;

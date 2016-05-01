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
						
						// normalize.css
						{
							"rel": "stylesheet", 
							"type": "text/css", 
							"href": "/assets/normalize.css"
						},

						// site.scss
						{
							"rel": "stylesheet", 
							"type": "text/css", 
							"href": "/site.css"
						}

					]}
				/>

				{this.props.children}
				
			</div>
		);
	}
		
}

module.exports = Spring2016Template;

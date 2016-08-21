'use strict'

import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import Clock from 'com/ryanhornberger/routes/portfolio/1/Clock';

// The component
class PortfolioOnePage extends React.Component 
{
	render()
	{
		return (
			<div>
				
				<Helmet 
					title="Portfolio 1 - Ryan Hornberger" 
					link={[
						{
							"rel": "stylesheet", 
							"type": "text/css", 
							"href": "/assets/normalize.css"
						},
						{
							"rel": "stylesheet", 
							"type": "text/css", 
							"href": "/portfolio/1/PortfolioOne.css"
						}
					]}
					meta={[
	                    {"name": "viewport", "content": "width=device-width, initial-scale=1, user-scalable=no"}
	                ]}
				/>

				<div id="page">

					<div id="clock1">
						<Clock />
					</div>

					<div id="clock2">
						<Clock />
					</div>
					
					<div id="clock4">
						<Clock />
					</div>

					<div id="clock3">
						<Clock />
					</div>

				</div>

			</div>
		);
	}
		
}

module.exports = PortfolioOnePage;

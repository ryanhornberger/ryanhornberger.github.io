'use strict'

import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';

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

					<div id="clock">
						<svg width="100%" viewBox="0 0 200 200">
							<circle cx="100" cy="100" r="99" stroke="#eeeeee" strokeWidth="2" fill="#333333" />
							<path stroke="#ff0000" strokeWidth="1" d="
								M 0 0
								L 200 200
								M 0 200
								L 200 0
							" />
							<path fill="transparent" stroke="#00ff00" strokeWidth="1" d="
								M 190 100
								L 196 100
								A 96 96 0 0 0 4 100
							" />
							<circle cx="100" cy="100" r="93" stroke="#eeeeee" strokeWidth="6" strokeDasharray="583.33" strokeDashoffset="200" fill="#333333" />
						</svg>
					</div>

				</div>

			</div>
		);
	}
		
}

module.exports = PortfolioOnePage;

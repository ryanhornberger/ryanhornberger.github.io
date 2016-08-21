'use strict'

import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';


// Configurations
var dashCircleRadius = 93;

// Calculations
var dashCircleStrokeDasharray = function(){
	var c = Math.PI*(dashCircleRadius*2);
	var strokeSize = c / 24; // (24 hours per day)
	return "" + (strokeSize - 1) + ",1"; //We are going to give 1 to the space in between
}();


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
							<circle cx="100" cy="100" r={dashCircleRadius} stroke="#eeeeee" strokeWidth="6" strokeDasharray={dashCircleStrokeDasharray} fill="#333333" />
						</svg>
					</div>

				</div>

			</div>
		);
	}
		
}

module.exports = PortfolioOnePage;

'use strict'

import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';


// Configurations
var canvasHW = 200;
var clockCircleRadius = 93;
var clockCircleDayColor = "#eeeeee";
var clockCircleNightColor = "#aaaaaa";

// Calculations
var halfwayHW = canvasHW / 2;

var viewBox = function(){
	return `0 0 ${canvasHW} ${canvasHW}`;
}();

var clockCircleArcStartPosition = function(){
	return `${halfwayHW - clockCircleRadius} ${halfwayHW}`;
}();

var clockCircleArcEndPosition = function(){
	return `${halfwayHW + clockCircleRadius} ${halfwayHW}`;
}();

var clockCircleCircumference = Math.PI*(clockCircleRadius*2);

var clockCircleStrokeDasharray = function(){
	var strokeSize = clockCircleCircumference / 24; // (24 hours per day)
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
						<svg width="100%" viewBox={viewBox}>
							
							{/*Clock top - day hours - lighter*/}
							<path fill="transparent" stroke={clockCircleDayColor} strokeWidth="6" strokeDasharray={clockCircleStrokeDasharray} strokeDashoffset="0" d={`
								M ${clockCircleArcStartPosition}
								A ${clockCircleRadius} ${clockCircleRadius} 0 0 1 ${clockCircleArcEndPosition}
							`} />

							{/*Clock bottom - night hours - darker*/}
							<path fill="transparent" stroke={clockCircleNightColor} strokeWidth="6" strokeDasharray={clockCircleStrokeDasharray} strokeDashoffset="-1" d={`
								M ${clockCircleArcStartPosition}
								A ${clockCircleRadius} ${clockCircleRadius} 0 0 0 ${clockCircleArcEndPosition}
							`} />

							{/*Next step*/}
							<circle cx={halfwayHW} cy={halfwayHW} r="99" fill="transparent" stroke="#eeeeee" strokeWidth="2" strokeDashoffset="300" strokeDashoffset="300" />
							
						</svg>
					</div>

				</div>

			</div>
		);
	}
		
}

module.exports = PortfolioOnePage;

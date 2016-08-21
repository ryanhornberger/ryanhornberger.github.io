'use strict'

import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';


// Configurations
var canvasHW = 200;

var clockCircleRadius = 93;
var clockCircleDayColor = '#eeeeee';
var clockCircleNightColor = '#aaaaaa';

var callableHoursRadius = 87;
var callableHoursColor = '#eeeeee';

var clockHoursStyle = {
	fontFamily: "'Helvetica Neue' Helvetica",
	fontSize: '3',
    fill: '#333333'
};

var indicatorRadius = 3.25;
var indicatorSelecteRadius = 6.5;

var indicatorSelectedTextStyle = {
	fontFamily: "'Helvetica Neue' Helvetica",
	fontSize: '16',
    fill: '#eeeeee'
};


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

var callableHoursCircumference = Math.PI*(callableHoursRadius*2);
var callableHoursStrokeDashoffset = function(){
	return callableHoursCircumference / 3 * 2;
}();
var callableHoursStrokeDasharray = function() {
	return `0,${(callableHoursCircumference/24*15)},${(callableHoursCircumference/24*8)-1},${(callableHoursCircumference/24*1)+1}`;
}();
var nonCallableHoursStrokeDasharray = function() {
	return `0,${callableHoursCircumference/24*4},${(callableHoursCircumference/24*10)-1},${(callableHoursCircumference/24*10)+1}`;
}();


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

					<div id="clock">
						<svg width="100%" viewBox={viewBox}>
							
							{/*Clock top - day hours - lighter*/}
							<path stroke={clockCircleDayColor} strokeWidth="6" strokeDasharray={clockCircleStrokeDasharray} strokeDashoffset="0" fill="transparent" d={`
								M ${clockCircleArcStartPosition}
								A ${clockCircleRadius} ${clockCircleRadius} 0 0 1 ${clockCircleArcEndPosition}
							`} />

							{/*Clock bottom - night hours - darker*/}
							<path stroke={clockCircleNightColor} strokeWidth="6" strokeDasharray={clockCircleStrokeDasharray} strokeDashoffset="-1" fill="transparent" d={`
								M ${clockCircleArcStartPosition}
								A ${clockCircleRadius} ${clockCircleRadius} 0 0 0 ${clockCircleArcEndPosition}
							`} />

							{/*Callable hours*/}
							<circle cx={halfwayHW} cy={halfwayHW} r={callableHoursRadius} stroke={clockCircleDayColor} strokeWidth="2" strokeDasharray={callableHoursStrokeDasharray} fill="transparent" />
							
							{/*Non-callable hours*/}
							<circle cx={halfwayHW} cy={halfwayHW} r={callableHoursRadius} stroke={clockCircleNightColor} strokeWidth="2" strokeDasharray={nonCallableHoursStrokeDasharray} fill="transparent" />
							
							{/*Hour markers*/}
							<text x="5" y="104" style={clockHoursStyle} >6A</text>
							<text x="15.75" y="57.5" style={clockHoursStyle} >8A</text>
							<text x="30" y="37.5" style={clockHoursStyle} >9A</text>
							<text x="93" y="8" style={clockHoursStyle} >12P</text>
							<text x="187" y="74" style={clockHoursStyle} >5P</text>
							<text x="191" y="98" style={clockHoursStyle} >6P</text>
							<text x="147.5" y="179.5" style={clockHoursStyle} >10P</text>
							<text x="102" y="193.75" style={clockHoursStyle} >12A</text>
							
							{/*Dot indicators*/}
							<circle cx="100" cy="24.5" r={indicatorSelecteRadius} fill={clockCircleDayColor} transform="rotate(0 100 100)" />
							<circle cx="100" cy="22" r={indicatorRadius} fill={clockCircleDayColor} transform="rotate(15 100 100)" />
							<circle cx="100" cy="22" r={indicatorRadius} fill={clockCircleDayColor} transform="rotate(30 100 100)" />
							<circle cx="100" cy="22" r={indicatorRadius} fill={clockCircleDayColor} transform="rotate(45 100 100)" />
							<circle cx="100" cy="22" r={indicatorRadius} fill={clockCircleDayColor} transform="rotate(60 100 100)" />
							<circle cx="100" cy="22" r={indicatorRadius} fill={clockCircleDayColor} transform="rotate(75 100 100)" />

							<circle cx="100" cy="22" r={indicatorRadius} fill={clockCircleDayColor} transform="rotate(90 100 100)" />
							<circle cx="100" cy="22" r={indicatorRadius} fill={clockCircleDayColor} transform="rotate(105 100 100)" />
							<circle cx="100" cy="22" r={indicatorRadius} fill={clockCircleDayColor} transform="rotate(120 100 100)" />
							<circle cx="100" cy="22" r={indicatorRadius} fill={clockCircleDayColor} transform="rotate(135 100 100)" />
							<circle cx="100" cy="22" r={indicatorRadius} fill={clockCircleDayColor} transform="rotate(150 100 100)" />
							<circle cx="100" cy="22" r={indicatorRadius} fill={clockCircleDayColor} transform="rotate(165 100 100)" />
									
							<circle cx="100" cy="22" r={indicatorRadius} fill={clockCircleDayColor} transform="rotate(180 100 100)" />
							<circle cx="100" cy="22" r={indicatorRadius} fill={clockCircleDayColor} transform="rotate(195 100 100)" />
							<circle cx="100" cy="22" r={indicatorRadius} fill={clockCircleDayColor} transform="rotate(210 100 100)" />
							<circle cx="100" cy="22" r={indicatorRadius} fill={clockCircleDayColor} transform="rotate(225 100 100)" />
							<circle cx="100" cy="22" r={indicatorRadius} fill={clockCircleDayColor} transform="rotate(240 100 100)" />
							<circle cx="100" cy="22" r={indicatorRadius} fill={clockCircleDayColor} transform="rotate(255 100 100)" />
							
							<circle cx="100" cy="22" r={indicatorRadius} fill={clockCircleDayColor} transform="rotate(270 100 100)" />
							<circle cx="100" cy="22" r={indicatorRadius} fill={clockCircleDayColor} transform="rotate(285 100 100)" />
							<circle cx="100" cy="22" r={indicatorRadius} fill={clockCircleDayColor} transform="rotate(300 100 100)" />
							<circle cx="100" cy="22" r={indicatorRadius} fill={clockCircleDayColor} transform="rotate(315 100 100)" />
							<circle cx="100" cy="22" r={indicatorRadius} fill={clockCircleDayColor} transform="rotate(330 100 100)" />
							<circle cx="100" cy="22" r={indicatorRadius} fill={clockCircleDayColor} transform="rotate(345 100 100)" />
							
							{/*Selected text*/}
							<text x="100" y="104" textAnchor="middle" style={indicatorSelectedTextStyle}>Los Angeles</text>

						</svg>
					</div>

				</div>

			</div>
		);
	}
		
}

module.exports = PortfolioOnePage;

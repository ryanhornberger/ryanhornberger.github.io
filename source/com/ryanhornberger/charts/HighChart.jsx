'use strict'

import React, { Component, PropTypes } from 'react';
import Highcharts from 'highcharts/highstock';

// Loading Highcharts modules
/*
	//First load the modules you want

		var Funnel = require('highcharts/modules/funnel');		

	//Then in render make sure you pass a "modules" parameter 

		<HighChart container='chart' modules={[Funnel]} options={{
			series: [{
				data: [1, 3, 2, 4]
			}],
		}} />
*/

class HighChart extends React.Component 
{
	componentDidMount()
	{
		try
		{
			if (this.props.modules) {
				this.props.modules.forEach(function (module) {
		            module(Highcharts);
		        });
			}
			
	        this.chart = new Highcharts[this.props.type || "Chart"](
		        this.props.container, 
		        this.props.options
	        );
		}
		catch(e){
			console.log('error loading highchart of type:', this.props.type);
			console.log(e);
		}
	}

	componentWillUnmount()
	{
		if (this.chart) {
			this.chart.destroy();	
		}
	}

	render()
	{
		var errorMsg = "";
		if (!this.chart) {
			errorMsg = "Highchart failed to load";
		}

		return (
			<div className="hchart" id={this.props.container}>{errorMsg}</div>
		);
	}
		
}

module.exports = HighChart;

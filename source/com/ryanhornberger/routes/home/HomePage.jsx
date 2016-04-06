'use strict'

import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import Spring2016Template from 'com/ryanhornberger/templates/Spring2016';

class HomePage extends React.Component 
{

	render()
	{
		return (
			<Spring2016Template>
				<Helmet title="Ryan Hornberger - Innovator" />
				
				Ryan Hornberger - Innovator

			</Spring2016Template>
		);
	}
		
}

module.exports = HomePage;

'use strict'

import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import Spring2016Footer from 'com/ryanhornberger/templates/Spring2016Footer';

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
							"href": "/_assets/normalize.css"
						},

						// site.scss
						{
							"rel": "stylesheet", 
							"type": "text/css", 
							"href": "/site.css"
						}

					]}
				/>

				<div id="foot-wrap">
				    <header>
				        <a id="title" href="/"> Ryan Hornberger </a> 
				    </header>

				    <section id="page">
				        {this.props.children}
				    </section>

				    <div id="foot-push"></div>
				</div>

				<Spring2016Footer />

			</div>
		);
	}
		
}

module.exports = Spring2016Template;

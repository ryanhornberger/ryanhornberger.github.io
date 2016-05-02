'use strict'

import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import Spring2016Template from 'com/ryanhornberger/templates/Spring2016';

class FourOhFour extends React.Component 
{

	render()
	{
		return (
			<Spring2016Template>
				
				<Helmet 
					title="Page not found - Ryan Hornberger" 
					meta={[
	                    {"name": "viewport", "content": "width=device-width, initial-scale=1, user-scalable=no"},
	                    //{"http-equiv": "refresh", "content": "5;URL=/"}
	                ]}
				/>

				<div className="grid-frame">
					<div className="grid-container">
						<div className="grid-block">
							<div className="grid-content" style={{marginTop: '40px'}}>
								<p>
									This page does not exist. You are being redirected to the homepage.
								</p>
							</div>
						</div>
					</div>
				</div>

			</Spring2016Template>
		);
	}
		
}

module.exports = FourOhFour;

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
				
				<Helmet 
					title="Ryan Hornberger - Venice Beach, CA" 
					link={[
						{
							"rel": "stylesheet", 
							"type": "text/css", 
							"href": "/home.css"
						}
					]}
					meta={[
	                    {"name": "viewport", "content": "width=device-width, initial-scale=1, user-scalable=no"}
	                ]}
				/>

				<div className="grid-frame">
					<div id="app-ui">
						<div id="business-card-box">
							<div id="business-card">
								<div id="snapcode">
									<div>
										<img src="/_assets/home/2016snapcode-transparent.png"/>
									</div>
								</div>
								<div id="message-box">
									<div id="message">
										<h1>Ryan Hornberger</h1>
										<h2>On team Snapchat. Venice Beach, CA</h2>
										<div id="social-links">
											<img src="/_assets/home/sm-icon-1461385490_instagram_social_media_online.png" />
											<img src="/_assets/home/sm-icon-1461385496_linked_in_social_media_online.png" />
											<img src="/_assets/home/sm-icon-1461385508_github_social_media_online.png" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</Spring2016Template>
		);
	}
		
}

module.exports = HomePage;

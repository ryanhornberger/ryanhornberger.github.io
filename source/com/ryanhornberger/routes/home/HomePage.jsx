'use strict'

import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';

class HomePage extends React.Component 
{

	render()
	{
		return (
			<div>
				
				<Helmet 
					title="Ryan Hornberger - Venice Beach, CA" 
					link={[
						{
							"rel": "stylesheet", 
							"type": "text/css", 
							"href": "/_assets/normalize.css"
						},

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
									<div id="foreground">
										<img src="/_assets/home/2016snapcode-transparent.png"/>
										<div id="background">
											<img src="/_assets/home/2016snapcode-image.png"/>
										</div>
									</div>
								</div>
								<div id="message-box">
									<div id="message">
										<h1>Ryan Hornberger</h1>
										<h2>On team Snapchat. Venice Beach, CA</h2>
										<div id="social-links">
											<a id="link-instagram" href="https://www.instagram.com/ryanhornberger/" target="_blank"><img src="/_assets/home/sm-icon-1461385490_instagram_social_media_online.png" /></a>
											<a id="link-linked-in" href="https://www.linkedin.com/in/rhornberger" target="_blank"><img src="/_assets/home/sm-icon-1461385496_linked_in_social_media_online.png" /></a>
											<a id="link-github" href="https://github.com/ryanhornberger" target="_blank"><img src="/_assets/home/sm-icon-1461385508_github_social_media_online.png" /></a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		);
	}
		
}

module.exports = HomePage;

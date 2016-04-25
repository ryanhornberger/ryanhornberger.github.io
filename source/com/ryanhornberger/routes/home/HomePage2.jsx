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
				/>

				<div id="app-ui" className="vertical align-center small-align-top grid-frame">
					<div id="business-card">
						<div className="grid-block small-up-1 medium-up-2">
							<div id="snapcode" className="align-right medium-6 small-12 grid-block">
								<zf-interchange>
									<img media="large" src="/_assets/home/2016snapcode-transparent.png"/>
								</zf-interchange>
							</div>
							<div className="vertical align-center  medium-6 small-12 grid-block">
								<div id="message" className="shrink grid-content">
									<h1>Ryan Hornberger</h1>
									<h2>On team Snapchat. Venice Beach, CA</h2>
									{/*}
									<div id="social-links">
										<img src="/_assets/home/sm-icon-1461385490_instagram_social_media_online.png" />
										<img src="/_assets/home/sm-icon-1461385496_linked_in_social_media_online.png" />
										<img src="/_assets/home/sm-icon-1461385508_github_social_media_online.png" />
									</div>
									{*/}
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

'use strict'

/*
	The "helmet" uses react-helmet to render the top level html content 
	for the app. It makes it possible to fill in the head and body with
	the contents of a react app. Even with react-router type paths.
*/

import React, { Component, PropTypes } from 'react';

class ServerWrapper extends React.Component 
{
	
	render()
	{
		return (
			<html>
				<head>
					{this.props.head.title.toComponent()}
                	{this.props.head.meta.toComponent()}
                	{this.props.head.link.toComponent()}
				</head>
				<body>
					<div id="app" dangerouslySetInnerHTML={{__html: this.props.content}} />
				</body>
			</html>
		);
	}
		
}

module.exports = ServerWrapper;

'use strict'

import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';

class AsdfPage extends React.Component 
{
	
	render()
	{
		return (
			<div>
				<Helmet title="ASDF TITLE!" />
				Asdf page!
			</div>
		);
	}
		
}

module.exports = AsdfPage;

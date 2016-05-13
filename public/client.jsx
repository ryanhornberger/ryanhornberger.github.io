'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import Routes from 'com/ryanhornberger/routes';
import { createHistory } from 'history';

window.$ = window.jquery = require('jquery');

const history = createHistory();

$(function(){
	ReactDOM.render(
		<Routes history={history} />,
		document.getElementById('app')
	);

	console.log("initialized");
});

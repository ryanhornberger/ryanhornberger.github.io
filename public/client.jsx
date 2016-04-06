'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import Routes from 'com/ryanhornberger/routes';
import { createHistory } from 'history';

const history = createHistory();

ReactDOM.render(
	<Routes history={history} />,
	document.getElementById('app')
);

console.log("initialized");
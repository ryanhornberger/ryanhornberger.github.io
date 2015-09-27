'use strict';

export default class RenderBoxes {

	constructor(height, width) {
		this.height = height;
		this.width = width;
	}

	render() {
		return `
			<div style='.body'>
				This content rendered by a shared library located at './app/source/jsdemo/components/RenderBoxes.js'.
			</div>
		`;
	}

}

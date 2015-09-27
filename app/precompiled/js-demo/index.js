'use strict';

import RenderBoxes from 'jsdemo/components/RenderBoxes.js';

var boxes = new RenderBoxes(200, 200).render();
var drawSpace = document.getElementById('js-demo-space').innerHTML = boxes;

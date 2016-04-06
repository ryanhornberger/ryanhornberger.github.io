'use strict';

import ServerRenderer from 'isomorphicTools/ServerRenderer';

module.exports = function render(locals, callback) {
    var result = new ServerRenderer(6).render(locals.path);
    callback(null, result);
};
/**
 * Created by Alex on 3/21/2015.
 */
'use strict';

module.exports = function(app) {
    // Root routing
    var index = require('../controllers/index');
    app.route('/*').get(index.get);
};
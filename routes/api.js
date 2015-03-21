/**
 * Created by Alex on 3/21/2015.
 */
'use strict';

module.exports = function(app) {
    // Root routing
    var api = require('../controllers/api');
    app.route('/api/contact').post(api.postContact);
};
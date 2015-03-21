'use strict';

require('./config/init')();
var config = require('./config/config');

require('newrelic');

var app = require('./config/express')();

var server = app.listen(config.port, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Express server listening at http://%s:%s', host, port);
});

exports = module.exports = app;

// Logging initialization
console.log('--');
console.log(config.app.title + ' application started');
console.log('Environment:\t\t\t' + process.env.NODE_ENV);
console.log('Port:\t\t\t\t' + config.port);
console.log('--');
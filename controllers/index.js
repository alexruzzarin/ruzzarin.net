/**
 * Created by Alex on 3/21/2015.
 */
'use strict';

var config = require('../config/config');

exports.get = function (req, res) {
    var model = {
        env: process.env.NODE_ENV,
        cdnUrl: config.cdnUrl,
        minified: config.minified,
        image: (config.cdnUrl ? config.cdnUrl : "http://"+ config.url) + "/images/Alex-Ruzzarin.jpg"
    };
    res.render('index', model);
};
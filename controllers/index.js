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
        name: "Alex Ruzzarin",
        image: (config.cdnUrl ? config.cdnUrl : "http://www.ruzzarin.net") + "/images/Alex-Ruzzarin.jpg",
        googlePlusUrl: "https://plus.google.com/+AlexRuzzarin/posts"
    };
    res.render('index', model);
};
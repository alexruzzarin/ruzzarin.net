/**
 * Created by Alex on 3/21/2015.
 */
'use strict';

/**
 * Module dependencies.
 */
var fs = require('fs'),
    http = require('http'),
    express = require('express'),
    bodyParser = require('body-parser'),
    compression = require('compression'),
    //cookieParser = require('cookie-parser'),
    helmet = require('helmet'),
    config = require('./config'),
    path = require('path'),
    ECT = require('ect');

module.exports = function () {
    // Initialize express app
    var app = express();

    // Setting application local variables
    app.locals.title = config.app.title;
    app.locals.description = config.app.description;
    app.locals.keywords = config.app.keywords;

    // Force URL domain
    app.use(function (req, res, next) {
        if (req.hostname != 'localhost' && req.hostname != config.url) {
            var redirectTo = req.protocol + '://' + config.url + req.originalUrl;
            res.redirect(301, redirectTo);
        }
        next();
    });

    // Passing the request url to environment locals
    app.use(function (req, res, next) {
        res.locals.url = req.protocol + '://' + req.headers.host + req.url;
        next();
    });

    // Should be placed before express.static
    app.use(compression({
        // only compress files for the following content types
        filter: function (req, res) {
            return (/json|text|javascript|css/).test(res.getHeader('Content-Type'));
        },
        // zlib option for compression level
        level: 3
    }));

    // Showing stack errors
    app.set('showStackError', true);

    // Environment dependent middleware
    if (process.env.NODE_ENV === 'development') {
        // Disable views cache
        app.set('view cache', false);
    } else if (process.env.NODE_ENV === 'production') {
        app.locals.cache = 'memory';
    }

    // Set the template engine
    app.set('views', './views');
    var ect = ECT({watch: true, root: app.get('views'), cache: app.get('view cache'), ext: '.ect'});
    app.engine('ect', ect.render);
    app.set('view engine', 'ect');

    // Request body parsing middleware should be above methodOverride
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());

    // Use helmet to secure Express headers
    app.use(helmet.xframe());
    app.use(helmet.xssFilter());
    app.use(helmet.nosniff());
    app.use(helmet.ienoopen());
    app.disable('x-powered-by');

    app.use(function (req, res, next) {
        //res.header('X-Frame-Options', 'DENY');
        res.header('Arr-Disable-Session-Affinity', 'True');
        next();
    });

    // Pre render pages to Bots
    app.use(require('prerender-node').set('prerenderToken', config.prerender.token));

    // Setting the app router and static folder
    app.use(express.static(path.resolve('./public')));

    // CookieParser should be above session
    //app.use(cookieParser());

    // Globbing routing files
    config.getGlobbedFiles('./routes/**/*.js').forEach(function (routePath) {
        require(path.resolve(routePath))(app);
    });

    // Assume 'not found' in the error msgs is a 404. this is somewhat silly, but valid, you can do whatever you like, set properties, use instanceof etc.
    app.use(function (err, req, res, next) {
        // If the error object doesn't exists
        if (!err) return next();

        // Log it
        console.error(err.stack);

        // Error page
        res.status(500).render('500', {
            error: err.stack
        });
    });

    // Assume 404 since no middleware responded
    app.use(function (req, res) {
        res.status(404).render('404', {
            url: req.originalUrl,
            error: 'Not Found'
        });
    });

    // Return Express server instance
    return app;
};
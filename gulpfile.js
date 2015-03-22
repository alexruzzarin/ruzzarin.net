/**
 * Created by Alex on 3/11/2015.
 */
'use strict';

require('./config/init')();

var config = require('./config/config');
var gulp = require('gulp');
var merge = require('merge-stream');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins();

var paths = {
    css: 'app/style/*.less',
    js: ['app/script/module.js', 'app/script/**/*.js'],
    html: 'app/partials/*.ect',
    images: 'app/images/**/*.*',
    fonts: 'app/fonts/**',
    static: ['app/favicon.ico', 'app/robots.txt', 'app/sitemap.xml']
};

gulp.task('appCss', function () {
    return gulp.src(paths.css)
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.less())
        .pipe(plugins.sourcemaps.write())
        .pipe(gulp.dest('public/css'))
        .pipe(plugins.rename({suffix: '.min'}))
        .pipe(plugins.minifyCss())
        .pipe(gulp.dest('public/css'))
        .pipe(plugins.livereload());
});
gulp.task('appJs', function () {
    return gulp.src(paths.js)
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.concat('app.js'))
        .pipe(plugins.sourcemaps.write())
        .pipe(gulp.dest('public/jss'))
        .pipe(plugins.rename({suffix: '.min'}))
        .pipe(plugins.ngAnnotate({gulpWarnings: false}))
        .pipe(plugins.uglify())
        .pipe(gulp.dest('public/jss'))
        .pipe(plugins.livereload());
});
gulp.task('appHtml', function () {
    gulp.src(paths.html)
        .pipe(plugins.ect({
            data: function (filename, cb) {
                cb({
                    env: process.env.NODE_ENV,
                    name: "Alex Ruzzarin",
                    title: "Alex Ruzzarin - Software Developer",
                    description: "Programmer with degree in Analysis and Development of Information Systems. Professional and trainer certified by Microsoft. Crazy for technology, works with. Net, but is a fan of Ruby and JavaScript (and Node.Js).",
                    image: "http://www.ruzzarin.net/images/Alex-Ruzzarin.jpg",
                    keywords: "HTML,CSS,JavaScript,.net,dotnet,node,nodejs,node.js,asp.net,aspnet",
                    googlePlusUrl: "https://plus.google.com/+AlexRuzzarin/posts"
                });
            }
        }))
        .pipe(plugins.htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('public/partials'))
        .pipe(plugins.livereload());
});
gulp.task('appImages', function () {
    return gulp.src(paths.images)
        .pipe(gulp.dest('public/images'));
});
gulp.task('appFonts', function () {
    return gulp.src(paths.fonts)
        .pipe(gulp.dest('public/fonts'));
});
gulp.task('appStatic', function () {
    return gulp.src(paths.static)
        .pipe(gulp.dest('public'));
});
gulp.task('vendorJs', function () {
    return gulp.src(['bower_components/angular/angular.js', 'bower_components/angular/angular.min.js', 'bower_components/angular-route/angular-route.js', 'bower_components/angular-route/angular-route.min.js'])
        .pipe(gulp.dest('public/jss'));
});

gulp.task('default', ['appHtml', 'appCss', 'appJs', 'appImages', 'appFonts', 'appStatic', 'vendorJs']);

gulp.task('watch', ['default'], function () {
    plugins.livereload.listen();
    gulp.watch([paths.css, 'app/style/**/*.less'], ['appCss']);
    gulp.watch(paths.js, ['appJs']);
    gulp.watch(paths.html, ['appHtml']);
    gulp.watch(paths.images, ['appImages']);
    gulp.watch(paths.fonts, ['appFonts']);
    gulp.watch(paths.static, ['appStatic']);
});

gulp.task('serve', ['watch'], function () {
    var server = require('./server');
});

gulp.task('release', ['default'], function () {
    var css = gulp.src('*.css', {
        cwd: 'public/css'
    }).pipe(plugins.deployAzureCdn({
        containerName: 'css', // container name in blob
        serviceOptions: [config.azureCdn.account, config.azureCdn.accessKey], // custom arguments to azure.createBlobService
        folder: '', // path within container
        zip: true, // gzip files if they become smaller after zipping, content-encoding header will change if file is zipped
        deleteExistingBlobs: true, // true means recursively deleting anything under folder
        concurrentUploadThreads: 10, // number of concurrent uploads, choose best for your network condition
        metadata: {
            cacheControl: config.azureCdn.cacheControl, // cache in browser
            cacheControlHeader: config.azureCdn.cacheControlHeader // cache in azure CDN. As this data does not change, we set it to 1 year
        },
        testRun: false // test run - means no blobs will be actually deleted or uploaded, see log messages for details
    }));
    var jss = gulp.src('*.js', {
        cwd: 'public/jss'
    }).pipe(plugins.deployAzureCdn({
        containerName: 'jss', // container name in blob
        serviceOptions: [config.azureCdn.account, config.azureCdn.accessKey], // custom arguments to azure.createBlobService
        folder: '', // path within container
        zip: true, // gzip files if they become smaller after zipping, content-encoding header will change if file is zipped
        deleteExistingBlobs: true, // true means recursively deleting anything under folder
        concurrentUploadThreads: 10, // number of concurrent uploads, choose best for your network condition
        metadata: {
            cacheControl: config.azureCdn.cacheControl, // cache in browser
            cacheControlHeader: config.azureCdn.cacheControlHeader // cache in azure CDN. As this data does not change, we set it to 1 year
        },
        testRun: false // test run - means no blobs will be actually deleted or uploaded, see log messages for details
    }));
    var fonts = gulp.src('*.*', {
        cwd: 'public/fonts'
    }).pipe(plugins.deployAzureCdn({
        containerName: 'fonts', // container name in blob
        serviceOptions: [config.azureCdn.account, config.azureCdn.accessKey], // custom arguments to azure.createBlobService
        folder: '', // path within container
        zip: true, // gzip files if they become smaller after zipping, content-encoding header will change if file is zipped
        deleteExistingBlobs: true, // true means recursively deleting anything under folder
        concurrentUploadThreads: 10, // number of concurrent uploads, choose best for your network condition
        metadata: {
            cacheControl: config.azureCdn.cacheControl, // cache in browser
            cacheControlHeader: config.azureCdn.cacheControlHeader // cache in azure CDN. As this data does not change, we set it to 1 year
        },
        testRun: false // test run - means no blobs will be actually deleted or uploaded, see log messages for details
    }));
    var images = gulp.src('*.*', {
        cwd: 'public/images'
    }).pipe(plugins.deployAzureCdn({
        containerName: 'images', // container name in blob
        serviceOptions: [config.azureCdn.account, config.azureCdn.accessKey], // custom arguments to azure.createBlobService
        folder: '', // path within container
        zip: true, // gzip files if they become smaller after zipping, content-encoding header will change if file is zipped
        deleteExistingBlobs: true, // true means recursively deleting anything under folder
        concurrentUploadThreads: 10, // number of concurrent uploads, choose best for your network condition
        metadata: {
            cacheControl: config.azureCdn.cacheControl, // cache in browser
            cacheControlHeader: config.azureCdn.cacheControlHeader // cache in azure CDN. As this data does not change, we set it to 1 year
        },
        testRun: false // test run - means no blobs will be actually deleted or uploaded, see log messages for details
    }));
    return merge(css, jss, fonts, images);
});
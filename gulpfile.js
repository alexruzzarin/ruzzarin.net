/**
 * Created by Alex on 3/11/2015.
 */
var gulp = require('gulp');
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
    gulp.watch(paths.css, ['appCss']);
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
});
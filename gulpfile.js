/**
 * Created by Alex on 3/11/2015.
 */
var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins();

gulp.task('appCss', function () {
    return gulp.src('./app/style/**/*.less')
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.less())
        .pipe(plugins.minifyCSS())
        .pipe(plugins.sourcemaps.write())
        .pipe(gulp.dest('./public/css'));
});

gulp.task('default', function () {
    // place code for your default task here
});
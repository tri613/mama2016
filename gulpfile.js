var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');
var lazypipe = require('lazypipe');
var config      = require('./config.json');

var cssProcess = lazypipe()
        .pipe(sass)
        .pipe(postcss, [ autoprefixer({ browsers: ['ie > 11', '> 5%'] }) ])
        .pipe(cleanCSS);

gulp.task('serve', ['css-process'], function() {
    browserSync.init(config.browserSync);
    gulp.watch(config.css.src, ['css-process']);
    gulp.watch(config.js.src, ['browser-reload']);
    gulp.watch(config.html.src, ['browser-reload']);
    gulp.watch("./css/*.css", ['inject-css']);
});

gulp.task('watch-css', ['css-process'], function() {
    gulp.watch(config.css.src, ['css-process']);
});

gulp.task('css-process', function () {
    return gulp.src(config.css.src)
        .pipe(cssProcess())
        .pipe(gulp.dest(config.css.dest));
});

gulp.task('inject-css', function() {
     return gulp.src("./css/*.css")
        .pipe(browserSync.stream());
});

gulp.task('browser-reload', function() {
    browserSync.reload();
});

gulp.task('default', ['serve']);

var gulp = require('gulp');
var gutil = require('gulp-util');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');
var config = require('../config');
var plumber = require('gulp-plumber');
var errorHandler = require('../utils/error-handler');

gulp.task('styles', function() {
  return gulp.src(config.source + '/styles/main.less')
    .pipe(plumber({errorHandler: errorHandler}))
    .pipe(less({
      paths: [
        config.source + '/styles',
        config.source + '/components',
        'node_modules'
      ],
      strictMath: true,
      strictUnits: true
    }))
    .pipe(config.minify ? cssmin() : gutil.noop())
    .pipe(autoprefixer({
      browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1']
    }))
    .pipe(gulp.dest(config.target + '/styles'));
});

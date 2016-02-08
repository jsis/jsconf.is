var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var config = require('../config');
var errorHandler = require('../utils/error-handler');
var babelify = require('babelify');

gulp.task('scripts', ['lint'], function() {
  return browserify({
      entries: ['./' + config.source + '/scripts/main.js'],
      debug: config.debug
    })
    .transform(babelify.configure({
      presets: ['es2015', 'stage-0']
    }))
    .bundle()
    .on('error', errorHandler)
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(config.minify ? uglify({preserveComments: 'some'}) : gutil.noop())
    .pipe(gulp.dest(config.target + '/scripts/'));
});

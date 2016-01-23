var gulp = require('gulp');
var gutil = require('gulp-util');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var config = require('../config');
var errorHandler = require('../utils/error-handler');

gulp.task('images', function() {
  return gulp.src(config.source + '/images/**/*.{png,gif,jpg,jpeg,svg,pdf}')
    .pipe(!config.minify ? changed(config.target + '/images/') : gutil.noop())
    .pipe(config.minify ? imagemin() : gutil.noop())
    .on('error', errorHandler)
    .pipe(gulp.dest(config.target + '/images/'));
});

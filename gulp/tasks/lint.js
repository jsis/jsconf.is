var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var config = require('../config');

var files = [
  config.source + '/scripts/**/*.js',
  './gulp/tasks/*.js'
];

gulp.task('lint-jscs', function() {
  return gulp.src(files)
    .pipe(jscs());
});

gulp.task('lint-jshint', function() {
  return gulp.src(files)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('lint', ['lint-jshint', 'lint-jscs']);

var gulp = require('gulp');
var config = require('../config');

var rimraf = require('rimraf');

gulp.task('clean', function(cb) {
  rimraf(config.target, cb);
});

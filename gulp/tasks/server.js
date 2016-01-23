var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var config = require('../config');

gulp.task('server', ['watch'], function() {
  browserSync.init({
    files: config.target + '/**/*',
    server: {
      baseDir: config.target
    }
  });
});

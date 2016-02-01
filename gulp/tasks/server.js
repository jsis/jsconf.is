var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var config = require('../config');
var historyApiFallback = require('connect-history-api-fallback')

gulp.task('server', ['watch'], function() {
  browserSync.init({
    files: config.target + '/**/*',
    server: {
      baseDir: config.target
    },
    logPrefix: '-server-',
    notify: false,
    open: false,
    middleware: [historyApiFallback()]
  });
});

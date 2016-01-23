var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', ['clean'], function(cb) {
  runSequence('copy', 'scripts', 'styles', 'templates', 'images', cb);
});

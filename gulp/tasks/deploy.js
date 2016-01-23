var gulp = require('gulp');
var exec = require('child_process').exec;
var runSequence = require('run-sequence');

gulp.task('deploy-log', function() {
  console.log('---------------------\nDeployed to //jsconf.is');
});

gulp.task('deploy-ghpages', function(cb) {
  var child = exec('git subtree push --prefix dist origin gh-pages', cb);
  child.stdout.pipe(process.stdout);
  child.stderr.pipe(process.stderr);
});

gulp.task('deploy', function(cb) {
  runSequence('deploy-ghpages', 'deploy-log', cb);
});

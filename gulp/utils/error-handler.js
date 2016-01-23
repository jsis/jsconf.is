var notify = require('gulp-notify');
var gutil = require('gulp-util');

module.exports = function(err) {
  notify.onError(err).apply(this, arguments);
  gutil.log(gutil.colors.red(err.toString()));
  this.emit('end');
};

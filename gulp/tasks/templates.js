var gulp = require('gulp');
var jade = require('gulp-jade');
var config = require('../config');
var errorHandler = require('../utils/error-handler');

gulp.task('templates', function() {
  return gulp.src(config.source + '/templates/**/*.jade')
    .pipe(jade({
      pretty: config.minify
    }))
    .on('error', errorHandler)
    .pipe(gulp.dest(config.target));
});

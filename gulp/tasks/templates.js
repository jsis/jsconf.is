var gulp = require('gulp');
var jade = require('gulp-jade');
var config = require('../config');
var errorHandler = require('../utils/error-handler');
var speakers = require('../../app/scripts/data/speakers');

gulp.task('templates', function() {
  return gulp.src(config.source + '/templates/**/*.jade')
    .pipe(jade({
      pretty: config.minify,
      locals: {
        speakers: speakers
      }
    }))
    .on('error', errorHandler)
    .pipe(gulp.dest(config.target));
});

var gulp = require('gulp');
var jade = require('gulp-jade');
var config = require('../config');
var errorHandler = require('../utils/error-handler');
var speakers = require('../../app/scripts/data/speakers');
var schedule = require('../../app/scripts/data/schedule');

gulp.task('templates', function () {
  return gulp.src(config.source + '/templates/**/*.jade')
    .pipe(jade({
      pretty: config.minify,
      locals: {
        speakers: speakers,
        schedule: schedule
      }
    }))
    .on('error', errorHandler)
    .pipe(gulp.dest(config.target));
});

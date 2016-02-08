var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var config = require('../config');
var plumber = require('gulp-plumber');
var errorHandler = require('../utils/error-handler');

gulp.task('styles', function() {
  return gulp.src([config.source + '/styles/*.scss', '!' + config.source + '/styles/_*.scss'])
    .pipe(plumber({errorHandler: errorHandler}))
    .pipe(sass({
      includePaths: [config.source + '/styles', 'node_modules'],
      outputStyle: 'compressed'
    }))
    .pipe(autoprefixer({
      browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1']
    }))
    .pipe(gulp.dest(config.target + '/styles'));
});

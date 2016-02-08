const gulp = require('gulp');
const eslint = require('gulp-eslint');
const config = require('../config');

gulp.task('lint', () => gulp.src(config.source + '/scripts/**/*.js')
  .pipe(eslint())
  .pipe(eslint.format())
);

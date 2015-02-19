var gulp = require('gulp');
var stylus = require('gulp-stylus');
var nib = require('nib');
var handleErrors = require('../util/handleErrors');

gulp.task('stylus', ['front', 'images']);

gulp.task('front', function () {
  return gulp.src('assets/css/main.styl')
    .pipe(stylus({
      compress: true,
      use: [nib()],
      import: ['nib']
    }))
    .on('error', handleErrors)
    .pipe(gulp.dest('dist'));
});

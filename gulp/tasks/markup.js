var gulp = require('gulp');
var jade = require('gulp-jade');

gulp.task('markup', function() {
  return gulp.src('assets/layout/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./dist/'));
});

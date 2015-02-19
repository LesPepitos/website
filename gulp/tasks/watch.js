/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
   - gulp/tasks/browserSync.js automatically reloads any files
     that change within the directory it's serving from
*/

var gulp = require('gulp');

gulp.task('watch', ['setWatch', 'browserSync'], function() {
  gulp.watch('assets/**/*.{styl, stylus}', ['stylus']);
  gulp.watch('assets/images/**', ['sprite']);
  gulp.watch('assets/**/*.jade', ['markup']);
  gulp.watch('assets/**/*.js', ['lint']);
});

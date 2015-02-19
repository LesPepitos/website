var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');
var handleErrors = require('../util/handleErrors');


gulp.task('sprite', function () {
  var spriteData = gulp.src('./assets/images/mask_*.png')
    .pipe(spritesmith({
      imgName: 'mask.png',
      cssName: '_mask.styl',
      cssFormat: 'stylus',
      algorithm: 'top-down',
      cssTemplate: './gulp/templates/mask.css.mustache',
    }))
    .on('error', handleErrors);

  spriteData.img.pipe(gulp.dest('./dist/images/'));
  spriteData.css.pipe(gulp.dest('./assets/css/'));
});

var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');
var handleErrors = require('../util/handleErrors');


gulp.task('sprite', function () {
  var spriteData = gulp.src('./assets/images/masks/mask_*.png')
    .pipe(spritesmith({
      imgName: 'masks.png',
      cssName: '_masks.styl',
      cssFormat: 'stylus',
      algorithm: 'top-down',
      cssTemplate: './gulp/templates/mask.css.mustache',
    }))
    .on('error', handleErrors);

  spriteData.img.pipe(gulp.dest('./dist/images/'));
  spriteData.css.pipe(gulp.dest('./assets/css/'));
});

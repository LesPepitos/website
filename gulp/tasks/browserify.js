/* browserify task
   ---------------
   Bundle javascripty things with browserify!

   If the watch task is running, this uses watchify instead
   of browserify for faster bundling using caching.
*/

var browserify   = require('browserify');
var watchify     = require('watchify');
var bundleLogger = require('../util/bundleLogger');
var gulp         = require('gulp');
var handleErrors = require('../util/handleErrors');
var source       = require('vinyl-source-stream');
var babelify     = require('babelify')

var jstOpts = {
  engine: 'lodash',
  noMinify: true,
  templateOpts: {
    interpolate: /\{\{(.+?)\}\}/g,
    evaluate: /\$\{\{(.+?)\}\}/g
  }
};

var addBundle = function(task, entry) {
  gulp.task(task, function() {
    var bundler = browserify({
      entries: './assets/js/' + entry,
      cache: {},
      packageCache: {},
      fullPaths: false,
      debug: process.env.NODE_ENV != 'production'
    }).transform('babelify')
      .transform('jstify', jstOpts);
    var bundle = function() {
      bundleLogger.start();
      return bundler
        .bundle()
        .on('error', handleErrors)
        .pipe(source(entry+'.js'))
        .pipe(gulp.dest('./dist/'))
        .on('end', bundleLogger.end);
    };
    if(global.isWatching) {
      bundler = watchify(bundler);
      bundler.on('update', bundle);
    }
    return bundle();
  });
};
addBundle("browserify-front", 'app');

gulp.task('browserify', ['browserify-front']);

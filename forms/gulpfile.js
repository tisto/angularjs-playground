/*!
 * gulp
 * $ npm install gulp-livereload --save-dev
 */

// Load plugins
var gulp = require('gulp'),
    livereload = require('gulp-livereload');

// Watch
gulp.task('watch', function() {

  // Create LiveReload server
  livereload.listen();

  // Watch any files, reload on change
  gulp.watch(['**']).on('change', livereload.changed);

});

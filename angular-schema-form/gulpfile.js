(function() {
  'use strict';

  // --- DEPENDENCIES --------------------------------------------------------
  var gulp = require('gulp');
  var browserSync = require('browser-sync');
  var watch = require('gulp-watch');


  // --- BROWSER SYNC --------------------------------------------------------
  gulp.task('browser-sync', function() {
    browserSync({
      server: {
        baseDir: "."
      }
    });
  });
  gulp.task('browser-sync-reload', function () {
    browserSync.reload();
  });


  // --- WATCH ---------------------------------------------------------------
  gulp.task('watch', function() {
  });


  // --- BUILD ---------------------------------------------------------------
  gulp.task('build', [], function() {});


  // --- DEFAULT -------------------------------------------------------------
  gulp.task('default', ['build', 'watch', 'browser-sync'], function() {
    gulp.watch("*.*", ['browser-sync-reload']);
  });


})();

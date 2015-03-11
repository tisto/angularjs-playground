(function() {
  'use strict';

  // --- DEPENDENCIES --------------------------------------------------------
  var gulp = require('gulp'),
      browserSync = require('browser-sync'),
      watch = require('gulp-watch');


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
    gulp.watch('./src/less/*.less', ['styles']);
    gulp.watch('./src/*.html', function(){
      gulp.run('html');
    });
    gulp.watch('./src/*.js', function(){
      gulp.run('js');
    });
  });


  // --- DEFAULT -------------------------------------------------------------
  gulp.task('default', ['watch', 'browser-sync'], function() {
    gulp.watch("*.*", ['browser-sync-reload']);
  });


})();

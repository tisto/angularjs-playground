(function() {
  'use strict';

  // --- DEPENDENCIES --------------------------------------------------------
  var gulp = require('gulp'),
      browserSync = require('browser-sync'),
      inject = require('gulp-inject'),
      watch = require('gulp-watch');


  // --- INDEX ---------------------------------------------------------------
  gulp.task('index', function () {
    var target = gulp.src('./index.html');
    var sources = gulp.src([
      './bower_components/angularjs/angular.js',
      './scripts/**/*.js'
    ], {read: false});  // Do not read the files, we're only after their paths.

    target.pipe(inject(sources))
      .pipe(gulp.dest('.'));
  });


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

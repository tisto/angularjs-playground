(function() {
  'use strict';

  // --- DEPENDENCIES --------------------------------------------------------
  var gulp = require('gulp'),
      browserSync = require('browser-sync'),
      inject = require('gulp-inject'),
      less = require('gulp-less'),
      sourcemaps = require('gulp-sourcemaps'),
      watch = require('gulp-watch');


  // --- INDEX ---------------------------------------------------------------
  gulp.task('index', function () {
    var target = gulp.src('./index.html');
    var sources = gulp.src([
      './bower_components/angularjs/angular.js',
      './bower_components/angular-loading-bar/build/loading-bar.js',
      './js/**/*.js',
      './bower_components/angular-loading-bar/build/loading-bar.css',
      './css/style.css'
    ], {read: false});  // Do not read the files, we're only after their paths.

    target.pipe(inject(sources))
      .pipe(gulp.dest('.'));
  });


  // --- LESS ----------------------------------------------------------------
  gulp.task('less', function() {
    /*
    gulp.src([
      'bower_components/bootstrap/less/bootstrap.less',
      'less/*.less'
    ]).pipe(sourcemaps.init())
      .pipe(less())
      .pipe(gulp.dest('./css/'))
      .pipe(browserSync.reload({stream:true, once: true}));
    */
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
    //gulp.watch('./src/less/*.less', ['styles']);
    gulp.watch('./*.html', function(){
      gulp.run('html');
    });
    gulp.watch('./js/*.js', function(){
      gulp.run('js');
    });
  });


  // --- BUILD ---------------------------------------------------------------
  gulp.task('build', ['less', 'index'], function() {});


  // --- DEFAULT -------------------------------------------------------------
  gulp.task('default', ['build', 'watch', 'browser-sync'], function() {
    gulp.watch("*.*", ['browser-sync-reload']);
  });


})();

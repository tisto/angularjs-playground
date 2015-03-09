(function() {
  'use strict';

  // --- DEPENDENCIES --------------------------------------------------------
  var gulp = require('gulp'),
      sourcemaps = require('gulp-sourcemaps'),
      header = require('gulp-header'),
      browserSync = require('browser-sync'),
      less = require('gulp-less'),
      uglify = require('gulp-uglify'),
      watch = require('gulp-watch');


  // --- HTML ----------------------------------------------------------------
  gulp.task('html', function() {
    gulp.src('./src/*.html')
        .pipe(gulp.dest('./dist/'))
        .pipe(browserSync.reload({stream:true, once: true}));
  });


  // --- JAVASCRIPT ----------------------------------------------------------
  gulp.task('js', function() {
    gulp.src('./src/*.js')
        .pipe(uglify({mangle: false}))
        .pipe(gulp.dest('./dist/'))
        .pipe(browserSync.reload({stream:true, once: true}));
  });


  // --- STYLES --------------------------------------------------------------
  gulp.task('styles', function() {
    gulp.src('src/less/*.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({stream:true, once: true}));
  });


  // --- BROWSER SYNC --------------------------------------------------------
  gulp.task('browser-sync', function() {
    browserSync({
      server: {
        baseDir: "./dist"
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
  gulp.task('default', ['styles', 'html', 'js', 'watch', 'browser-sync'], function() {
    gulp.watch("*.*", ['browser-sync-reload']);
    gulp.watch('src/less/*.less', ['styles']);
  });

})();

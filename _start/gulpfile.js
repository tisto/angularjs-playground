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
    gulp.src('index.html')
        .pipe(gulp.dest('./build/'))
        .pipe(browserSync.reload({stream:true, once: true}));
  });


  // --- JAVASCRIPT ----------------------------------------------------------
  gulp.task('js', function() {
    gulp.src('./src/script.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/'))
        .pipe(browserSync.reload({stream:true, once: true}));
  });


  // --- LESS ----------------------------------------------------------------
  gulp.task('less', function() {
    gulp.src('src/less/*.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(gulp.dest('build/css'))
        .pipe(browserSync.reload({stream:true, once: true}));
  });


  // --- BROWSER SYNC --------------------------------------------------------
  gulp.task('browser-sync', function() {
    browserSync({
      server: {
        baseDir: "./"
      }
    });
  });
  gulp.task('browser-sync-reload', function () {
    browserSync.reload();
  });


  // --- WATCH ---------------------------------------------------------------
  gulp.task('watch', function() {
    gulp.watch('./src/less/*.less', function(){
      gulp.run('less');
    });
    gulp.watch('./src/*.html', function(){
      gulp.run('html');
    });
    gulp.watch('./src/*.js', function(){
      gulp.run('js');
    });

  });


  // --- DEFAULT -------------------------------------------------------------
  gulp.task('default', ['less', 'html', 'js', 'watch', 'browser-sync'], function() {
    gulp.watch("*.*", ['browser-sync-reload']);
    gulp.watch('src/less/*.less', ['less']);
  });

})();

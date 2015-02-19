==============================================================================
Getting Started with Angular JS
==============================================================================


Node Package Manager
--------------------

Install NodeJS::

  $ wget http://nodejs.org/dist/v0.10.33/node-v0.10.33.tar.gz
  $ tar xfvz node-v0.10.33.tar.gz
  $ cd node-v0.10.33
  $ ./configure
  $ make
  $ sudo make install

Create package.json::

  $ npm init

Your package.json should look like this::

  {
    "name": "ui-bootstrap-pagination",
    "version": "0.1.0",
    "devDependencies": {
      "grunt": "~0.4.5",
      "grunt-contrib-jshint": "~0.10.0",
      "grunt-browser-sync": "~1.2.1"
    }
  }


Bower
-----

Install Bower::

  $ sudo npm install bower -g

Create an initial bower.json configuration file::

  $ bower init

Bower configuration (.bowerrc)::

  {
    "directory": "app/bower_components"
  }


Gulp
----

Install Gulp globally::

  $ npm install gulp -g

http://markgoodyear.com/2014/01/getting-started-with-gulp/


Gulp Browser Sync
-----------------

Install Gulp and BrowserSync::

  $ npm install browser-sync gulp --save-dev


Basic gulpfile.js::

  var gulp        = require('gulp');
  var browserSync = require('browser-sync');

  // Static server
  gulp.task('browser-sync', function() {
      browserSync({
          server: {
              baseDir: "./"
          }
      });
  });

More complete gulpfile.js::

  var gulp        = require('gulp');
  var browserSync = require('browser-sync');


  // --- WATCH -----------------------------------------------------------------
  gulp.task('watch', function() {
    gulp.watch('**/*.*', ['browser-sync']);
  });


  // --- BROWSER SYNC ----------------------------------------------------------
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


  // --- DEFAULT ---------------------------------------------------------------
  gulp.task('default', ['browser-sync'], function () {
      gulp.watch("*.*", ['browser-sync-reload']);
  });


Run Browser Sync::

  $ gulp browser-sync

..more: http://www.browsersync.io/docs/gulp/


Angular
-------

Install AngularJS::

  $ bower install angularjs --save

Angular Mocks
-------------

  $ bower install angular-mocks --save


Gulp Less
---------

 $ npm install gulp-less --save-dev

Gulp Javascript
---------------

Install Gulp Javascript:

  $ npm install gulp-uglify --save-dev
  $ npm install gulp-concat --save-dev
  $ npm install gulp-jshint --save-dev

gulp.task('minify', function () {
   gulp.src('js/app.js')
      .pipe(uglify())
      .pipe(gulp.dest('build'))
});

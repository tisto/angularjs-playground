==============================================================================
Getting Started with Angular JS
==============================================================================


Node Package Manager
--------------------

package.json::

  {
    "name": "ui-bootstrap-pagination",
    "version": "0.1.0",
    "devDependencies": {
      "grunt": "~0.4.5",
      "grunt-contrib-jshint": "~0.10.0",
      "grunt-browser-sync": "~1.2.1"
    }
  }

npm install


Bower
-----

  $ bower init


Gulp
----

Install Gulp globally::

  $ npm install gulp -g

http://markgoodyear.com/2014/01/getting-started-with-gulp/


Gulp Browser Sync
-----------------

gulpfile.js::

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

Install Gulp and BrowserSync::

  $ npm install browser-sync gulp --save-dev

..more: http://www.browsersync.io/docs/gulp/


Angular Mocks
-------------

  $ bower install angular-mocks --save


==============================================================================
AngularJS Style Guide
==============================================================================

This is a short version of John Papa's "AngularJS Style Guide":

https://github.com/johnpapa/angularjs-styleguide/blob/master/README.md


Single Responsibility
---------------------

One component per file.

Why?: Clean code structure.

app.js::

  angular.module('app', ['ngRoute']);

someController.js::

  angular.module('app')
    .controller('SomeController', SomeController);

  function SomeController() {}


..note: https://github.com/johnpapa/angularjs-styleguide/blob/master/README.md#style-y001


IIFE
----

Wrap all AngularJS components in an Immediately Invoked Function Expression (IIFE).

Why?: Removes variables from global scope; Minification.

app.js::

  // app.js
  (function() {
    'use strict';

    angular
      .module('app')
      .factory('logger', logger);

      function logger() { }
  })();


..note: https://github.com/johnpapa/angularjs-styleguide/blob/master/README.md#iife


Modules
-------

- Avoid Name Collisions. Use Submodules, e.g. app.dashboard, app.users.
- Setters. Avoid a global app variable, e.g. "var app = angular.module()".
- Getters. Avoid using a globa app variable.
- Named Functions. Avoid using Anonymous Functions, e.g. "angular.controller('Dashboar'), function() {})"

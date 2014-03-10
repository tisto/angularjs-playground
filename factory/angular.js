var serviceModule = angular.module('myApp', []);

serviceModule.factory('notify',
  ['$window', function(win) {
    'use strict';
    var msgs = [];
    return function(msg) {
      msgs.push(msg);
      if (msgs.length == 3) {
        win.alert(msgs.join('\n'));
        msgs = [];
      }
    };
  }]
);

serviceModule.controller('MyController',
  ['$scope','notify', function ($scope, notify) {
    'use strict';
    $scope.callNotify = function(msg) {
      notify(msg);
    };
  }]
);

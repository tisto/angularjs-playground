var serviceModule = angular.module('myApp', []);

serviceModule.factory('githubService',
  function($http) {
    'use strict';
    var githubUrl = 'https://api.github.com';
    var runUserRequest = function(username, path) {
      // Return the promise from the $http service
      // that calls the Github API using JSONP
      return $http({
        method: 'JSONP',
        url: githubUrl + '/users/' +
        username + '/' +
        path + '?callback=JSON_CALLBACK'
      });
    };
    // Return the service object with a single function
    // events
    return {
      events: function(username) {
        return runUserRequest(username, 'events');
      }
    };
  }
);

serviceModule.controller('ServiceController',
  function($scope, $timeout, githubService) {
    'use strict';
    var timeout;
    $scope.$watch('username', function(newUserName) {
      if (newUserName) {
        if (timeout) $timeout.cancel(timeout);
        timeout = $timeout(function() {
          githubService.events(newUserName)
          .success(function(data, status) {
            $scope.events = data.data;
          });
        }, 350);
      }
    });
  }
);

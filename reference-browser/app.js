(function() {
  'use strict';

  angular.module('myApp', []);

  angular.module('myApp').controller('TreeController',
    function($scope, $log, $timeout, treeService) {
      var timeout;
      // Load Tree Data
      $scope.tree = [];

      if (timeout) $timeout.cancel(timeout);
      timeout = $timeout(function() {
        treeService.events('/')
        .success(function(data) {
          $scope.tree = data;
        });
      });

      $scope.$watch('current_path', function(newPath) {
        if (newPath) {
          if (timeout) $timeout.cancel(timeout);
          timeout = $timeout(function() {
            treeService.events(newPath)
            .success(function(data) {
              $scope.tree = data;
            })
            .error(function(data, status) {
              alert("ERROR: " + status);
            });
          });
        }
      });

      $scope.loadTreeBranch = function(path) {
        $scope.current_path = path;
        $log.debug(path);
      };
    }
  );

  angular.module('myApp').factory('treeService',
    function($http, $log) {
      var runUserRequest = function(path) {
        $log.debug('GET: /tree' + path);
        return $http({
          method: 'GET',
          url: '/tree' + path
        });
      };
      return {
        events: function(path) {
          return runUserRequest(path);
        }
      };
    }
  );

})();

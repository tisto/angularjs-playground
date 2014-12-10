(function() {
  'use strict';

  angular.module('myApp', []);

  angular.module('myApp').controller('TreeController',
    function($scope) {
      $scope.tree = [];
    }
  );

  angular.module('myApp').factory('treeService',
    function($http) {
      var runUserRequest = function(path) {
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

  angular.module('myApp').controller('ServiceController',
    function($scope, $timeout, treeService) {
      var timeout;
      if (timeout) $timeout.cancel(timeout);
      timeout = $timeout(function() {
        treeService.events('/')
        .success(function(data) {
          $scope.tree = data.data;
        })
        .error(function(data, status) {
          alert("ERROR: " + status);
        });
      });
    }
  );

})();

(function() {
  'use strict';
  angular.module('myApp', ['ui.grid']);

  angular.module('myApp').factory('usersService',
    function($http) {
      var runUserRequest = function() {
        return $http({
          method: 'GET',
          url: '/users/'
        });
      };
      return {
        events: function() {
          return runUserRequest();
        }
      };
    }
  );

  angular.module('myApp').controller('TableController',
    function($scope, $timeout, usersService) {
      $scope.gridOptions = {};
      $scope.gridOptions.columnDefs = [
        {name: 'id'},
        {name: 'name'},
        {name: 'age'},
        {name: 'address.city'}
      ];

      var timeout;
      if (timeout) $timeout.cancel(timeout);
      timeout = $timeout(function() {
        usersService.events()
        .success(function(data, status) {
          $scope.gridOptions.data = data;
        });
      }, 350);
    }
  );
})();

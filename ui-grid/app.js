(function() {
  'use strict';
  angular.module('myApp', ['ngTouch', 'ui.grid', 'ui.grid.infiniteScroll']);

  angular.module('myApp').factory('usersService',
    function($http) {
      var runUserRequest = function(batch_start, batch_size) {
        return $http({
          method: 'GET',
          url: '/users?batch_start=' + batch_start + '&batch_size=' + batch_size
        });
      };
      return {
        events: function(batch_start, batch_size) {
          return runUserRequest(batch_start, batch_size);
        }
      };
    }
  );

  angular.module('myApp').controller('TableController',
    function($scope, $timeout, usersService) {

      // grid options
      $scope.gridOptions = {};
      $scope.gridOptions.infiniteScrollPercentage = 15;
      $scope.gridOptions.columnDefs = [
        {name: 'id'},
        {name: 'name'},
        {name: 'age'},
        {name: 'address.city'}
      ];

      var batch_start = 0;
      var batch_size = 10;

      var timeout;
      if (timeout) $timeout.cancel(timeout);
      timeout = $timeout(function() {
        usersService.events(batch_start, batch_size)
        .success(function(data, status) {
          console.log('batch: ' + batch_start + ' / ' + batch_size);
          $scope.gridOptions.data = data;
          batch_start = batch_start + batch_size;
        });
      }, 350);

      $scope.gridOptions.onRegisterApi = function(gridApi){
        gridApi.infiniteScroll.on.needLoadMoreData($scope,function(){
          usersService.events(batch_start, batch_size)
          .success(function(data, status) {
            console.log('batch: ' + batch_start + ' / ' + batch_size);
            $scope.gridOptions.data = $scope.gridOptions.data.concat(data);
            gridApi.infiniteScroll.dataLoaded();
            batch_start = batch_start + batch_size;
          });
        });
      };
    }
  );
})();

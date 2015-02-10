(function() {
  'use strict';

  angular.module('myApp', [
    'ngTouch',
    'ui.grid',
    'ui.grid.autoResize',
    'ui.grid.infiniteScroll'
  ]);

  angular.module('myApp').factory('usersService',
    function($http) {
      var getUsersRequest = function(batch_start, batch_size) {
        return $http({
          method: 'GET',
          url: '/users?batch_start=' + batch_start + '&batch_size=' + batch_size
        });
      };
      return {
        users: function(batch_start, batch_size) {
          return getUsersRequest(batch_start, batch_size);
        }
      };
    }
  );

  angular.module('myApp').controller('TableController',
    function($scope, $timeout, usersService) {

      $scope.$scope = $scope;

      $scope.showDetails = function(row){
        alert(row.entity.id);
      };

      function rowTemplate() {
        return '<div ng-click="getExternalScopes().showDetails(row)" ng-repeat="col in colContainer.renderedColumns track by col.colDef.name" class="ui-grid-cell" ui-grid-cell></div>';
      }

      // grid options
      $scope.gridOptions = {};
      $scope.gridOptions.infiniteScrollPercentage = 15;
      $scope.gridOptions.rowTemplate = rowTemplate();
      $scope.gridOptions.columnDefs = [
        {name: 'id'},
        {name: 'name'},
        {name: 'age'}
      ];

      var batch_start = 0;
      var batch_size = 50;

      var timeout;
      if (timeout) $timeout.cancel(timeout);
      timeout = $timeout(function() {
        usersService.users(batch_start, batch_size)
        .success(function(data, status) {
          $scope.gridOptions.data = data;
          batch_start = batch_start + batch_size;
        });
      }, 350);

      $scope.gridOptions.onRegisterApi = function(gridApi){
        gridApi.infiniteScroll.on.needLoadMoreData($scope,function(){
          usersService.users(batch_start, batch_size)
          .success(function(data, status) {
            $scope.gridOptions.data = $scope.gridOptions.data.concat(data);
            gridApi.infiniteScroll.dataLoaded();
            batch_start = batch_start + batch_size;
          }).error(function() {
            gridApi.infiniteScroll.dataLoaded();
          });
        });
      };
    }
  );
})();

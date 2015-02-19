(function() {
  'use strict';

  angular.module('myApp', [
    'ngTouch',
    'ngAnimate',
    'mgcrea.ngStrap',
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
      var getUserRequest = function(user_id) {
        return $http({
          method: 'GET',
          url: '/user?id=' + user_id
        });
      };
      return {
        users: function(batch_start, batch_size) {
          return getUsersRequest(batch_start, batch_size);
        },
        user: function(user_id) {
          return getUserRequest(user_id);
        }
      };
    }
  );

  angular.module('myApp').controller('TableController',
    function($scope, $timeout, $aside, usersService) {

      $scope.$scope = $scope;

      $scope.showDetails = function(row){
        $scope.currentReference = row.entity;
        var referenceAside = $aside({
          scope: $scope,
          contentTemplate: 'aside.tpl.html',
          title: row.entity.name,
          show: true
        });
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

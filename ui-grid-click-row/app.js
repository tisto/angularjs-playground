(function() {
  'use strict';
  angular.module('myApp', [
    'ngTouch',
    'ui.grid',
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
    function($scope, $timeout, usersService, uiGridConstants) {

      $scope.showDetails = function(row){
        alert("Row " + row.entity.id + " was clicked");
      };

      function rowTemplate() {
        return '<div ng-click="grid.appScope.showDetails(row)" ng-repeat="col in colContainer.renderedColumns track by col.colDef.name" class="ui-grid-cell" ui-grid-cell></div>';
      }

      // grid options
      $scope.gridOptions = {};
      $scope.gridOptions.rowTemplate = rowTemplate();
      $scope.gridOptions.columnDefs = [
        {name: 'id'},
        {name: 'name'},
        {name: 'age'}
      ];
      $scope.gridOptions.enableHorizontalScrollbar = uiGridConstants.scrollbars.NEVER;

      var batch_size = 50;

      usersService.users(0, batch_size)
      .success(function(data, status) {
        $scope.gridOptions.data = data;
      });

    }
  );
})();

==============================================================================
UI Grid
==============================================================================

  $ bower install angular-ui-grid --sav


Click Row Action
----------------


      $scope.$scope = $scope;

      $scope.showDetails = function(row){
        alert(row.entity.id);
      };

      function rowTemplate() {
        return '<div ng-click="getExternalScopes().showDetails(row)" ng-repeat="col in colContainer.renderedColumns track by col.colDef.name" class="ui-grid-cell" ui-grid-cell></div>';
      }

    <div id="grid1" ui-grid="gridOptions" class="grid" external-scopes="$scope"></div>


https://technpol.wordpress.com/2014/08/23/upgrading-to-ng-grid-3-0-ui-grid/


Pagination
----------

app.js::

    var app = angular.module('app', ['ngTouch', 'ui.grid', 'ui.grid.pagination']);

    angular.module('myApp').controller('TableController',
      function($scope, $timeout, usersService) {

        ...

        $scope.gridOptions.onRegisterApi = function (gridApi) {
          $scope.gridApi1 = gridApi;
        };

      }
    }

index.html::

    <div ui-grid="gridOptions1" ui-grid-pagination class="grid"></div>

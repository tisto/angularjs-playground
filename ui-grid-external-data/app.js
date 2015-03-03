/* global angular: true */
/* jshint globalstrict: true */

(function() {
  'use strict';
  angular.module('myApp', [
    'ngTouch',
    'ui.grid',
    'ui.grid.pagination'
  ]);

  angular.module('myApp').factory('usersService',
    function($http) {
      var getUsersRequest = function(paginationOptions, filterOptions) {
        var filter = '';
        if (filterOptions !== undefined) {
          filter = angular.toJson(filterOptions);
        }
        var params = {
          'pageNumber': paginationOptions.pageNumber,
          'pageSize': paginationOptions.pageSize,
          'filter': filter
        };

        return $http({
          method: 'GET',
          url: '/users',
          params: params
        });
      };
      return {
        users: function(paginationOptions, filterOptions) {
          return getUsersRequest(paginationOptions, filterOptions);
        }
      };
    }
  );

  angular.module('myApp').factory('refreshHeight',
    function() {
      return function(gridApi, paginationOptions) {
        // resize the grid, if the page size has changed
        if (gridApi !== undefined) {
          var grid = gridApi.grid;
          // Update row height
          // (See comment https://github.com/angular-ui/ng-grid/blob/master/src/js/core/directives/ui-grid-render-container.js#L169
          // where this really should be implemented.)
          grid.gridHeight =  grid.options.rowHeight * (paginationOptions.pageSize + 1);
          grid.buildStyles();
        }
      };
    }
  );

  angular.module('myApp').controller('TableController',
    function($scope, $timeout, uiGridConstants, usersService, refreshHeight) {

      var paginationOptions = {
        pageNumber: 1,
        pageSize: 10,
        sort: null
      };

      // grid options
      $scope.gridOptions = {
        enableHorizontalScrollbar: 0,
        enableVerticalScrollbar: 0,
        enablePaginationControls: true,
        paginationPageSizes: [10, 25, 50, 75],
        paginationPageSize: 10,
        enableFiltering: true,
        useExternalPagination: true,
        useExternalSorting: true,
        useExternalFiltering: true,
        columnDefs: [
          {name: 'id', enableSorting: false, enableFiltering: false},
          {name: 'name'},
          {name: 'age', enableSorting: false, enableFiltering: false}
        ],
        onRegisterApi: function(gridApi) {
          $scope.gridApi = gridApi;
          // Sorting
          $scope.gridApi.core.on.sortChanged($scope, function(grid, sortColumns) {
            if (sortColumns.length === 0) {
              paginationOptions.sort = null;
            } else {
              paginationOptions.sort = sortColumns[0].sort.direction;
            }
            getPage();
          });
          // Pagination
          gridApi.pagination.on.paginationChanged($scope, function (newPage, pageSize) {
            paginationOptions.pageNumber = newPage;
            paginationOptions.pageSize = pageSize;
            getPage();
            refreshHeight(gridApi, paginationOptions);
          });
          // Filtering
          $scope.gridApi.core.on.filterChanged($scope, function() {
            var grid = this.grid;
            var filterOptions = {};
            for (var i = 0; i < grid.columns.length; i++) {
              if (grid.columns[1].filters.length >= 0) {
                var filter = grid.columns[i].filters[0];
                if (filter !== undefined) {
                  filterOptions[grid.columns[i].name] = filter.term;
                }
              }
            }
            usersService.users(paginationOptions, filterOptions).success(function(data, status) {
              $scope.gridOptions.data = data.results;
            });
          });
        },
      };

      var getPage = function() {
        usersService.users(paginationOptions).success(function(data, status) {
          $scope.gridOptions.totalItems = data.count;
          var firstRow = (paginationOptions.pageNumber - 1) * paginationOptions.pageSize;
          $scope.gridOptions.data = data.results;
        });
      };

      getPage();

    }
  );

  angular.module('myApp').filter('range', function() {
    return function(input, total) {
      total = parseInt(total);
      for (var i=0; i<total; i++)
        input.push(i);
      return input;
    };
  });

})();

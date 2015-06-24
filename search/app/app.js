(function() {
  'use strict';

  angular.module('myApp', ['angular-loading-bar']);

  angular.module('myApp').factory('searchService',
    function($http) {

      var postSearchRequest = function(searchTerm) {
        return $http({
          method: 'GET',
          url: '/api/search/' + searchTerm,
          params: {}
        });
      };
      return {
        searchResults: function(searchTerm) {
          return postSearchRequest(searchTerm);
        }
      };
    }
  );

  angular.module('myApp').controller('SearchController',
    function($scope, $timeout, searchService) {
      var timeout;
      $scope.searchTerm = '';
      $scope.searchResults = [];

      function doSearch() {
        if (timeout) $timeout.cancel(timeout);
        timeout = $timeout(function() {
          searchService.searchResults($scope.searchTerm)
          .success(function(data, status) {
            $scope.searchResults = data;
          });
        }, 350);
      }

      $scope.doSearch = function() {
        doSearch();
      }

    }
  );

})();

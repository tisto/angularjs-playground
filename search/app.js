var myModule = angular.module('myApp', ['ngMockE2E']);
myModule.run(function($httpBackend) {
  searchResults = [
    {
      id: 'lorem-ipsum-1',
      title: 'Lorem Ipsum 1'
    },
    {
      id: 'lorem-ipsum-2',
      title: 'Lorem Ipsum 2'
    },
  ];
  $httpBackend.whenGET('/solr-search').respond(searchResults);

});

myModule.factory('searchService',
  function($http) {
    'use strict';
    var githubUrl = 'https://api.github.com';
    var runUserRequest = function(username, path) {
      // Return the promise from the $http service
      // that calls the Github API using JSONP
      return $http({
        method: 'GET',
        url: '/solr-search'
      });
    };
    // Return the service object with a single function
    // searchResults
    return {
      searchResults: function(username) {
        return runUserRequest(username, 'searchResults');
      }
    };
  }
);

myModule.controller('SearchController',
  function($scope, $timeout, searchService) {
    'use strict';
    var timeout;

    $scope.$watch('search', function(newUserName) {
      if (newUserName) {
        if (timeout) $timeout.cancel(timeout);
        timeout = $timeout(function() {
          searchService.searchResults(newUserName)
          .success(function(data, status) {
            $scope.results = data;
          });
        }, 350);
      }
    });
  }
);

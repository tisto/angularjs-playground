var myModule = angular.module('myApp', ['ui.bootstrap', 'ngMockE2E']);

myModule.run(function($httpBackend) {
  results = [
    {
      id: 'lorem1',
      title: 'Lorem 1'
    },
    {
      id: 'lorem2',
      title: 'Lorem 2'
    },
    {
      id: 'lorem3',
      title: 'Lorem 3'
    },
    {
      id: 'lorem4',
      title: 'Lorem 4'
    },
    {
      id: 'lorem5',
      title: 'Lorem 5'
    },
    {
      id: 'lorem6',
      title: 'Lorem 6'
    },
    {
      id: 'lorem7',
      title: 'Lorem 7'
    },
    {
      id: 'lorem8',
      title: 'Lorem 8'
    },
    {
      id: 'lorem9',
      title: 'Lorem 9'
    },
    {
      id: 'lorem10',
      title: 'Lorem 10'
    },
  ];
  $httpBackend.whenGET('/results').respond(results);
});

myModule.factory('backendService',
  function($http) {
    'use strict';
    var runUserRequest = function() {
      return $http({
        method: 'GET',
        url: '/results'
      });
    };
    return {
      events: function(batchStart, batchSize) {
        return runUserRequest();
      }
    };
  }
);

myModule.controller('PaginationDemoCtrl',
  function($scope, $timeout, backendService) {
    'use strict';
    var timeout;
    var batchStart = 0;
    var batchSize = 5;
    $scope.results = ['foo'];
    backendService.events(batchStart, batchSize)
    .success(function(data, status) {
      $scope.results = data;
    });
    $scope.totalItems = 64;
    $scope.currentPage = 4;

    $scope.setPage = function (pageNo) {
      $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function() {
      console.log('Page changed to: ' + $scope.currentPage);
    };

    $scope.maxSize = 5;
    $scope.bigTotalItems = 175;
    $scope.bigCurrentPage = 1;
  }
);

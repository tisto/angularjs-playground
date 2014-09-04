var myModule = angular.module('myApp', ['ui.bootstrap', 'ngMockE2E']);

myModule.run(function($httpBackend) {
  var results = [];
  for (var i = 0; i < 50; i++) {
    results.push({
      id: 'lorem' + i,
      title: 'Lorem ' + i
    })
  };
  $httpBackend.whenGET('/results?batchSize=10&batchStart=0').respond(
    {
      results: results,
      totalItems: results.length,
    }
  );
  $httpBackend.whenGET('/results?batchSize=5&batchStart=0').respond(
    {
      results: results.slice(0,5),
      totalItems: results.length
    }
  );
  $httpBackend.whenGET('/results?batchSize=5&batchStart=5').respond(
    {
      results: results.slice(5,10),
      totalItems: results.length
    }
  );
  $httpBackend.whenGET('/results').respond(
    {
      results: results,
      totalItems: results.length
    }
  );
});

myModule.factory('backendService',
  function($http) {
    'use strict';
    var runUserRequest = function(batchStart, batchSize) {
      return $http({
        method: 'GET',
        url: '/results',
        params: {
          batchStart: batchStart,
          batchSize: batchSize
        }
      });
    };
    return {
      events: function(batchStart, batchSize) {
        return runUserRequest(batchStart, batchSize);
      }
    };
  }
);

myModule.controller('PaginationDemoCtrl',
  function($scope, $timeout, backendService) {
    'use strict';
    var timeout;
    $scope.results = [];
    $scope.totalItems = 0;
    $scope.currentPage = 0;
    $scope.batchStart = 0;
    $scope.batchSize = 5;
    backendService.events($scope.batchStart, $scope.batchSize)
    .success(function(data, status) {
      $scope.results = data.results;
      $scope.totalItems = data.totalItems + 1;
    });

    $scope.$watch('currentPage', function(newCurrentPage) {
      if (newCurrentPage) {
        if (timeout) $timeout.cancel(timeout);
        timeout = $timeout(function() {
          var batchStart = ((($scope.currentPage - 1) * $scope.batchSize));
          backendService.events(batchStart, $scope.batchSize)
          .success(function(data, status) {
            $scope.results = data.results;
            $scope.totalItems = data.totalItems + 1;
          });
        }, 350);
      }
    });
  }
);

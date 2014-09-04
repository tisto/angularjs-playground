var myModule = angular.module('myApp', ['ui.bootstrap', 'ngMockE2E']);

myModule.run(function($httpBackend) {
  var results = [];
  for (var i = 1; i < 50; i++) {
    results.push({
      id: 'lorem' + i,
      title: 'Lorem ' + i
    })
  };
  $httpBackend.when('POST', '/results', {batchSize: 10, batchStart: 1}).respond(
    {
      results: results.slice(0,10),
      totalItems: results.length
    }
  );
  $httpBackend.when('POST', '/results', {batchSize: 10, batchStart: 11}).respond(
    {
      results: results.slice(10,20),
      totalItems: results.length
    }
  );
  $httpBackend.when('POST', '/results', {batchSize: 10, batchStart: 21}).respond(
    {
      results: results.slice(20,30),
      totalItems: results.length
    }
  );
  $httpBackend.when('POST', '/results', {batchSize: 10, batchStart: 31}).respond(
    {
      results: results.slice(30,40),
      totalItems: results.length
    }
  );
  $httpBackend.when('POST', '/results', {batchSize: 10, batchStart: 41}).respond(
    {
      results: results.slice(40,50),
      totalItems: results.length
    }
  );
});

myModule.factory('backendService',
  function($http) {
    'use strict';
    var runUserRequest = function(batchStart, batchSize) {
      return $http({
        method: 'POST',
        url: '/results',
        data: {
          batchSize: batchSize,
          batchStart: batchStart,
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
    $scope.currentPage = 1;
    $scope.batchStart = 1;
    $scope.batchSize = 10;
    backendService.events($scope.batchStart, $scope.batchSize)
    .success(function(data, status) {
      $scope.results = data.results;
      $scope.totalItems = data.totalItems + 1;
    });

    $scope.$watch('currentPage', function(newCurrentPage) {
      if (newCurrentPage) {
        if (timeout) $timeout.cancel(timeout);
        timeout = $timeout(function() {
          $scope.batchStart = ((($scope.currentPage - 1) * $scope.batchSize) + 1);
          backendService.events($scope.batchStart, $scope.batchSize)
          .success(function(data, status) {
            $scope.results = data.results;
            $scope.totalItems = data.totalItems + 1;
          });
        }, 350);
      }
    });
  }
);

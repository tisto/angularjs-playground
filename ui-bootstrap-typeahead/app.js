var myModule = angular.module('myApp', ['ui.bootstrap', 'ngMockE2E']);

myModule.run(function($httpBackend) {
  $httpBackend.when('GET', '/get-autcomplete-suggestions').respond(
    [
      'Berlin',
      'Bernau',
    ]
  );
});

myModule.controller('TypeaheadCtrl',
  function($scope, $http) {
    'use strict';
    $scope.searchterm = undefined;
    $scope.getAutocompleteSuggestions = function(term) {
      return $http.get('/get-autcomplete-suggestions').then(function(response){
        return response.data;
      });
    };
  }
);

(function() {
  'use strict';

  angular.module('myApp', ['ngSanitize', 'ui.select']);

  angular.module('myApp').controller('SelectController', function($scope, $http) {

    $scope.disabled = undefined;

    $scope.enable = function() {
      $scope.disabled = false;
    };

    $scope.disable = function() {
      $scope.disabled = true;
    };

    $scope.clear = function() {
      $scope.country.selected = undefined;
    };


    $scope.country = {};
    $scope.countries = [];

    $http({
      method: 'GET',
      url: '/countries'
    }).success(function(data) {
      $scope.countries = data;
    });

  });

})();

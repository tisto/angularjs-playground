var myApp = angular.module('myApp', []);

myApp.controller('UsersController',
  function($scope, $http) {
    'use strict';
    $scope.users = [];
    $http({
      method: 'GET',
      url: '/api/users'
    }).success(function(data, status, headers, config) {
      $scope.users = data;
    });
  }
);

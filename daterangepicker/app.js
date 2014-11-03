var myModule = angular.module('myApp', ['daterangepicker']);

myModule.controller('DaterangeController',
  function($scope) {
    'use strict';
    $scope.date = {startDate: null, endDate: null};
  }
);

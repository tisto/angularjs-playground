var myModule = angular.module('myApp', ['daterangepicker']);

myModule.controller('DaterangeController',
  function($scope) {
    'use strict';
    $scope.date = {startDate: null, endDate: null};

    $scope.$watch('date', function(newValue, oldValue) {
      var startDate = newValue.startDate;
      var endDate = newValue.endDate;
      console.log("Start: " + startDate);
      console.log("End: " + endDate);
    });
  }
);


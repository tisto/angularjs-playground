var myModule = angular.module('myApp', []);

myModule.controller('TextController',
  function($scope) {
    'use strict';
    var someText = {};
    someText.message = 'Hi angular world!';
    $scope.someText = someText;
  }
);

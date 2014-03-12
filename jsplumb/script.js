var myModule = angular.module('myApp', []);

myModule.controller('MyController',
  function($scope) {
    'use strict';
    angular.element(document).ready(function () {
      var e0 = jsPlumb.addEndpoint("container0"),
          e1 = jsPlumb.addEndpoint("container1");
      jsPlumb.connect({ source:e0, target:e1 });
    });
    $scope.nodes = [];
  }
);


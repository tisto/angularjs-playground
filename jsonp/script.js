var myModule = angular.module('myApp', []);

myModule.controller('TextController',
  function($scope, $http) {
    'use strict';
    var url = 'http://demo.piwik.org/?module=API&method=VisitsSummary.getVisits&idSite=3&period=day&date=last10&format=json&jsoncallback=JSON_CALLBACK';
    $http.jsonp(url).success(function(data, status, headers, config) {
      $scope.items = data;
    });
  }
);

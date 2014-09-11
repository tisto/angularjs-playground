var myModule = angular.module('myApp', []);

myModule.controller('TextController',
  function($scope, $sce) {
    'use strict';
    $scope.text = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';
    $scope.searchText = 'Lorem';
    $scope.highlight = function(text, search) {
      if (!search) {
        return $sce.trustAsHtml(text);
      }
      return $sce.trustAsHtml(
        text.replace(
          new RegExp(search, 'gi'),
          '<span class="highlightedText">$&</span>'
        )
      );
    };
  }
);

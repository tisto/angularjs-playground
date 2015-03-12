(function() {
  'use strict';

  angular.module('myApp', ['angular-loading-bar']);

  angular.module('myApp').controller('TextController',
    function($scope) {
      var someText = {};
      someText.message = 'Hi angular world!';
      $scope.someText = someText;
    }
  );

})();

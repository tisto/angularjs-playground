(function() {
  'use strict';
  angular.module('myApp', ['ui.grid']);

  angular.module('myApp').controller('TableController',
    function($scope) {
      $scope.myData = [
        {
          "firstName": "Cox",
          "lastName": "Carney",
          "company": "Enormo",
          "employed": true
        },
        {
          "firstName": "Lorraine",
          "lastName": "Wise",
          "company": "Comveyer",
          "employed": false
        },
        {
          "firstName": "Nancy",
          "lastName": "Waters",
          "company": "Fuelton",
          "employed": false
        }
      ];
    }
  );
})();

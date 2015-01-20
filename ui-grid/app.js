(function() {
  'use strict';
  angular.module('myApp', ['ui.grid']);

  angular.module('myApp').controller('TableController',
    function($scope) {
      $scope.gridOptions = {};

      $scope.gridOptions.columnDefs = [
        {name: 'id'},
        {name: 'name'},
        {name: 'age'},
        {name: 'address.city'}
      ];

      $scope.gridOptions.data = [
        {
          "id": 0,
          "name": "Ramsey Cummings",
          "gender": "male",
          "age": 52,
          "address":
          {
            "state": "South Carolina",
            "city": "Glendale"
          }
        },
        {
          "id": 1,
          "name": "Stefanie Huff",
          "gender": "female",
          "age": 70,
          "address":
          {
            "state": "Arizona",
            "city": "Beaverdale"
          }
        },
        {
          "id": 2,
          "name": "Mabel David",
          "gender": "female",
          "age": 52,
          "address":
          {
            "state": "New Mexico",
            "city": "Grazierville"
          }
        },
        {
            "id": 3,
            "name": "Frank Bradford",
            "gender": "male",
            "age": 61,
            "address":
            {
              "state": "Wisconsin",
              "city": "Saranap"
            }
        },
        {
            "id": 4,
            "name": "Forbes Levine",
            "gender": "male",
            "age": 34,
            "address":
            {
              "state": "Vermont",
              "city": "Norris"
            }
        },
        {
          "id": 5,
          "name": "Santiago Mcclain",
          "gender": "male",
          "age": 38,
          "address":
          {
            "state": "Montana",
            "city": "Bordelonville"
          }
        },
      ];
    }
  );
})();

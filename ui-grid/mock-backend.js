(function() {
  'use strict';

  angular.module('e2e-mocks', ['ngMockE2E']).run(function($httpBackend) {

    var users = [
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
    $httpBackend.whenGET('/users/').respond(users);

    // --- PASS THROUGH TEMPLATES --------------------------------------------
    var templates_re = new RegExp('.*.html$');
    $httpBackend.whenGET(templates_re).passThrough();

  });

  angular.module('myApp').requires.push('e2e-mocks');

})();



(function() {
  'use strict';

  angular.module('e2e-mocks', ['ngMockE2E']).run(function($httpBackend) {

    var users = [
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
      {
        "id": 6,
        "name": "Merritt Booker",
        "gender": "male",
        "age": 33,
        "address":
        {
          "state": "New Jersey",
          "city": "Aguila"
        }
      },
      {
        "id": 7,
        "name": "Oconnor Wade",
        "gender": "male",
        "age": 18,
        "address":
        {
          "state": "Virginia",
          "city": "Kenmar"
        }
      },
      {
        "id": 8,
        "name": "Leigh Beasley",
        "gender": "female",
        "age": 53,
        "address":
        {
          "state": "Texas",
          "city": "Alfarata"
        }
      },
      {
        "id": 9,
        "name": "Johns Wood",
        "gender": "male",
        "age": 52,
        "address":
        {
          "state": "Maine",
          "city": "Witmer"
        }
      },
      {
        "id": 10,
        "name": "Ramsey Cummings",
        "gender": "male",
        "age": 52,
        "address":
        {
          "state": "South Carolina",
          "city": "Glendale"
        }
      },
    ];
    $httpBackend.whenGET('/users?batch_start=0&batch_size=10').respond(users);

    users = [
      {
        "id": 11,
        "name": "Hallie Mack",
        "gender": "female",
        "age": 19,
        "address":
        {
          "state": "Minnesota",
          "city": "Darrtown"
        }
      },
      {
        "id": 12,
        "name": "Houston Santos",
        "gender": "male",
        "age": 24,
        "address":
        {
          "state": "Georgia",
          "city": "Crucible"
        }
      },
      {
        "id": 13,
        "name": "Brandy Savage",
        "gender": "female",
        "age": 65,
        "address":
        {
          "state": "Idaho",
          "city": "Nord"
        }
      },
      {
        "id": 14,
        "name": "Finch Barnett",
        "gender": "male",
        "age": 22,
        "address":
        {
          "state": "Ohio",
          "city": "Osmond"
        }
      },
      {
        "id": 15,
        "name": "Nicole Crosby",
        "gender": "female",
        "age": 77,
        "address":
        {
          "state": "Kentucky",
          "city": "Fairfield"
        }
      },
      {
        "id": 16,
        "name": "Carrie Mcconnell",
        "gender": "female",
        "age": 26,
        "address":
        {
          "state": "South Dakota",
          "city": "Waikele"
        }
      },
      {
        "id": 17,
        "name": "Ann James",
        "gender": "female",
        "age": 37,
        "address":
        {
          "state": "North Dakota",
          "city": "Siglerville"
        }
      },
      {
        "id": 18,
        "name": "Becky Sanford",
        "gender": "female",
        "age": 48,
        "address":
        {
          "state": "Massachusetts",
          "city": "Celeryville"
        }
      },
      {
        "id": 19,
        "name": "Kathryn Rios",
        "gender": "female",
        "age": 39,
        "address":
        {
          "state": "Delaware",
          "city": "Kylertown"
        }
      },
      {
        "id": 20,
        "name": "Dotson Vaughn",
        "gender": "male",
        "age": 68,
        "address":
        {
          "state": "Arkansas",
          "city": "Monument"
        }
      }
    ];
    $httpBackend.whenGET('/users?batch_start=10&batch_size=10').respond(users);

    var users_re = new RegExp(/\/users\?batch_start=(\d*)\&batch_size=(\d*)*/);
    $httpBackend.whenGET(users_re).respond(
      function(method, url, data, headers) {
        var myRegexp = /\/users\?batch_start=(\d*)\&batch_size=(\d*)*/;
        var match = myRegexp.exec(url);
        var batch_from = parseInt(match[1]) + 1;
        var batch_to = parseInt(match[1]) + parseInt(match[2]);
        users = [];
        for(var i=batch_from; i <= batch_to; i++) {
          users.push(
            {
              "id": i,
              "name": "John Doe",
              "gender": "male",
              "age": Math.floor((Math.random() * 100) + 1),
              "address":
              {
                "state": "Colorado",
                "city": "Loretto"
              }
            }
          );
        }
        return [200, users];
      }
    );

    // --- PASS THROUGH TEMPLATES --------------------------------------------
    var templates_re = new RegExp('.*.html$');
    $httpBackend.whenGET(templates_re).passThrough();

  });

  angular.module('myApp').requires.push('e2e-mocks');

})();



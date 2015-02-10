(function() {
  'use strict';

  angular.module('e2e-mocks', ['ngMockE2E']).run(function($httpBackend) {

    function get_random_name() {
      var names = [
        "Stefanie Huff",
        "Mabel David",
        "Frank Bradford",
        "Forbes Levine",
        "Santiago Mcclain",
        "Merritt Booker",
        "Oconnor Wade",
        "Leigh Beasley",
        "Johns Wood",
        "Ramsey Cummings"
      ];
      var random_id = Math.floor((Math.random() * 10));
      return names[random_id];
    }

    function get_random_age() {
      return Math.floor((Math.random() * 100) + 1);
    }

    // --- USERS -------------------------------------------------------------
    var users_re = new RegExp(/\/users\?batch_start=(\d*)\&batch_size=(\d*)*/);
    $httpBackend.whenGET(users_re).respond(
      function(method, url, data, headers) {
        var myRegexp = /\/users\?batch_start=(\d*)\&batch_size=(\d*)*/;
        var match = myRegexp.exec(url);
        var batch_from = parseInt(match[1]) + 1;
        var batch_to = parseInt(match[1]) + parseInt(match[2]);
        var users = [];
        for(var i=batch_from; i <= batch_to; i++) {
          var random_id = Math.floor((Math.random() * 10) + 1);
          users.push(
            {
              "id": i,
              "name": get_random_name(),
              "gender": "male",
              "age": get_random_age(),
            }
          );
        }
        return [200, users];
      }
    );

    // --- USER --------------------------------------------------------------
    var users_re = new RegExp(/\/user\?id=(\d*)*/);
    $httpBackend.whenGET(users_re).respond(
      function(method, url, data, headers) {
        var myRegexp = /\/user\?id=(\d*)*/;
        var match = myRegexp.exec(url);
        var user_id = parseInt(match[1]) + 1;
        var user = {
          "id": 1,
          "name": get_random_name(),
          "gender": "male",
          "age": get_random_age(),
        };
        return [200, user];
      }
    );

    // --- PASS THROUGH TEMPLATES --------------------------------------------
    var templates_re = new RegExp('.*.html$');
    $httpBackend.whenGET(templates_re).passThrough();

  });

  angular.module('myApp').requires.push('e2e-mocks');

})();



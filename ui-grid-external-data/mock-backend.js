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

    var users_re = new RegExp(/\/users\?pageNumber=(\d*)\&pageSize=(\d*)*/);
    $httpBackend.whenGET(users_re).respond(
      function(method, url, data, headers) {
        var myRegexp = /\/users\?pageNumber=(\d*)\&pageSize=(\d*)*/;
        var match = myRegexp.exec(url);
        var pageNumber = parseInt(match[1]);
        var pageSize = parseInt(match[2]);
        var users = {
          'results': [],
          'count': 90
        };
        var start = (pageNumber - 1) * pageSize + 1;
        var end = (pageSize * pageNumber) + 1;
        for(var i=start; i < end; i++) {
          var random_id = Math.floor((Math.random() * 10) + 1);
          users.results.push(
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

    // --- PASS THROUGH TEMPLATES --------------------------------------------
    var templates_re = new RegExp('.*.html$');
    $httpBackend.whenGET(templates_re).passThrough();

  });

  angular.module('myApp').requires.push('e2e-mocks');

})();



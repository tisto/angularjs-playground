var myApp;

angular.module('e2e-mocks', ['ngMockE2E']).run(function($httpBackend) {

  // -- TICKETS --------------------------------------------------------------
  var tickets = {
    "cols": [
      {
          "id": "zeit",
          "label": "Zeit",
          "type": "string"
      },
      {
          "id": "anfragen",
          "label": "Anfragen",
          "type": "number"
      }
    ],
    "rows": [
      {"c": [{"v": "07/11/2014"}, {"v": 5}]},
      {"c": [{"v": "08/11/2014"}, {"v": 0}]},
      {"c": [{"v": "09/11/2014"}, {"v": 0}]},
      {"c": [{"v": "10/11/2014"}, {"v": 30}]},
      {"c": [{"v": "11/11/2014"}, {"v": 0}]},
      {"c": [{"v": "12/11/2014"}, {"v": 0}]},
      {"c": [{"v": "13/11/2014"}, {"v": 0}]}
    ]
  };
  var re = new RegExp('get_tickets');
  $httpBackend.whenGET(re).respond(tickets);


  // --- PASS THROUGH TEMPLATES ----------------------------------------------
  var templates_re = new RegExp('.*.html$');
  $httpBackend.whenGET(templates_re).passThrough();

});

myApp.requires.push('e2e-mocks');


var myApp;

angular.module('e2e-mocks', ['ngMockE2E']).run(function($httpBackend) {

  // -- TICKETS --------------------------------------------------------------
  var day_tickets = {
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
  $httpBackend.whenGET('get_tickets?daterange=day').respond(day_tickets);

  var day_tickets = {
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
      {"c": [{"v": "2014-11-11"}, {"v": 5}]},
      {"c": [{"v": "2014-11-12"}, {"v": 0}]},
      {"c": [{"v": "2014-11-13"}, {"v": 0}]},
      {"c": [{"v": "2014-11-14"}, {"v": 30}]},
      {"c": [{"v": "2014-11-15"}, {"v": 0}]},
      {"c": [{"v": "2014-11-16"}, {"v": 0}]},
      {"c": [{"v": "2014-11-17"}, {"v": 0}]}
    ]
  };
  $httpBackend.whenGET('get_tickets?daterange=day&startDate=2014-11-11&endDate=2014-11-17').respond(day_tickets);

  var week_tickets = {
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
      {"c": [{"v": 41}, {"v": 139}]},
      {"c": [{"v": 42}, {"v": 193}]},
      {"c": [{"v": 43}, {"v": 160}]},
      {"c": [{"v": 44}, {"v": 408}]},
      {"c": [{"v": 45}, {"v": 153}]},
      {"c": [{"v": 46}, {"v": 97}]},
      {"c": [{"v": 47}, {"v": 0}]}
    ]
  };
  $httpBackend.whenGET('get_tickets?daterange=week').respond(week_tickets);

  var month_tickets = {
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
      {"c": [{"v": "2014, 2"}, {"v": 139}]},
      {"c": [{"v": "2014, 3"}, {"v": 193}]}
    ]
  };
  $httpBackend.whenGET('get_tickets?daterange=month').respond(month_tickets);

  var year_tickets = {
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
      {"c": [{"v": "2007"}, {"v": 9}]},
      {"c": [{"v": "2008"}, {"v": 83}]},
      {"c": [{"v": "2009"}, {"v": 96}]},
      {"c": [{"v": "2010"}, {"v": 52}]},
      {"c": [{"v": "2011"}, {"v": 193}]},
      {"c": [{"v": "2012"}, {"v": 293}]},
      {"c": [{"v": "2013"}, {"v": 194}]},
      {"c": [{"v": "2014"}, {"v": 139}]},
    ]
  };
  $httpBackend.whenGET('get_tickets?daterange=year').respond(year_tickets);

  // --- PASS THROUGH TEMPLATES ----------------------------------------------
  var templates_re = new RegExp('.*.html$');
  $httpBackend.whenGET(templates_re).passThrough();

});

myApp.requires.push('e2e-mocks');


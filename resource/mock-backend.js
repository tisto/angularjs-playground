var myApp;

angular.module('e2e-mocks', ['ngMockE2E']).run(function($httpBackend) {

  var mockMembers = [
    {
      "fullname": "Timo Stollenwerk",
      "username": "tisto",
      "email": "tisto@plone.org",
      "groups": []
    }
  ];
  $httpBackend.whenGET('/api/members').respond(mockMembers);

  // --- PASS THROUGH TEMPLATES ----------------------------------------------
  var templates_re = new RegExp('.*.html$');
  $httpBackend.whenGET(templates_re).passThrough();

});

angular.module('myApp').requires.push('e2e-mocks');



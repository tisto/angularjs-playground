var myApp;

angular.module('e2e-mocks', ['ngMockE2E']).run(function($httpBackend) {

  // -- USERS ----------------------------------------------------------------
  var users = [
    {firstname: 'John', lastname: 'Doe'},
    {firstname: 'Jane', lastname: 'Doe'},
    {firstname: 'Max', lastname: 'Mustermann'},
  ];
  $httpBackend.whenGET('get_users').respond(users);

  // --- PASS THROUGH TEMPLATES ----------------------------------------------
  var templates_re = new RegExp('.*.html$');
  $httpBackend.whenGET(templates_re).passThrough();

});

myApp.requires.push('e2e-mocks');

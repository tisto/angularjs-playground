(function() {
  'use strict';

  angular.module('e2e-mocks', ['ngMockE2E']).run(function($httpBackend) {

    // --- REST JOB SERVICE --------------------------------------------------

    var searchResults = [
      {
        title: 'Noam Chomsky',
        description: '',
      },
      {
        title: 'Howard Zinn',
        description: '',
      },
      {
        title: 'Arundhati Roy',
        description: '',
      },
    ];

    var searchRegExp = new RegExp(/\/api\/search\/(\d*)*/);
    $httpBackend.when('GET', searchRegExp).respond(
      function(method, url, data, headers) {
        var match = searchRegExp.exec(url);
        var searchTerm = match[1];
        console.log('[MOCK] GET /api/search/' + searchTerm);
        return [200, searchResults];
      }
    );

    // --- PASS THROUGH TEMPLATES --------------------------------------------
    var templates_re = new RegExp('.*.html$');
    $httpBackend.whenGET(templates_re).passThrough();

  });

  angular.module('myApp').requires.push('e2e-mocks');

})();

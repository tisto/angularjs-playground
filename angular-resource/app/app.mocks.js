(function() {
  'use strict';

  angular.module('e2e-mocks', ['ngMockE2E']).run(function($httpBackend) {

    // --- REST JOB SERVICE --------------------------------------------------

    var jobs = [
      {
        id: 0,
        title: 'First Job',
      },
      {
        id: 1,
        title: 'Second Job',
      },
      {
        id: 2,
        title: 'Third Job',
      },
    ];



    // LIST JOBS
    $httpBackend.when('GET', '/api/jobs').respond(
      function(method, url, data, headers) {
        console.log('GET /api/jobs');
        return [200, jobs];
      }
    );

    // CREATE JOB
    $httpBackend.when('POST', '/api/jobs').respond(
      function(method, url, data, headers) {
        console.log('POST /api/jobs ' + data);
        jobs.push(angular.fromJson(data));
        return [201];
      }
    )

    // READ JOB
    /*
    $httpBackend.when('GET', '/api/jobs/1').respond(
      function(method, url, data, headers) {
        return [200, job[0]];
      }
    );*/

    // UPDATE JOB
    /*
    $httpBackend.when('PUT', '/api/jobs/1').respond(
      return [200, {status: 'OK'}];
    )
    */

    // DELETE JOB
    $httpBackend.when('DELETE', /\/api\/users(\/\d*)*/).respond(
      function(method, url, data, headers) {
        console.log('POST /api/jobs ' + data);
        return [204, {status: 'No content'}];
      }
    )

    // --- PASS THROUGH TEMPLATES --------------------------------------------
    var templates_re = new RegExp('.*.html$');
    $httpBackend.whenGET(templates_re).passThrough();

  });

  angular.module('myApp').requires.push('e2e-mocks');

})();

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

    function jobsIndexById(id) {
      if (!id) return null;
      var index = -1;

      for(var i = 0; i < jobs.length; i++) {
        var o = jobs[i];
        if (id == o.id) {
          index = i;
          break;
        }
      }

      return index;
    }

    // LIST JOBS
    $httpBackend.when('GET', '/jobs').respond(
      function(method, url, data, headers) {
        console.log('[MOCK] GET /jobs');
        return [200, jobs];
      }
    );

    // CREATE JOB
    $httpBackend.when('POST', '/jobs').respond(
      function(method, url, data, headers) {
        console.log('[MOCK] POST /jobs ' + data);
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
    var jobsRegExp = new RegExp(/\/jobs\/(\d*)*/);
    $httpBackend.when('DELETE', jobsRegExp).respond(
      function(method, url, data, headers) {
        var match = jobsRegExp.exec(url);
        var jobId = parseInt(match[1]);
        var index = jobsIndexById(jobId);
        console.log('[MOCK] DELETE /jobs/' + jobId);
        jobs.splice(index, 1);
        return [204, {status: 'No content'}];
      }
    )

    // --- PASS THROUGH TEMPLATES --------------------------------------------
    var templates_re = new RegExp('.*.html$');
    $httpBackend.whenGET(templates_re).passThrough();

  });

  angular.module('myApp').requires.push('e2e-mocks');

})();

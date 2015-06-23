(function() {
  'use strict';

  angular.module('myApp', ['angular-loading-bar', 'restangular']);

  angular.module('myApp').controller('JobsController',
    function($scope, Restangular) {
      var baseJobs = Restangular.all('jobs');

      $scope.newId = 3;
      function generatedUniqueId() {
        $scope.newId += 1;
        return $scope.newId - 1;
      }

      $scope.listJobs = function() {
        baseJobs.getList().then(function(jobs) {
          $scope.jobs = jobs;
        }, function(response) {
          console.log("Error with status code", response.status);
        });
      }

      $scope.createJob = function(jobTitle) {
        baseJobs.post({
          'id': generatedUniqueId(),
          'title': jobTitle
        });
        $scope.jobTitle = '';
        $scope.listJobs();
      }

      $scope.deleteJob = function(job) {
        job.remove().then(function() {
          // edited: a better solution, suggested by Restangular themselves
          // since previously _.without() could leave you with an empty non-restangular array
          // see https://github.com/mgonto/restangular#removing-an-element-from-a-collection-keeping-the-collection-restangularized
          var index = $scope.jobs.indexOf(job);
          if (index > -1) $scope.jobs.splice(index, 1);
        }, function(response) {
          console.log("Error with status code", response.status);
        });
      }

      $scope.listJobs();

    }
  );

})();

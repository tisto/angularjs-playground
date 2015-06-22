(function() {
  'use strict';

  angular.module('myApp', ['angular-loading-bar', 'ngResource', 'ngMockE2E']);

  angular.module('myApp').factory("Jobs", function($resource) {
    return $resource("/api/jobs/:id");
  });

  angular.module('myApp').controller('TextController',
    function($scope, Jobs) {
      var someText = {};
      $scope.jobs = [];
      $scope.newId = 3;
      function generatedUniqueId() {
        $scope.newId += 1;
        return $scope.newId - 1;
      }
      someText.message = 'Hi angular world!';
      $scope.someText = someText;

      $scope.listJobs = function() {
        Jobs.query(function(data) {
          $scope.jobs = data;
        });
      }
      $scope.createJob = function(jobTitle) {
        Jobs.save({
          'id': generatedUniqueId(),
          'title': jobTitle
        });
        $scope.listJobs();
      }
      $scope.readJob = function(jobId) {
        Jobs.get(jobId);
      }
      $scope.updateJob = function(jobId, jobTitle) {}
      $scope.deleteJob = function(jobId) {
        console.log('DELETE ' + jobId);
        Jobs.delete(jobId);
        //Jobs.listJobs();
      }

      $scope.listJobs();

    }
  );

})();

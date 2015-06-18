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
      someText.message = 'Hi angular world!';
      $scope.someText = someText;

      $scope.listJobs = function() {
        Jobs.query(function(data) {
          $scope.jobs = data;
        });
      }
      $scope.createJob = function(jobTitle) {
        Jobs.save({'title': jobTitle});
        $scope.listJobs();
      }
      $scope.readJob = function(jobId) {
        Jobs.get()
      }
      $scope.updateJob = function(jobId, jobTitle) {}
      $scope.deleteJob = function(jobId) {}

      $scope.listJobs();

    }
  );

})();

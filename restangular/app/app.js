(function() {
  'use strict';

  angular.module('myApp', ['angular-loading-bar', 'restangular']);

  angular.module('myApp').controller('JobsController',
    function($scope, Restangular) {
      var baseJobs = Restangular.all('jobs');
      baseJobs.getList().then(function(jobs) {
        $scope.jobs = jobs;
      });
    }
  );

})();

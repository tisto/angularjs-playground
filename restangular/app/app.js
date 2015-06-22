(function() {
  'use strict';

  angular.module('myApp', ['angular-loading-bar', 'restangular']);

  angular.module('myApp').controller('JobsController',
    function($scope) {
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
      $scope.jobs = jobs;
    }
  );

})();

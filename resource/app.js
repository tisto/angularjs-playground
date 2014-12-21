(function() {
'use strict';

  var myApp = angular.module('myApp', ['ngResource']);

  myApp.controller('MembersController',
    function($scope, Members) {
      'use strict';
      $scope.members = [];

      Members.query(function(response) {
        $scope.members = response;
      });

    }
  );

  myApp.factory('Members', function($resource){
    return $resource('/api/members/', {})
  });

})();



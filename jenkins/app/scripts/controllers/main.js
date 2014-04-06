'use strict';

angular.module('jenkinsApp')
  .controller('MainCtrl', function ($scope, $http) {
    var url = 'http://127.0.0.1:9999/job/job1/api/json?depth=1&tree=builds[url,id,number,result]';
    $http.get(url).success(function(data, status, headers, config) {
      $scope.data = data;
    });
  }
);

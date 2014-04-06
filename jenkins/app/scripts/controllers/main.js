'use strict';

angular.module('jenkinsApp')
  .controller('MainCtrl', function ($scope, $http) {
    var url = 'http://jenkins.plone.org/job/plone-5.0-python-2.7/api/json?tree=builds[id,url,number,result,actions[failCount,totalCount]]'
    $http.get(url).success(function(data, status, headers, config) {
      $scope.data = data;
    });
  }
);

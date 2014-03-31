var myModule = angular.module('myApp', ['ngRoute']);
var messages = [
  {
    id: 0,
    sender: 'john',
    recipients: ['jane@doe.com'],
    subject: 'hi',
    date: 'today',
    message: 'yo'
  },
  {
    id: 1,
    sender: 'jane',
    recipients: ['john@doe.com'],
    subject: 'foo',
    date: 'yesterday',
    message: 'yo ho'
  }
];

myModule.config(['$routeProvider',
  function($routeProvider) {
  'use strict';
  $routeProvider
  .when('/', {
      controller: 'ListController',
      templateUrl: 'list.html'
    }
  ).when('/view/:id', {
      controller: 'DetailController',
      templateUrl: 'detail.html'
    }
  ).otherwise({
    redirectTo: '/'
  });
}]);

myModule.controller('ListController', ['$scope',
  function($scope) {
    'use strict';
    $scope.messages = messages;
  }
]);

myModule.controller('DetailController', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    'use strict';
    $scope.message = messages[$routeParams.id];
  }
]);

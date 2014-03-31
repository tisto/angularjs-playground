var myModule = angular.module('myApp', ['ngRoute']);
var messages = [
  {
    id: 0,
    subject: 'hi',
    date: 'today',
    message: 'yo'
  }
];

myModule.config(['$routeProvider', 'ListController', 'DetailController',
  function($routeProvider, ListController, DetailController) {
  'use strict';
  $routeProvider
  .when('/', {
      controller: ListController,
      templateUrl: 'list.html'
    }
  ).when('/view/:id', {
      controller: DetailController,
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

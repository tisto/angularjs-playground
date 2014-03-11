var myModule = angular.module('myApp', []);

myModule.controller('MyController',
  function($scope) {
    $scope.customer = {
      name: 'Naomi',
      address: '1600 Amphitheatre'
    };
  }
);

myModule.directive('myFirstDirective',
  function() {
    return {
      template: 'Name: {{customer.name}} Address: {{customer.address}}'
    };
  }
);


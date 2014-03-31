var myapp = angular.module('myapp', ['ui.router']);

var navigation = [
  {
    id: 'anfragen',
    title: 'Anfragen'
  },
  {
    id: 'demographische-merkmale',
    title: 'Demographische Merkmale'
  },
  {
    id: 'marketing',
    title: 'Marketing'
  },
  {
    id: 'recherche',
    title: 'Recherche'
  },
  {
    id: 'infopaket',
    title: 'Infopaket'
  },
  {
    id: 'export',
    title: 'Export'
  },
];


myapp.controller('NavigationController',
  function($scope) {
    'use strict';
    $scope.navigation = navigation;
  }
);

myapp.directive('navigationDirective',
  function() {
    'use strict';
    return {
      templateUrl: 'navigation.html'
    };
  }
);

myapp.config(function($stateProvider) {
  angular.forEach(navigation, function(value, key){
    $stateProvider.state(value.id, {
      url: '/' + value.id,
      templateUrl: value.id + '.html'
    });
  });
});

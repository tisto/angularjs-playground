(function() {
  'use strict';

  angular.module('myapp', ['ui.router']);

  var navigation = [
    {
      id: 'page1',
      title: 'Page 1'
    },
    {
      id: 'page2',
      title: 'Page 2'
    },
    {
      id: 'page3',
      title: 'Page 3'
    },
  ];


  angular.module('myapp').controller('NavigationController',
    function($scope) {
      $scope.navigation = navigation;
    }
  );

  angular.module('myapp').directive('navigationDirective',
    function() {
      return {
        templateUrl: 'navigation.html'
      };
    }
  );

  angular.module('myapp').config(function($urlRouterProvider, $stateProvider) {
    angular.forEach(navigation, function(value, key){
      $urlRouterProvider.otherwise('/page1');
      $stateProvider
        .state(value.id, {
          url: '/' + value.id,
          templateUrl: value.id + '.html'
        });
    });

  });

})();

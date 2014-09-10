(function() {
  'use strict';

  var app = angular.module(
    'AbnTest',
    [
      'angularBootstrapNavTree',
      'ngAnimate',
      'ngMockE2E'
    ]
  );

  app.run(function($httpBackend) {
    $httpBackend.when('GET', '/get-folder-children', {path: '/'}).respond(
      [
        {
          id: 'news',
          label: 'News',
          path: '/news',
          uid: '1234',
          children: []
        },
        {
          id: 'events',
          label: 'Events',
          path: '/events',
          uid: '4567',
          children: []
        }
      ]
    );
    $httpBackend.when('GET', '/get-folder-children', {path: '/news'}).respond(
      [
        {
          id: 'news-1',
          label: 'News 1',
          path: '/news/news-1',
          uid: '1234',
          children: []
        },
        {
          id: 'news-2',
          label: 'News 2',
          path: '/news/news-2',
          uid: '4567',
          children: []
        }
      ]
    );
  });

  app.factory('backendService',
    function($http) {
      var runUserRequest = function(path) {
        return $http({
          method: 'GET',
          url: '/get-folder-children',
          data: {
            path: path
          }
        });
      };
      return {
        children: function(path) {
          return runUserRequest(path);
        }
      };
    }
  );

  app.controller('AbnTestController', function($scope, $timeout, backendService) {

    $scope.my_data = [
      {
        label: 'North America',
        children: []
      }, {
        label: 'South America',
        children: []
      }
    ];

    backendService.children('/').success(function(data, status) {
      $scope.my_data = data;
      console.log(data);
    });


    $scope.my_tree_handler = function(branch) {
      var _ref;
      $scope.output = "You selected: " + branch.label;
      if (branch.label == 'North America') {
        branch.children = [
          {
            label: 'Canada',
            children: ['Toronto', 'Vancouver']
          }, {
            label: 'USA',
            children: ['New York', 'Los Angeles']
          }, {
            label: 'Mexico',
            children: ['Mexico City', 'Guadalajara']
          }
        ];
      }
      if (branch.label == 'South America') {
        branch.children = [
          {
            label: 'Venezuela',
            children: ['Caracas', 'Maracaibo']
          }, {
            label: 'Brazil',
            children: ['Sao Paulo', 'Rio de Janeiro']
          }, {
            label: 'Argentina',
            children: ['Buenos Aires', 'Cordoba']
          }
        ];
      }
      if ((_ref = branch.data) !== null ? _ref.description : void 0) {
        return $scope.output += '(' + branch.data.description + ')';
      }
    };

    return $scope.try_adding_a_branch = function() {
      var b;
      b = tree.get_selected_branch();
      return tree.add_branch(b, {
        label: 'New Branch',
        data: {
          something: 42,
          "else": 43
        }
      });
    };

  });

}).call(this);

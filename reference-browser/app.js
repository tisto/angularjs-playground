(function() {
  'use strict';

  angular.module('ReferenceBrowserApp', ['angularBootstrapNavTree', 'ngAnimate']);

  angular.module('ReferenceBrowserApp').factory('treeService',
    function($http, $log) {
      var runUserRequest = function(path) {
        $log.debug('GET: /tree' + path);
        return $http({
          method: 'GET',
          url: '/tree' + path
        });
      };
      return {
        events: function(path) {
          return runUserRequest(path);
        }
      };
    }
  );

  angular.module('ReferenceBrowserApp').controller('ReferenceBrowserController', function($scope, $timeout, treeService) {
    var apple_selected, tree, treedata_avm, treedata_geography;
    $scope.my_tree_handler = function(branch) {
      var _ref;
      $scope.output = "You selected: " + branch.path + " | UUID: " + branch.uuid;
      if ((_ref = branch.data) != null ? _ref.description : void 0) {
        return $scope.output += '(' + branch.data.description + ')';
      }
      // load children if they haven't been already loaded.
      if (branch.children.length === 0) {
        $timeout(function() {
          treeService.events(branch.path)
          .success(function(data) {
            angular.forEach(data, function(value, key) {
              console.log(key + ': ' + value.title);
              var b;
              b = tree.get_selected_branch();
              return tree.add_branch(b, value);
            });
          });
        });
      }
    };
    $scope.new_node = '';

    $scope.my_data = [];

    $timeout(function() {
      treeService.events('/')
      .success(function(data) {
        $scope.my_data = data;
        console.log("Set tree data");
      });
    });

    $scope.my_tree = tree = {};

  });

}).call(this);

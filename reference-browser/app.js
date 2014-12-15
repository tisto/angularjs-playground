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
        getTreeData: function(path) {
          return runUserRequest(path);
        }
      };
    }
  );

  angular.module('ReferenceBrowserApp').controller('ReferenceBrowserController', function($scope, $timeout, treeService) {
    var apple_selected, tree, treedata_avm, treedata_geography;
    $scope.selected_uuid = '';
    $scope.selected_path = '/';
    $scope.my_data = [];
    $scope.my_tree_handler = function(branch) {
      var _ref;
      $scope.selected_path = branch.path;
      $scope.selected_uuid = branch.uuid;
      if ((_ref = branch.data) != null ? _ref.description : void 0) {
        return $scope.output += '(' + branch.data.description + ')';
      }
      // load children if they haven't been already loaded.
      if (branch.children.length === 0) {
        $timeout(function() {
          treeService.getTreeData(branch.path)
          .success(function(data) {
            angular.forEach(data, function(value, key) {
              var b;
              b = tree.get_selected_branch();
              return tree.add_branch(b, value);
            });
          });
        });
      }
    };



    $timeout(function() {
      treeService.getTreeData($scope.selected_path)
      .success(function(data) {
        $scope.my_data = data;
      });
    });

    $scope.my_tree = tree = {};

  });

})();

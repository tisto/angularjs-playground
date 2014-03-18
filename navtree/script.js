var myModule, deps;

deps = ['angularBootstrapNavTree', 'ngAnimate'];

myModule = angular.module('AbnTest', deps);

var example_treedata = [
  {
    label: 'Animal',
    children: [
      {
        label: 'Dog',
        data: {
          description: 'mans best friend'
        }
      }, {
        label: 'Cat',
        data: {
          description: 'Felis catus'
        }
      }, {
        label: 'Hippopotamus',
        data: {
          description: 'hungry, hungry'
        }
      }, {
        label: 'Chicken',
        children: ['White Leghorn', 'Rhode Island Red', 'Jersey Giant']
      }
    ]
  }, {
    label: 'Vegetable',
    children: [
      {
        label: 'Oranges'
      }, {
        label: 'Apples',
        children: [
          {
            label: 'Granny Smith'
          }, {
            label: 'Red Delicous'
          }, {
            label: 'Fuji'
          }
        ]
      }
    ]
  }, {
    label: 'Mineral',
    children: [
      {
        label: 'Rock',
        children: ['Igneous', 'Sedimentary', 'Metamorphic']
      }, {
        label: 'Metal',
        children: ['Aluminum', 'Steel', 'Copper']
      }, {
        label: 'Plastic',
        children: [
          {
            label: 'Thermoplastic',
            children: ['polyethylene', 'polypropylene', 'polystyrene', ' polyvinyl chloride']
          }, {
            label: 'Thermosetting Polymer',
            children: ['polyester', 'polyurethane', 'vulcanized rubber', 'bakelite', 'urea-formaldehyde']
          }
        ]
      }
    ]
  }
];

myModule.factory('treeService',
  function() {
    'use strict';
    return example_treedata;
  }
);

myModule.controller('AbnTestController', ['$scope', 'treeService',
  function($scope, treeService) {
    'use strict';
    var myModule_selected;
    $scope.my_tree_handler = function(branch) {
      var _ref;
      $scope.output = 'You selected: ' + branch.label;
      if ((_ref = branch.data) !== null ? _ref.description: void 0) {
        return $scope.output += '(' + branch.data.description + ')';
      }
    };
    myModule_selected = function(branch) {
      $scope.output = 'APPLE! : ' + branch.label;
      return $scope.output;
    };
    $scope.example_treedata = treeService;
  }
]);

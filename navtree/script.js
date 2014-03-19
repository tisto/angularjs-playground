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
    $scope.my_tree_handler = function(branch) {
      $scope.output = 'You selected: ' + branch.label;
    };
    $scope.example_treedata = treeService;
  }
]);

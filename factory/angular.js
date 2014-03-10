var flowchartModule = angular.module('FlowchartApp', []);

flowchartModule.factory('flowchart',
  ['$window', function(win) {
    'use strict';
    var flowchart = {
      'nodes': ['foo']
    };
    flowchart.addNode = function(node) {
      flowchart.nodes.push(node);
    };
    return flowchart;
  }]
);

flowchartModule.controller('FlowchartController',
  ['$scope','flowchart', function ($scope, flowchart) {
    'use strict';
    $scope.flowchart = flowchart;
    $scope.addNode = function(node) {
      flowchart.addNode(node);
    };
  }]
);

var myModule = angular.module('myApp', []);

myModule.factory('flowchart', function() {
  var flowchart = null;

  return {
    get: function() { return flowchart; },
    set: function(fc) { flowchart = fc; }
  };
});

myModule.run(function(flowchart) {
  instance = jsPlumb.getInstance({
    DragOptions : { cursor: 'pointer', zIndex:2000 },
    ConnectionOverlays : [
      [ 'Arrow', { location: 0.99 } ],
      [ 'Label',
        {
          location: 0.2,
          id: 'label',
          cssClass: 'aLabel connectionLabel'
        }
      ]
    ],
    Container:'flowchart'
  });
  flowchart.set(instance);
});

myModule.controller('MyController',
  function($scope, flowchart) {
    'use strict';
    $scope.flowchart = flowchart;
    instance = $scope.flowchart.get();
    var e0 = instance.addEndpoint('container0');
    var e1 = instance.addEndpoint('container1');
    instance.connect({ source:e0, target:e1 });
  }
);


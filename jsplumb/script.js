var myModule = angular.module('myApp', []);

var flowchartEndpointOptions = {
  endpoint:"Dot",
  isSource:true,
  isTarget:true,
  maxConnections:-1,
  paintStyle:{
    strokeStyle: "#7AB02C",
    fillStyle: "#7AB02C",
    radius: 3,
    lineWidth: 3
  },
  hoverPaintStyle: {
    fillStyle: "#216477",
    strokeStyle: "#216477"
  },
  connector: [
    "Flowchart",
    { stub:[40, 60], gap:10, cornerRadius:5, alwaysRespectStubs:true }
  ],
  connectorStyle: {
    lineWidth: 3,
    strokeStyle: "black",
    joinstyle: "round",
    outlineWidth: 2,
    outlineColor: "white"
  },
  connectorHoverStyle: {
    lineWidth: 4,
    strokeStyle: "black",
    outlineWidth: 2,
    outlineColor: "white"
  },
  dropOptions:{ hoverClass:"hover", activeClass:"active" },
};

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

    var _addEndpoints = function(toId) {
      var anchors = ["TopCenter", "BottomCenter", "LeftMiddle", "RightMiddle"];
      for (var i = 0; i < anchors.length; i++) {
        var sourceUUID = toId + anchors[i];
        instance.addEndpoint(
          toId,
          flowchartEndpointOptions,
          {
            anchor:anchors[i],
            uuid:sourceUUID
          }
        );
      }
    };

    instance.doWhileSuspended(function() {
      instance.draggable($(".node"), { grid: [20, 20] });
      _addEndpoints('container0');
      _addEndpoints('container1');
      _addEndpoints('container2');
    });
  }
);


angular.module('myApp', []);

var flowchartEndpointOptions = {
  endpoint:'Dot',
  isSource:true,
  isTarget:true,
  maxConnections:-1,
  paintStyle:{
    strokeStyle: '#7AB02C',
    fillStyle: '#7AB02C',
    radius: 3,
    lineWidth: 3
  },
  hoverPaintStyle: {
    fillStyle: '#216477',
    strokeStyle: '#216477'
  },
  connector: [
    'Flowchart',
    { stub:[40, 60], gap:10, cornerRadius:5, alwaysRespectStubs:true }
  ],
  connectorStyle: {
    lineWidth: 3,
    strokeStyle: 'black',
    joinstyle: 'round',
    outlineWidth: 2,
    outlineColor: 'white'
  },
  connectorHoverStyle: {
    lineWidth: 4,
    strokeStyle: 'black',
    outlineWidth: 2,
    outlineColor: 'white'
  },
  dropOptions:{ hoverClass:'hover', activeClass:'active' },
};

angular.module('myApp').factory('flowchart', function() {
  var flowchart = null;

  return {
    get: function() { return flowchart; },
    set: function(fc) { flowchart = fc; }
  };
});

angular.module('myApp').run(function(flowchart) {
  var instance = jsPlumb.getInstance({
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
  flowchart.set({
    'id': 1,
    'instance': instance,
    'nodes': [
      {
        'id': 0,
        'title': 'Public',
        'text': 'R0-Resektion',
        'type': 'status',
        'top': 200,
        'left': 10,
      },
      {
        'id': 1,
        'title': 'Private',
        'text': 'UICC-Stad. I/II ohne RF *',
        'type': 'status',
        'top': 0,
        'left': 500,
      },
      {
        'id': 2,
        'title': 'Pending',
        'text': 'UICC-Stad. I/II mit RF *',
        'type': 'status',
        'top': 340,
        'left': 420,
      },
    ]
  });
});

angular.module('myApp').controller('MyController',
  function($scope, flowchart) {
    $scope.flowchart = flowchart.get();
    var instance = $scope.flowchart.instance;
    var _addEndpoints = function(toId) {
      var anchors = ['TopCenter', 'BottomCenter', 'LeftMiddle', 'RightMiddle'];
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

    jsPlumb.ready(function() {
      instance.doWhileSuspended(function() {
        instance.draggable($('.node'), { grid: [20, 20] });
        _addEndpoints('container0');
        _addEndpoints('container1');
        _addEndpoints('container2');
        instance.connect({uuids:['container0RightMiddle', 'container1LeftMiddle'], editable:true});
        instance.connect({uuids:['container1BottomCenter', 'container2RightMiddle'], editable:true});
        instance.connect({uuids:['container2LeftMiddle', 'container0BottomCenter'], editable:true});
      });
    });
  }
);

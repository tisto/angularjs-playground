var myModule = angular.module('myApp', []);

var flowchartEndpointOptions = {
  endpoint: 'Dot',
  isSource: true,
  isTarget: true,
  maxConnections: -1,
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

myModule.factory('flowchart', function() {
  'use strict';
  var flowchart = null;

  return {
    get: function() { return flowchart; },
    set: function(fc) { flowchart = fc; }
  };
});

myModule.run(function(flowchart) {
  'use strict';
  var instance = jsPlumb.getInstance({
    Endpoint : ['Dot', {radius:2}],
    HoverPaintStyle : {strokeStyle:'#1e8151', lineWidth:2 },
    ConnectionOverlays : [
      [
        'Arrow', {
          location: 1,
          id: 'arrow',
          length: 14,
          foldback: 0.8
        }
      ],
      [ 'Label', { label:'FOO', id:'label', cssClass:'aLabel' }]
    ],
    Container: 'workflow'
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
    ],
    'connections': [
      ['container0', 'container1'],
      ['container1', 'container2'],
      ['container1', 'container0'],
    ],
  });
});

myModule.controller('MyController',
  function($scope, flowchart) {
    'use strict';
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

      var windows = jsPlumb.getSelector('#workflow .w');

      // initialise draggable elements.
      instance.draggable(windows);

      // bind a click listener to each connection; the connection is deleted. you could of course
      // just do this: jsPlumb.bind('click', jsPlumb.detach), but I wanted to make it clear what was
      // happening.
      instance.bind('click', function(c) {
        instance.detach(c);
      });

      // bind a connection listener. note that the parameter passed to this function contains more than
      // just the new connection - see the documentation for a full list of what is included in 'info'.
      // this listener sets the connection's internal
      // id as the label overlay's text.
      instance.bind('connection', function(info) {
        info.connection.getOverlay('label').setLabel(info.connection.id);
      });

      instance.doWhileSuspended(function() {

        // make each '.ep' div a source and give it some parameters to work with.  here we tell it
        // to use a Continuous anchor and the StateMachine connectors, and also we give it the
        // connector's paint style.  note that in this demo the strokeStyle is dynamically generated,
        // which prevents us from just setting a jsPlumb.Defaults.PaintStyle.  but that is what i
        // would recommend you do. Note also here that we use the 'filter' option to tell jsPlumb
        // which parts of the element should actually respond to a drag start.
        instance.makeSource(windows, {
          filter:'.ep',        // only supported by jquery
          anchor:'Continuous',
          connector:[ 'StateMachine', { curviness:20 } ],
          connectorStyle:{ strokeStyle:'#5c96bc', lineWidth:2, outlineColor:'transparent', outlineWidth:4 },
          maxConnections:5,
          onMaxConnections:function(info, e) {
            alert('Maximum connections (' + info.maxConnections + ') reached');
          }
        });

        // initialise all '.w' elements as connection targets.
        instance.makeTarget(windows, {
          dropOptions:{ hoverClass:'dragHover' },
          anchor:'Continuous'
        });

        $.each($scope.flowchart.connections, function(index, value) {
          instance.connect({ source: value[0], target: value[1] });
        });
        instance.draggable($('.node'), { grid: [20, 20] });
      });
    });
  }
);





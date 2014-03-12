var myModule = angular.module('myApp', []);

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
        'title': 'Published',
        'text': '',
        'top': 200,
        'left': 10,
      },
      {
        'id': 1,
        'title': 'Private',
        'text': '',
        'top': 0,
        'left': 500,
      },
      {
        'id': 2,
        'title': 'Pending',
        'text': 'Pending review',
        'top': 340,
        'left': 420,
      },
    ],
    'connections': [
      {'from': 'node0', 'to': 'node1', 'label': 'retract'},
      {'from': 'node1', 'to': 'node2', 'label': 'submit for publication'},
      {'from': 'node1', 'to': 'node0', 'label': 'publish'},
    ],
  });
});

myModule.controller('MyController',
  function($scope, flowchart) {
    'use strict';
    $scope.flowchart = flowchart.get();
    var instance = $scope.flowchart.instance;

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
          connector:[ 'StateMachine', { curviness:30 } ],
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
          instance.connect({
            source: value.from,
            target: value.to,
            label: value.label
          });
        });
        instance.draggable($('.node'), { grid: [20, 20] });
      });
    });
  }
);





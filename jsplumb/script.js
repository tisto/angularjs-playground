var myModule = angular.module('myApp', []);

myModule.controller('MyController',
  function($scope) {
    'use strict';
    var instance;
    angular.element(document).ready(function () {
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
      var e0 = instance.addEndpoint('container0');
      var e1 = instance.addEndpoint('container1');
      instance.connect({ source:e0, target:e1 });
    });
    $scope.flowchart = instance;
  }
);


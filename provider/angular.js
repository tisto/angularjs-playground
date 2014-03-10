var flowchartModule = angular.module('FlowchartApp', []);

var myFlowchart = {
  'decisions': [
    {
      'id': 2,
      'text': 'Stadium?',
      'type': 'decision',
      'top': 220,
      'left': 300,
    },
  ],
  'connections': [
    ['Window1RightMiddle', 'Window2LeftMiddle'],
    ['Window2TopCenter', 'Window3LeftMiddle'],
    ['Window2RightMiddle', 'Window4LeftMiddle'],
    ['Window2BottomCenter', 'Window5LeftMiddle'],
    ['Window4RightMiddle', 'Window6LeftMiddle'],
    ['Window5RightMiddle', 'Window7LeftMiddle'],
    ['Window3RightMiddle', 'Window8TopCenter'],
    ['Window6RightMiddle', 'Window8LeftMiddle'],
    ['Window7RightMiddle', 'Window8BottomCenter'],
  ],
  'nodes': [
    {
      'id': 1,
      'title': 'Status',
      'text': 'R0-Resektion',
      'type': 'status',
      'top': 200,
      'left': 10,
    },
    {
      'id': 3,
      'title': 'Status',
      'text': 'UICC-Stad. I/II ohne RF *',
      'type': 'status',
      'top': 0,
      'left': 500,
    },
    {
      'id': 4,
      'title': 'Status',
      'text': 'UICC-Stad. I/II mit RF *',
      'type': 'status',
      'top': 200,
      'left': 500,
    },
    {
      'id': 5,
      'title': 'Status',
      'text': 'UICC-Stad. III',
      'type': 'status',
      'top': 400,
      'left': 500,
    },
    {
      'id': 6,
      'title': 'System. Therapie',
      'text': 'Empfehlung einer adjuvanten Chomotherapie mit Nutzen-Risiko-Abschätzung (FOLFOX 6 x 12, altern. XELOX oder Capecitabine für 6 Monate)***',
      'type': 'system-therapie',
      'top': 200,
      'left': 850,
    },
    {
      'id': 7,
      'title': 'System. Therapie',
      'text': 'Adjuvanten Chomotherapie (FOLFOX 6 x 12, altern. XELOX oder Capecitabine für 6 Monate)***',
      'type': 'system-therapie',
      'top': 400,
      'left': 850,
    },
    {
      'id': 8,
      'title': 'Watchful Waiting',
      'text': 'Systematische Nachsorge** nach angefügtem Schema',
      'type': 'watchful-waiting',
      'top': 200,
      'left': 1200,
    },
  ]
};


flowchartModule.provider('flowchart', function() {
    'use strict';
    var flowchart;
    this.setFlowchart = function(fchart) {
      flowchart = fchart;
    };
    this.addNode = function(node) {
      flowchart.nodes.push(node);
    };
    this.$get = function() {
      return flowchart;
    };
  }
);

flowchartModule.config(function(flowchartProvider) {
  'use strict';
  flowchartProvider.setFlowchart(myFlowchart);
});

flowchartModule.controller('FlowchartController',
  ['$scope','flowchart', function ($scope, flowchart) {
    'use strict';
    $scope.flowchart = flowchart;
    $scope.addNode = function(title, object_type) {
      flowchart.addNode(
        {
          'id': $scope.flowchart.nodes.length + 2,
          'title': title,
          'text': 'Doppelklick zum Ändern',
          'type': object_type,
          'top': 0,
          'left': 10,
        }
      );
    };
  }]
);

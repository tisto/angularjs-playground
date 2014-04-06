'use strict';

angular.module('jenkinsApp').directive('buildDirective',
  function() {
    return {
      template: '<a href="{{build.url}}">#{{build.number}}: {{build.result}} ({{build.actions[8]}}, {{build.actions[9]}})</a>'
    };
  }
);

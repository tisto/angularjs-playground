'use strict';

angular.module('jenkinsApp').directive('buildDirective',
  function() {
    return {
      template: '<a href="{{build.url}}">{{build.number}}: {{build.result}}</a>'
    };
  }
);

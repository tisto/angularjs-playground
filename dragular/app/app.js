(function() {
  'use strict';

  angular.module('myApp', ['angular-loading-bar', 'dragularModule']);

  angular.module('myApp').controller('Basic',
    ['$element', 'dragularService',
    function TodoCtrl($element, dragularService) {
      dragularService($element.children());
    }]
  )

})();

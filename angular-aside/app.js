(function() {
  'use strict';

  var myModule = angular.module('myApp', ['ui.bootstrap', 'ngAside']);

  angular.module('myApp').controller('AsideController',
    function($scope, $aside) {

      $scope.openAside = function() {
        var asideInstance = $aside.open({
          templateUrl: 'aside.tpl.html',
          controller: function($scope, $modalInstance) {
            $scope.closeAside = function(e) {
              $modalInstance.close();
              e.stopPropagation();
            };
          },
          placement: 'right',
          size: 'sm'
        });
      };

    }
  );

})();

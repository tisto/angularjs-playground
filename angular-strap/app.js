angular.module('myApp', ['ngAnimate', 'mgcrea.ngStrap']);

angular.module('myApp').controller('AsideDemoCtrl', function($scope) {
  'use strict';
  $scope.aside = {
    title: 'Title',
    content: 'Hello Aside<br />This is a multiline message!'
  };
});

(function() {
  'use strict';

  angular.module('e2e-mocks', ['ngMockE2E']).run(function($httpBackend) {

    var tree = [
      {
        id: 'cars',
        title: 'Cars',
        path: '/cars',
        children: []
      },
      {
        id: 'colors',
        title: 'Colors',
        path: '/colors',
        children: []
      },
      {
        id: 'fruits',
        title: 'Fruits',
        path: '/fruits',
        children: []
      }
    ];
    $httpBackend.whenGET('/tree/').respond(tree);

    var tree = [
      {
        id: 'mercedes',
        title: 'Mercedes',
        path: '/cars/mercedes',
        children: []
      },
      {
        id: 'audi',
        title: 'Audi',
        path: '/cars/audi',
        children: []
      },
      {
        id: 'bmw',
        title: 'BMW',
        path: '/cars/bmw',
        children: []
      }
    ];
    $httpBackend.whenGET('/tree/cars').respond(tree);

    // --- PASS THROUGH TEMPLATES ----------------------------------------------
    var templates_re = new RegExp('.*.html$');
    $httpBackend.whenGET(templates_re).passThrough();

  });

  angular.module('myApp').requires.push('e2e-mocks');

})();

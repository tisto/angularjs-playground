(function() {
  'use strict';

  angular.module('e2e-mocks', ['ngMockE2E']).run(function($httpBackend) {

    var tree = [
      {
        id: 'cars',
        title: 'Cars',
        label: 'Cars',
        path: '/cars',
        children: []
      },
      {
        id: 'colors',
        title: 'Colors',
        label: 'Colors',
        path: '/colors',
        children: []
      },
      {
        id: 'fruits',
        title: 'Fruits',
        label: 'Fruits',
        path: '/fruits',
        children: []
      }
    ];
    $httpBackend.whenGET('/tree/').respond(tree);

    var cars_subtree = [
      {
        id: 'mercedes',
        title: 'Mercedes',
        label: 'Mercedes',
        path: '/cars/mercedes',
        children: []
      },
      {
        id: 'audi',
        title: 'Audi',
        label: 'Audi',
        path: '/cars/audi',
        children: []
      },
      {
        id: 'bmw',
        title: 'BMW',
        label: 'BMW',
        path: '/cars/bmw',
        children: []
      }
    ];
    $httpBackend.whenGET('/tree/cars').respond(cars_subtree);

    // --- PASS THROUGH TEMPLATES ----------------------------------------------
    var templates_re = new RegExp('.*.html$');
    $httpBackend.whenGET(templates_re).passThrough();

  });

  angular.module('ReferenceBrowserApp').requires.push('e2e-mocks');

})();

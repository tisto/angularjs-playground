(function() {
  'use strict';

  angular.module('e2e-mocks', ['ngMockE2E']).run(function($httpBackend) {

    var tree = [
      {
        id: 'cars',
        uuid: 1,
        title: 'Cars',
        label: 'Cars',
        path: '/cars',
        children: []
      },
      {
        id: 'colors',
        uuid: 2,
        title: 'Colors',
        label: 'Colors',
        path: '/colors',
        children: []
      },
      {
        id: 'fruits',
        uuid: 3,
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
        uuid: 11,
        title: 'Mercedes',
        label: 'Mercedes',
        path: '/cars/mercedes',
        children: []
      },
      {
        id: 'audi',
        uuid: 12,
        title: 'Audi',
        label: 'Audi',
        path: '/cars/audi',
        children: []
      },
      {
        id: 'bmw',
        uuid: 13,
        title: 'BMW',
        label: 'BMW',
        path: '/cars/bmw',
        children: []
      }
    ];
    $httpBackend.whenGET('/tree/cars').respond(cars_subtree);

    // --- UNKNOWN TREE PATHS ------------------------------------------------
    var tree_unknown = new RegExp('/tree/.*$');
    $httpBackend.whenGET(tree_unknown).respond([]);

    // --- PASS THROUGH TEMPLATES --------------------------------------------
    var templates_re = new RegExp('.*.html$');
    $httpBackend.whenGET(templates_re).passThrough();

  });

  angular.module('ReferenceBrowserApp').requires.push('e2e-mocks');

})();

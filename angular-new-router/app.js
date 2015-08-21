'use strict';

angular.module('example', [
  'example.flickr',
  'example.settings',
  'example.home',
  'ngNewRouter'
]).
  controller('AppController', ['$router', AppController]);

function AppController($router) {
  $router.config([
    { path: '/',              redirectTo: '/home' },
    { path: '/home',          component: 'home' },
    { path: '/flickr',        component: 'flickr' },
    { path: '/settings',      component: 'settings' }
  ]);
}

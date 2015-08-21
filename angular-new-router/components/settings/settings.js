'use strict';

angular.module('example.settings', []).
  controller('SettingsController', ['$router', SettingsController]);

function SettingsController($router) {
  this.heading = 'Settings';
  this.router = $router;

  $router.config([
    { path: '/',         redirectTo: '/home' },
    { path: '/home',  component: 'home',  title:'Home' },
    { path: '/flickr',   component: 'flickr' }
  ]);
}

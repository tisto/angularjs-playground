import angular from 'angular';
import ngNewRouter from 'angular-new-router';
import Components from './components/components';
import HomeController from './components/home/home.js';


angular.module('myApp', ['ngNewRouter'])
  .controller('AppController', ['$router', AppController]);


function AppController ($router) {
  $router.config([
    { path: '/', redirectTo: '/home' },
    { path: '/home', component: 'home' },
    //{ path: '/contact', component: 'contact' }
  ]);
}

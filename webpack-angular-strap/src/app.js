import angular from 'angular';
import AngularStrap from 'angular-strap';
import MyButton from './mybutton';

angular.module('myApp', [
  'mgcrea.ngStrap',
  MyButton.name
]);

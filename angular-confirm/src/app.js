import angular from 'angular';
import UIBootstrap from 'angular-ui-bootstrap';
import MyButton from './mybutton';

angular.module('myApp', [
  'ui.bootstrap',
  MyButton.name
]);

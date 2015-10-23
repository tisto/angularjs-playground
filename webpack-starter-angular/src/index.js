import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import {addButton} from './a.js';
import {Person} from './Person.js';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppComponent from './app.component.js';
import Common from './common/common';
import Components from './components/components';

$(document).ready(() => {
  addButton($('#root'));
});


global.app = function () {
  var timo = new Person('Timo', 'Stollenwerk');
  console.log(timo.fullName);
};


angular.module('myApp', [
  uiRouter,
  Common.name,
  Components.name
])
.directive('app', AppComponent);

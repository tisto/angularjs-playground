import angular from 'angular';
import myButtonComponent from './mybutton.component';

let myButtonModule = angular.module('mybutton', [
])
.directive('mybutton', myButtonComponent);

export default myButtonModule;

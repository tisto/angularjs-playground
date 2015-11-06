import angular from 'angular';
import AngularAnimate from 'angular-animate/angular-animate';
import 'angular-motion/dist/angular-motion.css';

import myModalComponent from './mymodal.component';
import './mymodal.css';

let myModalModule = angular.module('mymodal', [
    'mgcrea.ngStrap.modal',
    'ngAnimate',
])
.directive('mymodal', myModalComponent);

export default myModalModule;

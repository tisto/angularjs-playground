import angular from 'angular';
import AngularStrap from 'angular-strap';
import AngularStrapTpl from 'angular-strap/dist/angular-strap.tpl';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

import MyButton from './mybutton';
import MyModal from './mymodal';

angular.module('myApp', [
  'mgcrea.ngStrap',
  MyButton.name,
  MyModal.name
]);

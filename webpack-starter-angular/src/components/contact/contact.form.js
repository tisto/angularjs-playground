import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contactFormComponent from './contact.form.component';

let contactFormModule = angular.module('contactForm', [
  uiRouter,
])

.config(($stateProvider) => {
  $stateProvider
    .state('contact.form', {
      url: '/form',
      template: '<contactform></contactform>'
    });
})

.directive('contactform', contactFormComponent);

export default contactFormModule;

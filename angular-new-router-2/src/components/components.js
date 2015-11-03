import angular from 'angular';
import Home from './home/home';

//import About from './about/about';
//import Contact from './contact/contact';

let componentModule = angular.module('app.components', [
//  About.name,
//  Contact.name,
  Home.name,
]);

export default componentModule;

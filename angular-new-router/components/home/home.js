angular.module('example.home', []).
    controller('HomeController', HomeController);

function HomeController() {
  this.heading = 'Welcome to The New Angular Router Demo!';
  console.log('HomeController');
}

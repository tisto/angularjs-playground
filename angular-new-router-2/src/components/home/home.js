import template from './home.html';

class HomeController{
  constructor(){
    //this = scope
    this.name = 'Friend'
  }
}


export default ['HomeController', [HomeController]];

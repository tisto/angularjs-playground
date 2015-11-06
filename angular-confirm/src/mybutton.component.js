import template from './mybutton.html';
import controller from './mybutton.controller';

let myButtonComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default myButtonComponent;

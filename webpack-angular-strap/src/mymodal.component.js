import template from './mymodal.html';
import controller from './mymodal.controller';

let myModalComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default myModalComponent;

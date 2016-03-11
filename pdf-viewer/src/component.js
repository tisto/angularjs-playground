import template from './component.html';
import controller from './controller';

let pdfViewerComponent = {
  restrict: 'E',
  scope: {},
  template: template,
  controller: controller,
  controllerAs: 'vm'
};

export default pdfViewerComponent;

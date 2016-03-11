import angular from 'angular';
import 'bootstrap/dist/css/bootstrap.min.css';

// import 'angular-mocks/angular-mocks';
import pdfViewerComponent from './component';
import pdf from './angular-pdf-viewer.min';
import './pdf.js';

angular.module('pdfViewerApp', [
  'pdf'
])
.run(function() {
  console.log("run");
})
.component('app', pdfViewerComponent);

import angular from 'angular';
import 'bootstrap/dist/css/bootstrap.min.css';

// import 'angular-mocks/angular-mocks';
import pdfViewerComponent from './component';
import './pdf.js';

angular.module('pdfViewerApp', [
])
.run(function() {
  console.log("run");
})
.component('app', pdfViewerComponent);

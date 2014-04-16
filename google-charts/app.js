// Code goes here

var app = angular.module('myApp', [ 'googlechart' ]);

app.controller('MainCtrl', function($scope) {
    var chart1 = {};
    chart1.type = "PieChart";
    chart1.data = [
       ['Component', 'cost'],
       ['Software', 50000],
       ['Hardware', 80000]
      ];
    chart1.data.push(['Services',20000]);
    chart1.options = {
        displayExactValues: true,
        width: 400,
        height: 200,
        is3D: true,
        chartArea: {left:10,top:10,bottom:0,height:"100%"}
    };

    chart1.formatters = {
      number : [{
        columnNum: 1,
        pattern: "$ #,##0.00"
      }]
    };

    $scope.chart = chart1;

    $scope.aa=1*$scope.chart.data[1][1];
    $scope.bb=1*$scope.chart.data[2][1];
    $scope.cc=1*$scope.chart.data[3][1];
});



var myApp = angular.module('myApp', ['googlechart']);

var chartColorBlue = '#a5bee6';
var chartColorYellow = '#f0c155';
var chartColorRed = '#e5725f';
var chartColorGreen = '#70b654';
var chartColorLighterGrey = '#ADADAD';
var chartColorLightGrey = '#999999';
var chartColorDarkGrey = '#666666';
var chartFontSize = 10;


myApp.controller('DateRangeLineCharController', ['$scope',
  function($scope) {

    $scope.chart = {};

    $scope.chart.data = {
      "cols": [
        {
            "id": "zeit",
            "label": "Zeit",
            "type": "string"
        },
        {
            "id": "anfragen",
            "label": "Anfragen",
            "type": "number"
        }
      ],
      "rows": [
        {
            "c": [
                {
                    "v": "07/11/2014"
                },
                {
                    "v": 5
                }
            ]
        },
        {
            "c": [
                {
                    "v": "08/11/2014"
                },
                {
                    "v": 0
                }
            ]
        },
        {
            "c": [
                {
                    "v": "09/11/2014"
                },
                {
                    "v": 0
                }
            ]
        },
        {
            "c": [
                {
                    "v": "10/11/2014"
                },
                {
                    "v": 30
                }
            ]
        },
        {
            "c": [
                {
                    "v": "11/11/2014"
                },
                {
                    "v": 0
                }
            ]
        },
        {
            "c": [
                {
                    "v": "12/11/2014"
                },
                {
                    "v": 0
                }
            ]
        },
        {
            "c": [
                {
                    "v": "13/11/2014"
                },
                {
                    "v": 0
                }
            ]
        }
      ]
    }

    $scope.chart.type = "LineChart";
    $scope.chart.options = {
      fontSize: chartFontSize,
      pointSize: 6,
      legend: {position: 'top'},
      vAxis: {
        textStyle: {
          color: chartColorDarkGrey,
          fontSize: chartFontSize,
        },
        gridlines: {color: chartColorLighterGrey, count: 5},
        minValue: 0,
      },
      hAxis: {
        textStyle: {
          color: chartColorLightGrey,
          fontSize: chartFontSize,
        },
      },
      animation:{
        duration: 1000,
        easing: 'out'
      },
    };

  }]
);

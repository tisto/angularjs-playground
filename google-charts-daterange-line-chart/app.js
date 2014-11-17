var myApp = angular.module('myApp', ['googlechart', 'daterangepicker']);

var chartColorBlue = '#a5bee6';
var chartColorYellow = '#f0c155';
var chartColorRed = '#e5725f';
var chartColorGreen = '#70b654';
var chartColorLighterGrey = '#ADADAD';
var chartColorLightGrey = '#999999';
var chartColorDarkGrey = '#666666';
var chartFontSize = 10;


myApp.factory('chartService', ['$http',
  function($http) {
    'use strict';
    var getTickets = function(daterange) {
      return $http({
        method: 'GET',
        url: 'get_tickets?daterange=' + daterange
      });
    };
    return {
      getTickets: function(daterange) {
        return getTickets(daterange);
      }
    };
  }
]);


myApp.controller('DateRangeLineCharController', ['$scope', '$timeout', 'chartService',
  function($scope, $timeout, chartService) {

    // Chart
    $scope.chart = {};
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

    // Chart Data
    var getTickets = function(daterange) {
      // Chart Data
      var timeout;
      timeout = $timeout(function() {
        chartService.getTickets(daterange)
        .success(function(data, status) {
          $scope.chart.data = data;
        })
        .error(function(data, status) {
          alert('chartService.getTickets() failed: ' + data);
        });
      }, 350);
    };

    getTickets('day');

    $scope.setDaterange = function(dateRange) {
      $scope.date.dateRange = dateRange;
      if (dateRange === 'day') {
        $scope.date.startDate = moment().subtract(7, 'days');
        $scope.date.endDate = moment();
        getTickets('day');
      } else if (dateRange === 'week') {
        $scope.date.startDate = moment().subtract(7, 'weeks');
        $scope.date.endDate = moment();
        getTickets('week');
      } else if (dateRange === 'month') {
        $scope.date.startDate = moment().subtract(7, 'months');
        $scope.date.endDate = moment();
        getTickets('month');
      } else if (dateRange === 'year') {
        $scope.date.startDate = moment().subtract(7, 'years');
        $scope.date.endDate = moment();
        getTickets('year');
      } else {
        alert("error");
      }
    }

    // DateRangePicker
    $scope.date = {
      startDate: moment().subtract(7, 'days'),
      endDate: moment(),
      dateRange: 'day',
    };
    $scope.$watch('date', function(newValue, oldValue) {
      var startDate = newValue.startDate;
      var endDate = newValue.endDate;
    });

  }]
);

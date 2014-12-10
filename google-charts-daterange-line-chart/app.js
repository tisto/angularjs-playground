(function() {
  'use strict';

  angular.module('myApp', ['googlechart', 'daterangepicker']);

  var chartColorBlue = '#a5bee6';
  var chartColorYellow = '#f0c155';
  var chartColorRed = '#e5725f';
  var chartColorGreen = '#70b654';
  var chartColorLighterGrey = '#ADADAD';
  var chartColorLightGrey = '#999999';
  var chartColorDarkGrey = '#666666';
  var chartFontSize = 10;


  angular.module('myApp').factory('chartService', ['$http',
    function($http) {
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


  angular.module('myApp').controller('DateRangeLineCharController', ['$scope', '$timeout', 'chartService',
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

      // Set Daterange
      $scope.setDaterange = function(dateRange) {
        $scope.date = {
          startDate: moment().subtract(7, dateRange + 's'),
          endDate: moment(),
          dateRange: dateRange
        };
        getTickets(dateRange);
      };
      $scope.setDaterange('day');

    }]
  );

})();

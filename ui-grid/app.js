
var app = angular.module('app', ['ui.grid']);

app.controller('MainCtrl', ['$scope', function ($scope) {

  $scope.myData = [
    {
    "firstName": "Cox",
    "lastName": "Carney",
    "company": "Enormo",
    "employed": true
    },
    {
    "firstName": "Lorraine",
    "lastName": "Wise",
    "company": "Comveyer",
    "employed": false
    },
    {
    "firstName": "Nancy",
    "lastName": "Waters",
    "company": "Fuelton",
    "employed": false
    }
  ];
}]);

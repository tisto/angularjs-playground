var app = angular.module("myApp", []);

app.controller("myController", function($scope, $q) {
  var defer = $q.defer();
  defer.promise
    .then(function(weapon) {
      alert("You can have my " + weapon)
      return "bow"
    })
    .then(function(weapon) {
      alert("And my " + weapon)
      return "axe"
    })
    .then(function(weapon) {
      alert("And my " + weapon)
    });
    defer.resolve("sword");
    $scope.model = {
      message: "This is my app!!!"
    }
});

var app = angular.module('app', []);

app.controller('AppCtrl', function ($scope) {

$scope.categories = [
  {
    title: 'Computers',
    categories: [
      {
        title: 'Laptops',
        categories: [
          {
            title: 'Ultrabooks'
          },
          {
            title: 'Macbooks'
          }
        ]
      },

      {
        title: 'Desktops'
      },

      {
        title: 'Tablets',
        categories: [
          {
            title: 'Apple'
          },
          {
            title: 'Android'
          }
        ]
      }
    ]
  },

  {
    title: 'Printers'
  }

];

});

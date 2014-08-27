var app = angular.module('app', []);

app.controller('AppCtrl', function ($scope) {

$scope.tree = [
  {
    title: 'Computers',
    children: [
      {
        title: 'Laptops',
        children: [
          {
            title: 'Ultrabooks'
          },
          {
            title: 'Macbooks',
            children: [
              {
                title: 'Macbook Pro'
              }
            ]
          }
        ]
      },

      {
        title: 'Desktops'
      },

      {
        title: 'Tablets',
        children: [
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

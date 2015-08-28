(function() {
  'use strict';

  angular.module('myApp', ['angular-loading-bar', 'schemaForm']);

  angular.module('myApp').controller('FormController', function($scope) {
    $scope.schema = {
      type: "object",
      properties: {
        name: {
          type: "string",
          minLength: 2,
          title: "Fullname",
          description: "Fullname"
        },
        email: {
          title: "Email",
          type: "string",
          pattern: "^\\S+@\\S+$",
          description: "Email will be used for evil."
        },
        spam: {
          title: "Spam me, please",
          type: "boolean"
        },
        title: {
          type: "string",
          enum: ['dr', 'jr', 'sir', 'mrs', 'mr', 'NaN', 'dj']
        }
      },
      required: [
        'name'
      ],
    };

    $scope.form = [
      "*",
      {
        type: "submit",
        title: "Save"
      }
    ];

    $scope.model = {};

    $scope.onSubmit = function(form) {
      // First we broadcast an event so all fields validate themselves
      $scope.$broadcast('schemaFormValidate');

      // Then we check if the form is valid
      if (form.$valid) {
        console.log('check if form is valid')
      }
    }
  });

})();



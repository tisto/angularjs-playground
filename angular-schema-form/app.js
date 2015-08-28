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
          description: "Fullname",
          "x-schema-form": {
            type: "string",
            placeholder: "John Doe"
          }
        },
        email: {
          title: "Email",
          type: "string",
          pattern: "^\\S+@\\S+$",
          description: "Email will be used for evil.",
          "x-schema-form": {
            type: "string",
            placeholder: "john@doe.com"
          }
        },
        spam: {
          title: "Spam me, please",
          type: "boolean"
        },
        title: {
          title: 'Title',
          type: "string",
          enum: ['dr', 'jr', 'sir', 'mrs', 'mr', 'NaN', 'dj']
        },
        address: {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "street": { "type": "string" },
              "zip": { "type": "string" },
              "phone-numbers": {
                "type": "array",
                "items": {
                  "type": "string",
                  "title": "Phone Number"
                }
              }
            }
          }
        }
      },
      required: [
        'name',
        'email'
      ],
    };

    $scope.form = [
      "*",
      {
        type: "button",
        title: "Cancel",
        style: 'btn-default',
        onClick: "clearForm(form)"
      },
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
        console.log('check if form is valid');
      }
    }

    $scope.clearForm = function(form) {
      $scope.model = {};
      $scope.$broadcast('schemaFormRedraw');
    }

  });

})();



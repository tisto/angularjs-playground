(function() {
  'use strict';

  var myModule = angular.module('myApp', [
    'ngAria',
    'ngMessages',
    'ngAnimate'
  ]);

  angular.module('myApp').controller('SignUpController', function () {
        var ctrl = this,
            newCustomer = { email:'', userName:'', password:'' };

        var signup = function () {
            if( ctrl.signupForm.$valid) {
                ctrl.showSubmittedPrompt = true;
                clearForm();
            }
        };

        var clearForm = function () {
            ctrl.newCustomer = { email:'', userName:'', password:'' }
            ctrl.signupForm.$setUntouched();
            ctrl.signupForm.$setPristine();
        };

        var getPasswordType = function () {
            return ctrl.signupForm.showPassword ? 'text' : 'password';
        };

        var toggleEmailPrompt = function (value) {
            ctrl.showEmailPrompt = value;
        };

        var toggleUsernamePrompt = function (value) {
            ctrl.showUsernamePrompt = value;
        };

        var hasErrorClass = function (field) {
            return ctrl.signupForm[field].$touched && ctrl.signupForm[field].$invalid;
        };

        var showMessages = function (field) {
            return ctrl.signupForm[field].$touched || ctrl.signupForm.$submitted
        };

        ctrl.showEmailPrompt = false;
        ctrl.showUsernamePrompt = false;
        ctrl.showSubmittedPrompt = false;
        ctrl.toggleEmailPrompt = toggleEmailPrompt;
        ctrl.toggleUsernamePrompt = toggleUsernamePrompt;
        ctrl.getPasswordType = getPasswordType;
        ctrl.hasErrorClass = hasErrorClass;
        ctrl.showMessages = showMessages;
        ctrl.newCustomer = newCustomer;
        ctrl.signup = signup;
        ctrl.clearForm = clearForm;
    })
    .directive('validatePasswordCharacters', function () {
        return {
            require: 'ngModel',
            link: function ($scope, element, attrs, ngModel) {
                ngModel.$validators.lowerCase = function (value) {
                    var pattern = /[a-z]+/;
                    return (typeof value !== 'undefined') && pattern.test(value);
                };
                ngModel.$validators.upperCase = function (value) {
                    var pattern = /[A-Z]+/;
                    return (typeof value !== 'undefined') && pattern.test(value);
                };
                ngModel.$validators.number = function (value) {
                    var pattern = /\d+/;
                    return (typeof value !== 'undefined') && pattern.test(value);
                };
                ngModel.$validators.specialCharacter = function (value) {
                    var pattern = /\W+/;
                    return (typeof value !== 'undefined') && pattern.test(value);
                };
                ngModel.$validators.eightCharacters = function (value) {
                    return (typeof value !== 'undefined') && value.length >= 8;
                };
            }
        }
    })
;

})();

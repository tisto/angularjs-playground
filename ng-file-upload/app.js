(function() {
  'use strict';

  angular.module('myApp', ['angularFileUpload']);

  angular.module('myApp').controller('FileUploadController', ['$scope', '$upload', function ($scope, $upload) {
    $scope.$watch('files', function () {
        $scope.upload($scope.files);
    });

    $scope.upload = function (files) {
      if (files && files.length) {
        for (var i = 0; i < files.length; i++) {
          var file = files[i];
          $upload.upload({
            url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
            fields: {
                'username': $scope.username
            },
            file: file
          }).progress(function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' +
                        evt.config.file.name);
          }).success(function (data, status, headers, config) {
            console.log('file ' + config.file.name + 'uploaded. Response: ' +
                        JSON.stringify(data));
          });
        }
      }
  };
}]);

})();

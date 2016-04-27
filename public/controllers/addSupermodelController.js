var addCtrl = angular.module('addSupermodelCtrl', []);

addCtrl.controller('addSupermodelController', ['$scope', '$http', 'filepickerService', function($scope, $http, filepickerService) {
  $scope.supermodel = {};
  $scope.createSupermodel = function()  {
    $http.post('/supermodel', $scope.supermodel)
      .success(function(data) {
        console.log(JSON.stringify(data));
    $scope.supermodel = {};
  })
    .error(function(data) {
    console.log('Error: ' + data);
  });
};

  $scope.upload = function() {
    filepickerService.pick(
    {
      mimetype: 'image/*',
      language: 'en',
      services: ['COMPUTER', 'DROPBOX', 'GOOGLE_DRIVE', 'IMAGE_SEARCH', 'FACEBOOK', 'INSTAGRAM'],
      openTo: 'IMAGE_SEARCH'
    },
      function(Blob) {
        console.log(JSON.stringify(Blob));
        $scope.supermodel.picture = Blob;
        $scope.$apply();
      }
    );
  };

  $scope.uploadMultiple = function() {
    filepickerService.pickMultiple(
      {
        mimetype: 'image/*',
        language: 'en',
        maxFiles: 3,
        services: ['COMPUTER', 'DROPBOX', 'GOOGLE_DRIVE', 'IMAGE_SEARCH', 'FACEBOOK', 'INSTAGRAM'],
        openTo: 'IMAGE_SEARCH'
      },
        function(Blob) {
          console.log(JSON.stringify(Blob));
          $scope.supermodel.morePictures = Blob;
          $scope.$apply();
        }
      );
    };
}]);

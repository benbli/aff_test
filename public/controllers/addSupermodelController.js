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
//
// var addCtrl = angular.module('addSupermodelCtrl', []);
// addCtrl.controller('addSupermodelController', function($scope, $http, filepickerService){
//     $scope.supermodel = {};
//     //Send the newly created supermodel to the server to store in the db
//     $scope.createSupermodel = function(){
//         $http.post('/supermodel', $scope.supermodel)
//             .success(function(data){
//                 console.log(JSON.stringify(data));
//                 //Clean the form to allow the user to create new supermodels
//                 $scope.supermodel = {};
//             })
//             .error(function(data) {
//                 console.log('Error: ' + data);
//             });
//     };
//     //Single file upload, you can take a look at the options
//     $scope.upload = function(){
//         filepickerService.pick(
//             {
//                 mimetype: 'image/*',
//                 language: 'en',
//                 services: ['COMPUTER','DROPBOX','GOOGLE_DRIVE','IMAGE_SEARCH', 'FACEBOOK', 'INSTAGRAM'],
//                 openTo: 'IMAGE_SEARCH'
//             },
//             function(Blob){
//                 console.log(JSON.stringify(Blob));
//                 $scope.supermodel.picture = Blob;
//                 $scope.$apply();
//             }
//         );
//     };
//     //Multiple files upload set to 3 as max number
//     $scope.uploadMultiple = function(){
//         filepickerService.pickMultiple(
//             {
//                 mimetype: 'image/*',
//                 language: 'en',
//                 maxFiles: 3, //pickMultiple has one more option
//                 services: ['COMPUTER','DROPBOX','GOOGLE_DRIVE','IMAGE_SEARCH', 'FACEBOOK', 'INSTAGRAM'],
//                 openTo: 'IMAGE_SEARCH'
//             },
//       function(Blob){
//                 console.log(JSON.stringify(Blob));
//                 $scope.supermodel.morePictures = Blob;
//                 $scope.$apply();
//             }
//         );
//     };
// });

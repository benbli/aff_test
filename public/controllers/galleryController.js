var galleryCtrl = angular.module('galleryCtrl', []);

galleryCtrl.controller('galleryController', ['$scope', '$http', function($scope, $http) {
  $scope.supermodels = [];
  $http.get('/supermodel')
    .success(function(data){
      console.log(data);
      console.log(JSON.stringify(data));
      $scope.supermodels = data;
    })
    .error(function(data){
      console.log('Error: ' + data);
    });
}]);

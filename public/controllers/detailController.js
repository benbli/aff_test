var detailCtrl = angular.module('detailCtrl', []);

detailCtrl.controller('detailController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  $scope.supermodel = {};
  var id = $routeParams.id;
  $http.get('/supermodel/' + id)
  .success(function(data){
    console.log(JSON.stringify(data));
    $scope.supermodel = data;
  })
  .error(function(data) {
    console.log('Error: ' + data);
  });
}]);

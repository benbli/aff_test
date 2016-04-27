// var apiKey = process.env.FILEPICKER_API_KEY;

var app = angular.module('supermodelApp', ['addSupermodelCtrl', 'galleryCtrl', 'detailCtrl', 'ngRoute', 'angular-filepicker'])
    .config( function($routeProvider, filepickerProvider)  {
      $routeProvider.when('/addSupermodel', {
        templateUrl: 'partials/addSupermodel.html',
        controller: 'addSupermodelController'
      })
      .when('/gallery', {
        templateUrl: 'partials/gallery.html',
        controller: 'galleryController'
      })
      .when('/detail/:id', {
        templateUrl: 'partials/detail.html',
        controller: 'detailController'
      })
      .otherwise({redirectTo:'/gallery'});
      filepickerProvider.setKey('AP5ty2RtfQ8CFzJl00foaz');
      // filepickerProvider.setKey('AgCWRl1q8QH2670gQls2Sz');
      // filepickerProvider.setKey(apiKey);
});

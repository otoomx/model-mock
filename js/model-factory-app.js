modelApp = angular.module('ModelFactory', ['ui.bootstrap', 'ngRoute', 'ui.router','ngTagsInput']);

modelApp.config(['$locationProvider', '$routeProvider',
  function config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.when('/upload', {
        controller: 'DealUploadCtrl',
        templateUrl: 'upload.html'
      })
      .when('/status', {
        controller: 'DealStatusCtrl',
        templateUrl: 'status.html'
      })
      .otherwise({
        redirectTo: '/status'
      })
  }
]);

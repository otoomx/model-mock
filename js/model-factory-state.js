modelApp = angular.module("ModelFactory");

modelApp.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/templates/home.html',
      data: { displayName: "Home" }
    })
    .state('incomingFiles', {
      url: '/incoming-files',

      templateUrl: '/templates/incoming-files.html',
      data: { displayName: "Incoming Files" }
    })
    .state('cdi', {
      url: '/cdi',
      templateUrl: '/templates/cdi.html',
      data: {
        displayName: "CDI",
        tabs: [{ heading: "Tab 1", route: "main.tab1", active: false }]
      }
    })
    .state('cdi.upload', {
      url: '/upload',
      templateUrl: '/templates/upload.html',
      data: { displayName: "Upload (6.2.1, 6.2.4)" }
    })
    .state('cdi.status', {
      url: '/status',
      templateUrl: '/templates/upload-status.html',
      data: { displayName: "Status" }
    });;

})

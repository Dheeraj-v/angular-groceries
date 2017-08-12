var app = angular.module('newsApp', ['ngRoute']);

app.config(function($routeProvider) {
  
  $routeProvider
    .when('/', {
      templateUrl : 'chicken.html',
      controller : 'mainCtrl'
    })
    
    // saved
    .when('/chicken', {
      templateUrl : 'chicken.html',
      controller : 'mainCtrl'
    })
        // saved
    .when('/mutton', {
      templateUrl : 'mutton.html',
      controller : 'mainCtrl'
    })
        // saved
    .when('/fish', {
      templateUrl : 'fish.html',
      controller : 'mainCtrl'
    })
});


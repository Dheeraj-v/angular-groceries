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

app.controller('mainCtrl',function($scope){
    $scope.menuItems = ['HOME','CHICKEN', 'MUTTON', 'FISH']
    $scope.activeMenu = $scope.menuItems[0];

   $scope.setActive = function(menuItem) {
    $scope.activeMenu = menuItem
 }

});
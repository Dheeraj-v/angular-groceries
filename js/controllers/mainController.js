app.controller('mainCtrl',function($scope){
    $scope.menuItems = ['home','chicken', 'mutton', 'FISH']
    $scope.activeMenu = $scope.menuItems[0];
    console.log($scope.menuItems)
   $scope.setActive = function(menuItem) {
    $scope.activeMenu = menuItem
 }

});
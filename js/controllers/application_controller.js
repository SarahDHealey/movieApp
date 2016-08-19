
// inject the Movies service factory into our controller
// this is for the home.html view
app.controller('ApplicationController', function($scope, $http, MoviesFactory, $location) {
  console.log("*******I am hitting the btncntrl");
  $scope.vw = {};
  $scope.vw.success = "Success!!"

  $scope.vw.submit = function(search){
    MoviesFactory.searchTerm = search;
    $location.path('/movies')
  }

});

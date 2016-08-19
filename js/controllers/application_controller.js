
// inject the Movies service factory into our controller
// this is for the home.html view
app.controller('ApplicationController', function($scope, $http, MoviesFactory, $location) {
  $scope.vw = {};

  $scope.vw.submit = function(search){
    MoviesFactory.searchTerm = search;
    $location.path('/movies')
  }

});

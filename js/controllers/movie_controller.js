
app.controller('MovieController', function($scope, $http, MoviesFactory, $location, $routeParams) {
  $scope.vw = {};
  MoviesFactory.getMovieById($routeParams.id).then(function(response) {
    $scope.movie = response.data;
  });
});

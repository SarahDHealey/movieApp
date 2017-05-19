
app.controller('MoviesController', function($scope, $http, MoviesFactory, $location) {
  $scope.vw = {};
  $scope.vw.searchTerm = MoviesFactory.searchTerm;
  MoviesFactory.getMovies($scope.vw.searchTerm).then(function(response) {
    $scope.movies = response.data.Search;
  });
});


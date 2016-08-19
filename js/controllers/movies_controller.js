
app.controller('MoviesController', function($scope, $http, MoviesFactory, $location) {
  $scope.vw = {};
  $scope.vw.searchTerm = MoviesFactory.searchTerm;
  MoviesFactory.getMovies($scope.vw.searchTerm).then(function(response) {
    $scope.movies = response.data.Search;
  });
});

//**************************************************
//This is the function to getMovie by search term
//**************************************************
//     $scope.show = function() {
//       Movies.getMovie($scope.search)
//         .then(function(response) {
//             $scope.movie = response.data;
//             console.log(response.data);
//         });
//     }
// });
//**************************************************
//
//**************************************************


// app.controller('secondController', function($scope, $http, Movies) {
//     $scope.vw = {};
//     $scope.vw.search = "Sherlock Holmes";
//     $scope.vw.searchTerm = Movies.searchTerm;
//     console.log(Movies.searchTerm);
// });

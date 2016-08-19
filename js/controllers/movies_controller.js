
app.controller('MoviesController', function($scope, $http, MoviesFactory, $location) {
  $scope.vw = {};
  $scope.vw.searchTerm = MoviesFactory.searchTerm;
  MoviesFactory.getMovies($scope.vw.searchTerm).then(function(response) {
    $scope.movies = response.data.Search;
    console.log(response.data.Search);
  });
});

// TO DO

// add a /movies/:id route √
// render partials/movie.html √
// it uses a ShowMovieController √
// Add a function to Factory that makes api call to get one movie by id
// set return API value to a scope variable in controller
// show

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

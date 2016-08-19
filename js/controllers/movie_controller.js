
app.controller('MovieController', function($scope, $http, MoviesFactory, $location, $routeParams) {
  $scope.vw = {};
  console.log($routeParams.id);
  MoviesFactory.getMovieById($routeParams.id).then(function(response) {
    console.log('**********response data');
    console.log(response.data);
    $scope.movie = response.data;
  });
});

///******question? pass the parameter in the initial funct in a second func?


// TO DO

// add a /movies/:id route √
// render partials/movie.html √
// it uses a MovieController √
// Add a function to Factory that makes api call to get one movie by id √
// set return API value to a scope variable in controller √
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

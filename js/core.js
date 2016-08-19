var app = angular.module('movieApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

    .when('/movies', {
        templateUrl : 'partials/movies.html',
        controller : 'MoviesController'
    })
});

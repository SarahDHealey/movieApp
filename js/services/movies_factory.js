app.factory('MoviesFactory', function($http) {

  return {
    searchTerm : "",
    getMovies: function (searchTerm) {
      return $http.get('http://www.omdbapi.com/?s=' + searchTerm + '&y=&plot=short&r=json');
      },
    getMovieById: function (id) {
      return $http.get('http://www.omdbapi.com/?i=' + id + '&plot=short&r=json');
      }
  }

});

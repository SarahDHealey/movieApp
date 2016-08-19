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

//this is what this api call is supposed to look like:
// http://www.omdbapi.com/?i=tt0120646&plot=short&r=json

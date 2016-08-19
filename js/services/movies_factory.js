
// super simple service
// each function returns a promise object
app.factory('MoviesFactory', function($http) {

return {
  searchTerm : "",
  getMovies: function (searchTerm) {
      return $http.get('http://www.omdbapi.com/?s=' + searchTerm + '&y=&plot=short&r=json');
    }
}

});

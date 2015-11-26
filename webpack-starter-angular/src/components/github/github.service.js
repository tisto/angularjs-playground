import service from './github.service';

class GithubService {

  constructor($http) {
      this.$http = $http;
      this.username = 'tisto';
  }

  getItems() {
    //return this.$http.get('http://localhost:3001/api/random-word');

    var githubUrl = 'https://api.github.com';
    return this.$http({
      method: 'JSONP',
      url: githubUrl + '/users/' +
      this.username + '?callback=JSON_CALLBACK'
    }).success(function(data, status, headers, config) {
      // this callback will be called asynchronously
      // when the response is available
      //this.schema = JSON.stringify(data, null, 2);
      return JSON.stringify(data.data, null, 2);
    }).
    error(function(data, status, headers, config) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      alert(status);
    });;
  }

}

GithubService.$inject = ['$http'];

export default GithubService;

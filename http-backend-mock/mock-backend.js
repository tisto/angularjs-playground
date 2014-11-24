var myApp;

angular.module('e2e-mocks', ['ngMockE2E']).run(function($httpBackend) {

  // -- USERS ----------------------------------------------------------------
  // https://groups.google.com/forum/#!topic/angular/nHLcuM6MGBo
  // http://embed.plnkr.co/dbNCOZ/app.js
  // http://jsfiddle.net/jhsousa/aQ4XX/
  var users = [
    {_id: 1, name: 'John Doe'},
    {_id: 2, name: 'Jane Doe'},
    {_id: 3, name: 'Max Mustermann'},
  ];

  function userIndexById(id) {
    if (!id) return null;
    var index = -1;

    for(var i = 0; i < users.length; i++) {
      var o = users[i];
      if (id == o._id) {
        index = i;
        break;
      }
    }

    return index;
  }

  // GET (return single user)
  $httpBackend.whenGET(/\/api\/users(\/\d*)*/).respond(
    function(method, url, data, headers) {
      console.log("GET -> " + url);
      var parts = url.replace("/api/users", "").split("/");
      if (parts.length != 2) {
        return [200, users.slice()];
      }

      var id = parts[1];

      var index = userIndexById(id);

      if (index != -1) {
        console.log("GET -> " + users[index].name);
        return [200, users[index]];
      }

      return [404, "NOT-FOUND"];
    }
  );

  // --- PASS THROUGH TEMPLATES ----------------------------------------------
  var templates_re = new RegExp('.*.html$');
  $httpBackend.whenGET(templates_re).passThrough();

});

myApp.requires.push('e2e-mocks');

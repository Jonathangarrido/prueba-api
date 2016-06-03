'use strict';
(function () {

  function config($routeProvider){
    $routeProvider
      .when('/',{
        templateUrl: 'views/home.html'
      })
      .when('/login',{
        template: '<mi-login></mi-login>'
      })
      .when('/admin',{
        template: '<mi-admin></mi-admin>'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

  function Run($rootScope, $location,milogin){
    var routespermission=['/admin'];
    $rootScope.$on('$routeChangeStart',function(){
      if(routespermission.indexOf($location.path()) !== -1){
        var connected = milogin.islooged();
        connected.then(function(msg){
          if(!msg.data){$location.path('/login');}
        });
      }
    });
  }

  angular
    .module('loginApp', [
      'ngRoute',
      'ngResource',
      'miLogin',
      'miAdmin',
      'loginService',
      'sessionService',
      'apiService'
      ])
    .config(config)
    .run(Run);

})();
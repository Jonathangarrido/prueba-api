(function () {
  'use strict';


  function Session($http){
    return{
      set: function(key,value){
        return sessionStorage.setItem(key,value);
      },
      get: function(key){
        return sessionStorage.getItem(key);
      },
      destroy: function(key){
        $http.post('js/components/mi-session/mi-service/destroy_session.php');
        return sessionStorage.removeItem(key);
      }
    }
  }



  angular
    .module('sessionService', [])
    .factory('Session', Session);


})();
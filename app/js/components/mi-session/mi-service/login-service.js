(function () {
  'use strict';


  function milogin($http,$location,Session){
    return{
      login: function(user,vm){
        // console.log(user)
        $http.post('js/components/mi-session/mi-service/user.php',user)
          .then(function(msg){
            var uid=msg.data;
            if(uid){
              Session.set('uid',uid)
              $location.path('/admin'); 
              vm.msgtxt = 'Correct information';
            }
            else{
              vm.msgtxt = 'Error information';
              $location.path('/login'); 
            }
          })
      },
      logout: function(){
        Session.destroy('uid');
        $location.path('/login'); 
      },
      islooged: function(){
        var $checkSessionServer = $http.post('js/components/mi-session/mi-service/check_session.php')
        return $checkSessionServer;
        // if(Session.get('user')) return true;
      }

    }
  }



  angular
    .module('loginService', [])
    .factory('milogin', milogin);


})();
(function () {
  'use strict';


  function Consultas($location,$resource,BaseUrl){
    return{
      get: function(){
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
      get_id: function(){
        Session.destroy('uid');
        $location.path('/login'); 
      },
      post: function(){
        var todos = $resource(BaseUrl);
        return todos.query();
      },
      put: function(){
        
      },
      delete: function(){
        
      }

    }
  }



  angular
    .module('apiService', [])
    .factory('Consultas', Consultas)
    .constant('BaseUrl', 'http://localhost:8888/im-oportunidades/app/api');


})();
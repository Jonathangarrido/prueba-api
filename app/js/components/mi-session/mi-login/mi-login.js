'use strict';
angular.module('miLogin', [])

.component('miLogin',{
  
  templateUrl: './js/components/mi-session/mi-login/mi-login.html',
  
  controller: function(milogin) {
    var vm = this;
    vm.msgtxt = '';
    
    vm.login = function(user){
      // console.log('enter function')
      milogin.login(user,vm);
    }

  }
  
});

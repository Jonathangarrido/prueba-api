'use strict';
angular.module('miAdmin', [])

.component('miAdmin',{
  
  templateUrl: './js/components/mi-session/mi-admin/mi-admin.html',
  
  controller: function(milogin,Consultas,$resource) {
    var vm = this;
    
    vm.txt = 'Page Admin';

    vm.logout = function(){
      milogin.logout();
    }


    vm.casas = Consultas.post();
    console.log(vm.casas);

  }
  
});

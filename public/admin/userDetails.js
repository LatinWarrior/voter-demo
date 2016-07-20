angular
    .module('app')
    .controller('userDetails',  {
      templateUrl: '/admin/userList.html',
      bindings: {
        allUsers: '='
      },
      controller: function($stateParams) {

        this.user = this.allUsers.find(function(user) {
          return user.id === parseInt($stateParams.id);
        })
      }
    });
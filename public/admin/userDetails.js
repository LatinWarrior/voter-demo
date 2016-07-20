angular
    .module('app')
    .component('userDetails',  {
      templateUrl: '/admin/userDetails.html',
      bindings: {
        allUsers: '='
      },
      controller: function($stateParams) {
        console.log('$stateParams', $stateParams);
        this.user = this.allUsers.find(function(user) {
          return user.id === parseInt($stateParams.id);
        })
      }
    });
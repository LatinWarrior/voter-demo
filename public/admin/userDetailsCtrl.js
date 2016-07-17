angular.module('app').controller('userDetailsCtrl', 
      function(allUsers, $stateParams) {
  
  this.user = allUsers.find(function(user) {
    return user.id === parseInt($stateParams.id);
  })
});
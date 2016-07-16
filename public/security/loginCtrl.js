angular.module('app').controller('loginCtrl', 
    ['$state', 'currentIdentity', 'auth',
      function($state, currentIdentity, auth) {
      
  if(currentIdentity.authenticated()) {
    //$location.path('/home');
    $state.go('home');
  }
  
  this.login = function() {
    auth.login({
      username: this.email,
      password: "pass"
    }).then(function() {
      //$location.path('/home');
      $state.go('home');
    }, function(err) {
      toastr.error(err);
    })
  }
}]);
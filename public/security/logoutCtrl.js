angular
    .module('app')
    .controller('logoutCtrl',
        ['$state', 'auth', function($state, auth) {
  auth.logout();
  
  //$location.path('/login');
  $state.go('login');
}]);
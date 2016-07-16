angular.module('app').controller('adminLoginCtrl', 
    ['$state', 'currentIdentity', 'auth', '$scope',
        function($state, currentIdentity, auth, $scope) {
  
  $scope.loggedIn = currentIdentity.authenticated();
  if($scope.loggedIn) {
    //$location.path('/home');
    $state.go('home');
  }
  
  $scope.login = function() {
    auth.login({
      username: $scope.email,
      password: $scope.password
    }).then(function() {
      //$location.path('/home');
      $state.go('home');
    }, function(err) {
      toastr.error(err);
    })
  }
}]);
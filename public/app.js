var app = angular.module('app', ['ui.router']);
app.run(['$rootScope', '$state', function($rootScope, $state) {
  $rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
    if(error === "AUTH_REQUIRED") {
      //$location.path("/login");
      $state.go('login');
    }
    if(error === 'NOT_AUTHORIZED') {
      //$location.path("/home");
      $state.go('home');
    }
    console.log('error: ', error);
  })
}]);

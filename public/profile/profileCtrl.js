angular.module('app').controller('profileCtrl', 
    ['$state', 'currentIdentity', function($state, currentIdentity) {
  
  this.profile = angular.copy(currentIdentity.currentUser);
    
  this.save = function() {
    currentIdentity.updateUser(this.profile);
    toastr.success('Profile Saved!');
  };
  
  this.cancel = function() {
    //$location.path('/home');
    $state.go('home');
  }
  
}]);
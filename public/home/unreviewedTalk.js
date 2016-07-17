angular.module('app').directive('unreviewedTalk', function() {
  return {
    templateUrl: '/home/unreviewedTalk.html',
    scope: {
      session: '=',
      voteYes: '&',
      voteNo: '&'
    },
    controllerAs: '$ctrl',
    bindToController: true, // Implement controllerAs in the directive.
    controller: function() { // Remove scope.

        var $ctrl = this;

        $ctrl.yes = function() {
        this.voteYes();
      };

        $ctrl.no = function() {
        this.voteNo();
      }
    }
  }
});
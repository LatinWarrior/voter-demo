angular
    .module('app')
    .controller('adminLoginCtrl', AdminLoginCtrl);

AdminLoginCtrl.$inject = ['$state', 'currentIdentity', 'auth'];

function AdminLoginCtrl($state, currentIdentity, auth) {

    var $ctrl = this;

    $ctrl.loggedIn = currentIdentity.authenticated();

    if ($ctrl.loggedIn) {
        $state.go('home');
    }

    $ctrl.login = function () {
        auth.login({
            username: $ctrl.email,
            password: $ctrl.password
        }).then(function () {
            $state.go('home');
        }, function (err) {
            toastr.error(err);
        })
    }
}
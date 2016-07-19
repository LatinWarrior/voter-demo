app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {

    var routeResolvers = {
        loggedIn: function (auth) {
            return auth.requireLogin();
        },
        waitForAuth: function (auth) {
            return auth.waitForAuth();
        },
        requireAdmin: function (auth) {
            return auth.requireAdmin();
        },
        userSessions: function (sessions, currentIdentity, auth) {
            return auth.requireLogin().then(function () {
                return sessions.getSessionsByUser(currentIdentity.currentUser.id);
            });
        },
        allSessions: function (sessions, auth) {
            return auth.requireLogin().then(function () {
                return sessions.getAllSessions();
            });
        },
        allUsers: function (users, auth) {
            return auth.requireLogin().then(function () {
                return users.getAllUsers();
            });
        }

    };

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise("home");

    $stateProvider
        .state('adminLogin', {
            url: '/admin/login',
            // controller: 'adminLoginCtrl',
            // controllerAs: '$ctrl',
            // templateUrl: 'admin/adminLogin.html',
            template: '<admin-login></admin-login>',
            resolve: {
                currentAuth: routeResolvers.waitForAuth
            }
        })
        .state('results', {
            url: '/admin/results',
            // controller: 'resultsCtrl',
            // templateUrl: 'admin/results.html',
            // controllerAs: 'vm',
            template: '<results all-sessions="$resolve.allSessions"></results>',
            resolve: {
                admin: routeResolvers.requireAdmin,
                allSessions: routeResolvers.allSessions
            }
        })
        .state('user', {
            url: '/admin/users/:id',
            params: {
                id: null
            },
            controller: 'userDetailsCtrl',
            templateUrl: 'admin/userDetails.html',
            controllerAs: 'vm',
            resolve: {
                admin: routeResolvers.requireAdmin,
                allUsers: routeResolvers.allUsers
            }
        })
        .state('users', {
            url: '/users',
            controller: 'userListCtrl',
            templateUrl: 'admin/userlist.html',
            controllerAs: 'vm',
            resolve: {
                admin: routeResolvers.requireAdmin,
                allUsers: routeResolvers.allUsers
            }
        })
        .state('adminCreateUsers', {
            url: '/admin/createusers',
            controller: 'createUsersCtrl',
            templateUrl: 'admin/createUsers.html',
            controllerAs: 'vm',
            resolve: {
                admin: routeResolvers.requireAdmin
            }
        })
        .state('home', {
            url: '/',
            //controller: 'homeCtrl',
            //templateUrl: 'home/home.html',
            //controllerAs: 'vm',
            template: '<home user-sessions="$resolve.userSessions"></home>',
            resolve: {
                login: routeResolvers.loggedIn,
                userSessions: routeResolvers.userSessions
            }
        })
        .state('profile', {
            url: '/profile',
            controller: 'profileCtrl',
            templateUrl: 'profile/profile.html',
            controllerAs: 'vm',
            resolve: {
                userProfile: routeResolvers.loggedIn,
            }
        })
        .state('createSession', {
            url: '/createsession',
            controller: 'createNewSessionCtrl',
            templateUrl: 'home/createNewSession.html',
            controllerAs: 'vm',
            resolve: {
                userSessions: routeResolvers.userSessions,
            }
        })
        .state('login', {
            url: '/login',
            controller: 'loginCtrl',
            templateUrl: 'security/login.html',
            controllerAs: 'vm',
            resolve: {
                currentAuth: routeResolvers.waitForAuth
            }
        })
        .state('logout', {
            url: '/logout',
            controller: 'logoutCtrl',
            controllerAs: 'vm',
            template: '<logout></logout>'
        });
}]);
angular
    .module('app')
    .component('results', {
            templateUrl: '/admin/results.html',
            bindings: {
                //allSessions: '='
                sessionsByVoteDesc: '=allSessions'
            },
            controller: function () {

                var $ctrl = this;

                //$ctrl.allSessions.sort(function (session1, session2) {
                $ctrl.sessionsByVoteDesc.sort(function (session1, session2) {
                    // reverse order
                    return session2.voteCount - session1.voteCount;
                });

                //this.sessionsByVoteDesc = $ctrl.allSessions;
            }
        }
    );
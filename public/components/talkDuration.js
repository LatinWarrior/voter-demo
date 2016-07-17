/**
 * Created by Luis Blanco on 7/17/2016.
 */
angular.module('app').filter('talkDuration', function() {
    return function(duration) {
        return "Duration: " + duration + " minutes";
    }
});
/**
 * Created by Alex on 13/10/2014.
 */
angular.module('ruzzarin').controller('appCtrl', function ($location) {
    var me = this;

    me.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };

});
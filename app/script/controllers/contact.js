/**
 * Created by Alex on 13/10/2014.
 */
angular.module('ruzzarin').controller('contactCtrl', function ($scope, $http) {
    var me = this;

    me.send = function () {
        $http.post('/api/contact', me.form);
    };
});
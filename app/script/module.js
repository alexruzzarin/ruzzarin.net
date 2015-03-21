/**
 * Created by Alex on 13/10/2014.
 */
angular
    .module('ruzzarin', ['ngRoute'])
    .constant("ga", ga || angular.noop)
    .run(function ($rootScope, $location, ga) {
        $rootScope.$on('$routeChangeSuccess', function (event, currentRoute, previousRoute) {
            ga('send', 'pageview', {'page': $location.url()});
        });
    });
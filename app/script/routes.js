/**
 * Created by Alex on 13/10/2014.
 */
angular.module('ruzzarin')
    .config(function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/', {
                templateUrl: '/partials/home.html',
                controller: 'homeCtrl',
                controllerAs: 'home'
            })
            .when('/contact', {
                templateUrl: '/partials/contact.html',
                controller: 'contactCtrl',
                controllerAs: 'contact'
            });
    });
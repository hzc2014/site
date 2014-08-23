'use strict';

/**
 * @ngdoc overview
 * @name angularTestApp
 * @description
 * # angularTestApp
 *
 * Main module of the application.
 */
angular
    .module('angularTestApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/binding', {
                templateUrl: 'views/binding.html',
                controller: 'BindingCtrl'
            })
            .when('/filter', {
                templateUrl: 'views/filter.html',
                controller: 'FilterCtrl'
            })
            .when('/directive', {
                templateUrl: 'views/directive.html',
                controller: 'DirectiveCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

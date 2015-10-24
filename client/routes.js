'use strict';

angular.module('whoIsChamp').config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('not-found');

    $stateProvider
        .state('home', {
            url: '/',
            views: {
                'header': {
                    templateUrl: 'directives/header/header.html'
                },
                'body': {
                    templateUrl: 'views/home/home.html'
                }
            }

        })
        .state('not-found', {
            url: '/not-found',
            views: {
                'header': {},
                'body': {
                    templateUrl: 'directives/error/error.html'
                }
            }

        });

}]);

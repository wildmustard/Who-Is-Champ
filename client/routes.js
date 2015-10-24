'use strict';

angular.module('whoIsChamp').config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('not-found');

    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'views/home/home.html',
    })
    .state('not-found', {
        url: '/not-found',
        templateUrl: 'directives/error/error.html'
    });

}]);

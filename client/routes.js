'use strict;'

angular.module('whoIsChamp').config(['$stateProvider', '$urlProvider', '$locationProvider', function($urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('not-found');

}]);

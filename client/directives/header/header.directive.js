'use strict';

angular.module('whoIsChamp')
  .directive('header', function () {
    return {
      restrict: 'EA',
      templateUrl: 'directives/header/header.html',
      link: function (scope, element) {
        element.text('header directive');
      }
    };
  });

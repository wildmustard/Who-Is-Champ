'use strict';

angular.module('whoIsChamp')
  .directive('error', function () {
    return {
      restrict: 'EA',
      templateUrl: 'directives/error/error.html',
      link: function (scope, element) {
        element.text('error directive');
      }
    };
  });

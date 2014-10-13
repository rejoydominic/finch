'use strict';

/**
 * @ngdoc function
 * @name finchApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the finchApp
 */
angular.module('finchApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

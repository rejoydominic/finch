'use strict';

/**
 * @ngdoc function
 * @name finchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the finchApp
 */
angular.module('finchApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

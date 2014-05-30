'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/partial1', {templateUrl: 'partials/partial1.html', controller: 'AppCtrl'});
  $routeProvider.when('/partial2', {templateUrl: 'partials/partial2.html', controller: 'AppCtrl'});
  $routeProvider.when('/partial3', {templateUrl: 'partials/partial3.html', controller: 'AppCtrl'});
  $routeProvider.when('/partial4', {templateUrl: 'partials/partial4.html', controller: 'AppCtrl'});
  $routeProvider.when('/about', {templateUrl: 'partials/about.html', controller: 'AppCtrl'});
  $routeProvider.otherwise({redirectTo: '/partial1'});
}]);

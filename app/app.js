'use strict';

angular.module('angularJSapp',[
  'angularJSapp.homepage'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}]);

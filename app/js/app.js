'use strict';

var appAngularJS = angular.module('appAngularJS',['ngRoute','ngResource','ngSanitize']);

appAngularJS.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net');
appAngularJS.constant('pageSize', 2);

appAngularJS.config(function ($routeProvider) {

	$routeProvider.when('/', {
		templateUrl: '/app/templates/home.html',
		controller: 'HomeController'
	});

	$routeProvider.when('/login', {
		templateUrl: '/app/templates/login.html',
		controller: 'LoginController'
	});

	$routeProvider.when('/register', {
		templateUrl: '/app/templates/register.html',
		controller: 'RegisterController'
	});

	// TODO: define a route for the register controller

	$routeProvider.otherwise({redirectTo: '/'});

});
appAngularJS.filter('unsafe',function($sce){
	return function(val) {
		return $sce.trustAsHtml(val);
	};
});
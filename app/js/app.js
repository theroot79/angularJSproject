'use strict';

var appAngularJS = angular.module('appAngularJS',['ngRoute','ngResource']);

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

	// TODO: define a route for the register controller

	$routeProvider.otherwise({redirectTo: '/'});

});
'use strict';

var appAngularJS = angular.module('appAngularJS',['ngRoute','ngResource','LocalStorageModule','ui.bootstrap.pagination']);

//appAngularJS.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net/api');
appAngularJS.constant('baseServiceUrl', 'http://localhost:1337/api');
appAngularJS.constant('pageSize', 2);

appAngularJS.config(function ($routeProvider) {

	$routeProvider.when('/', {
		templateUrl: 'template/home.html',
		controller: 'HomeController'
	});

	$routeProvider.when('/login', {
		templateUrl: 'template/login.html',
		controller: 'LoginController'
	});

	$routeProvider.when('/register', {
		templateUrl: 'template/register.html',
		controller: 'RegisterController'
	});

	$routeProvider.when('/logout', {
		template: '',
		controller: 'LogoutController'
	});

	// TODO: define a route for the register controller

	$routeProvider.otherwise({redirectTo: '/'});

});

/**
 * LocalStorage settings.
 * @type {Function|publishExternalAPI.isDefined|*}
 */
var isDefined = angular.isDefined,
	isUndefined = angular.isUndefined,
	isNumber = angular.isNumber,
	isObject = angular.isObject,
	isArray = angular.isArray,
	extend = angular.extend,
	toJson = angular.toJson,
	fromJson = angular.fromJson;


// Test if string is only contains numbers
// e.g '1' => true, "'1'" => true
function isStringNumber(num) {
	return  /^-?\d+\.?\d*$/.test(num.replace(/["']/g, ''));
}
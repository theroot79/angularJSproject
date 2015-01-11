'use strict';

var appAngularJS = angular.module('appAngularJS',['ngRoute','ngResource','LocalStorageModule','ui.bootstrap']);

appAngularJS.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net/api');
//appAngularJS.constant('baseServiceUrl', 'http://localhost:1337/api');
appAngularJS.constant('PAGESIZE',5);

appAngularJS.config(function ($routeProvider) {

	$routeProvider.when('/', {
		templateUrl: 'template/home.html',
		controller: 'HomeController'
	}).when('/login', {
		templateUrl: 'template/login.html',
		controller: 'LoginController'
	}).when('/register', {
		templateUrl: 'template/register.html',
		controller: 'RegisterController'
	}).when('/user/ads/publish', {
		templateUrl: 'template/user/publish-new-ad.html',
		controller: 'UserPublishNewAdController'
	}).when('/user/ads', {
		templateUrl: 'template/user/list-ads.html',
		controller: 'UserListAdsController'
	}).when('/user/ads/edit/:adId', {
		templateUrl: 'template/user/edit-ad.html',
		controller: 'UserEditAdController'
	}).when('/user/ads/del/:adId', {
		templateUrl: 'template/user/del-ad.html',
		controller: 'UserDelAdController'
	}).when('/user/profile/edit', {
		templateUrl: 'template/user/edit-user-profile.html',
		controller: 'UserEditProfileController'
	}).when('/logout', {
		template: '',
		controller: 'LogoutController'
	}).when('/admin/ads', {
		templateUrl: 'template/admin/ads.html',
		controller: 'AdminListAdsController'
	}).when('/admin/ads/edit/:adId', {
		templateUrl: 'template/admin/edit-ad.html',
		controller: 'AdminEditAdController'
	}).when('/admin/ads/delete/:adId', {
		templateUrl: 'template/admin/del-ad.html',
		controller: 'AdminDelAdController'
	}).when('/admin/users/list', {
		templateUrl: 'template/admin/users-list.html',
		controller: 'AdminUsersListController'
	}).when('/admin/users/edit/:id', {
		templateUrl: 'template/admin/user-edit.html',
		controller: 'AdminUsersEditController'
	}).when('/admin/users/delete/:id', {
		templateUrl: 'template/admin/user-delete.html',
		controller: 'AdminUsersDeleteController'
	}).when('/admin/categories/list', {
		templateUrl: 'template/admin/categories-list.html',
		controller: 'AdminCategoriesListController'
	}).when('/admin/categories/add', {
		templateUrl: 'template/admin/category-add.html',
		controller: 'AdminCategoriesAddController'
	}).when('/admin/categories/edit/:id/:name', {
		templateUrl: 'template/admin/category-edit.html',
		controller: 'AdminCategoriesEditController'
	}).when('/admin/categories/delete/:id/:name', {
		templateUrl: 'template/admin/category-delete.html',
		controller: 'AdminCategoriesDeleteController'
	}).when('/admin/towns/list', {
		templateUrl: 'template/admin/towns-list.html',
		controller: 'AdminTownsListController'
	}).when('/admin/towns/add', {
		templateUrl: 'template/admin/towns-add.html',
		controller: 'AdminTownsAddController'
	}).when('/admin/towns/edit/:id/:name', {
		templateUrl: 'template/admin/towns-edit.html',
		controller: 'AdminTownsEditController'
	}).when('/admin/towns/delete/:id/:name', {
		templateUrl: 'template/admin/towns-delete.html',
		controller: 'AdminTownsDeleteController'
	});

	$routeProvider.otherwise({redirectTo: '/'});

});


/**
 * Implementation for check if the User is logged in
 * or/and is Admin
 */
appAngularJS.run(function($rootScope, $location, authService){
	$rootScope.$on('$locationChangeStart',function(){
		if($location.path().indexOf("/user/") != -1 && !authService.isLoggedIn()){
			$location.path("/");
		}
		if($location.path().indexOf("/admin/") != -1 && !authService.isAdmin()){
			$location.path("/");
		}
	});
	$rootScope.homePage = function(){
		$location.path("/");
	};
});


/**
 * LocalStorage settings.
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
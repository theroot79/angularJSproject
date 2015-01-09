'use strict';

appAngularJS.factory('authService',['$http','$resource','baseServiceUrl','localStorageService',
	function ($http, $resource, baseServiceUrl, localStorageService) {

		/**
		 * Main service resource
		 */
		var baseUrl = baseServiceUrl + '/user';
		var userInfoKey = 'userInfo';

		function loginUser(userData, success, error){
			var resource = $resource(baseUrl+'/login').save(userData).$promise.then(function(response){
				var jsonResponseData = angular.toJson(response);
				localStorageService.set(userInfoKey,jsonResponseData);
				console.log('Logged IN!');
				isAdmin();
			});
			return resource;
		}

		function registerUser(userData, success, error){
			var resource = $resource(baseUrl+'/register').save(userData).$promise.then(function(response){
				var jsonResponseData = angular.toJson(response);
				localStorageService.set(userInfoKey,jsonResponseData);
				console.log('Registered!');
			});
			return resource;
		}

		function logoutUser(){
			var resource = $resource(baseUrl+'/logout').save().$promise.then(function(response){
				localStorageService.removeItem(userInfoKey);
				console.log('Logged Out!');
				//angular.location.href='/#/';
			});
			return resource;
		}

		function getCurrentUserInfo() {
			var uData = localStorageService.get(userInfoKey);
			var uObjData = angular.fromJson(uData);
			return uObjData;
		}
		function getAuthHeadersFnc(){
			var headers = {};
			var userData = getCurrentUserInfo();
			if(userData) {
				headers.Authorization = 'Bearer ' + userData.access_token;
			}
			return headers;
		}

		function isAdmin(){
			var isAdmin = false;

			var userData = getCurrentUserInfo();
			if(userData) {
				isAdmin = userData.is_admin;
			}
			console.log(userData);
			return isAdmin;
		}

		return {
			login: loginUser,
			register: registerUser,
			logout:logoutUser,
			getCurrentUser :getCurrentUserInfo(),

			isAnonymous : function() {
				// TODO
			},

			isLoggedIn : function() {
				// TODO
			},

			isNormalUser : function() {
				// TODO
			},

			isAdmin :isAdmin,
			getAuthHeaders : getAuthHeadersFnc()
		}
	}
]);
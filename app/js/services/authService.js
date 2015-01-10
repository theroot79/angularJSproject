'use strict';

appAngularJS.factory('authService',['$http','$resource','baseServiceUrl','localStorageService',
	function ($http, $resource, baseServiceUrl, localStorageService) {

		/**
		 * Main service resource
		 */
		var baseUrl = baseServiceUrl + '/user';
		var userInfoKey = 'userInfo';

		function loginUser(userData, success, error){
			var resource = $resource(baseUrl+'/login').save(userData);
				resource.$promise.then(function(response){
					var jsonResponseData = angular.toJson(response);
					localStorageService.set(userInfoKey,jsonResponseData);
				});
			return resource;
		}

		function registerUser(userData, success, error){
			var resource = $resource(baseUrl+'/register').save(userData);
				resource.$promise.then(function(response){
					var jsonResponseData = angular.toJson(response);
					localStorageService.set(userInfoKey,jsonResponseData);
				});
			return resource;
		}

		function logoutUser(){
			localStorageService.remove(userInfoKey);
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
			}else{
				return false;
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
				return !!getCurrentUserInfo();
			},

			isNormalUser : function() {
				// TODO
			},

			isAdmin :isAdmin,
			getAuthHeaders : getAuthHeadersFnc()
		}
	}
]);
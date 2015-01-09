'use strict';

appAngularJS.factory('authService',['$http','$resource','baseServiceUrl','localStorageService',
	function ($http, $resource, baseServiceUrl, localStorageService) {

		/**
		 * Main service resource
		 */
		var baseUrl = baseServiceUrl + '/user';
		var userInfoKey = 'userInfo';

		return {
			login: function(userData, success, error) {
				// TODO
			},

			register: function(data){
				return $resource(baseUrl+'/register').save(data).$promise.then(function(){
					console.log(data);
					var userData = angular.toJson(data);
					localStorageService.set(userInfoKey,userData);
				});
			},

			logout: function() {
				// TODO
			},

			getCurrentUser : function() {
				var uData = localStorageService.get(userInfoKey);
				var uObjData = angular.fromJson(uData);
				console.log(uObjData);
				return uObjData;
			},

			isAnonymous : function() {
				// TODO
			},

			isLoggedIn : function() {
				// TODO
			},

			isNormalUser : function() {
				// TODO
			},

			isAdmin : function() {
				// TODO
			},
			getAuthHeaders : function() {
				// TODO
			}
		}
	}
]);
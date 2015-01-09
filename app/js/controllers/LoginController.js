'use strict';

appAngularJS.controller('LoginController',['$scope','$location','authService','notifyService',
	function ($scope, $location, authService, notifyService) {
		$scope.loginNow = function (userData){
			authService.login(userData,
				function success() {
					notifyService.showError("Login Successful !");
				},
				function error(err) {
					notifyService.showError("Login Failed !", err);
				}
			);
		}
	}
]);
'use strict';

appAngularJS.controller('LoginController',['$scope','$location','authService','notifyService',
	function ($scope, $location, authService, notifyService) {

		$scope.loginNow = function (userData){
			authService.login(userData)
				.$promise
				.then(function() {
					notifyService.showInfo("Login Successful !");
					$location.path('/');
				},
				function error(err) {
					var errTxt = '<br /><p>'+err.data.error_description+'</p>';
					notifyService.showError("Login Failed !"+errTxt, err);
					$location.path('/login');
				});
		}
	}
]);
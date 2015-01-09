'use strict';

appAngularJS.controller('RegisterController',['$scope','townsService','authService','notifyService',
	function ($scope, townsService, authService, notifyService) {

		$scope.user = {townId: null};

		townsService.getAllTowns.$promise
			.then(function(data){
				$scope.towns = data;
			});

		$scope.registerNow = function (userData){
			authService.register(userData,
				function success() {
					notifyService.showError("Registration Successful !");
				},
				function error(err) {
					notifyService.showError("Registration Failed !", err);
				}
			);
		}
	}
]);
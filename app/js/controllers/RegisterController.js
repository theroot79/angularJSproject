'use strict';

appAngularJS.controller('RegisterController',['$scope','$location','townsService','authService','notifyService',
	function ($scope, $location, townsService, authService, notifyService) {

		if(authService.isLoggedIn() == true)$location.path("/user/ads");

		$scope.user = {townId: null};

		townsService.getAllTowns().$promise
			.then(function(data){
				$scope.towns = data;
			});

		$scope.registerNow = function (userData){
			authService.register(userData).$promise
				.then(function() {
					notifyService.showInfo("Registration Successful !");
					$location.path('/');
				},
				function error(err) {
					var errStr = "";

					if(err.data.modelState) {
						var mstate = err.data.modelState;
						for (var item in mstate){
							errStr += mstate[item]+"\n";
						}
					}

					var errTxt = '<br /><p>'+String(errStr)+'</p>';
					notifyService.showError("Registration Failed !"+errTxt, err);
				});

		}
	}
]);
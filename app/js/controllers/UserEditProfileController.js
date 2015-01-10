'use strict';

appAngularJS.controller('UserEditProfileController',['$scope','$location','townsService','userServices','authService','notifyService',
	function ($scope, $location, townsService, userServices, authService, notifyService) {

		if(authService.isLoggedIn() == false)$location.path("/");

		$scope.user = {townId: null};

		townsService.getAllTowns().$promise
			.then(function(data){
				$scope.towns = data;
			});

		userServices.getUserInfo(
			function success(resp){
				if(typeof resp == "object"){
					$scope.user = resp;
				}else{
					notifyService.showError("<br/><p>Failed to get User info!</p><br/>");
				}
			},
			function error(err){
				var errTxt = '<br /><p>'+String(err.message)+'</p>';
				notifyService.showError("<br/><p>Failed to get User info!</p><br/>"+errTxt,err);
			}
		);
		
		$scope.updateUserInfoNow = function (userData) {
			userServices.updateUserInfo(userData,function() {
					notifyService.showInfo("Profile Updated Successfuly !");
				},
				function error(err) {
					var errStr = "";
					if(err.message)errStr += err.message+"\n";

					if(err.modelState) {
						var mstate = err.modelState;
						for (var item in mstate){
							errStr += mstate[item]+"\n";
						}
					}
					var errTxt = '<br /><p>'+String(errStr)+'</p>';
					notifyService.showError("Profile Update failed !"+errTxt, err);
				});
		};

		$scope.changePasswordNow = function(userData) {
			userServices.updateUserPass(userData,function() {
					notifyService.showInfo("Password Updated Successfuly !");
				},
				function error(err) {
					var errStr = "";
					if(err.message)errStr += err.message+"\n";

					if(err.modelState) {
						var mstate = err.modelState;
						for (var item in mstate){
							errStr += mstate[item]+"\n";
						}
					}
					var errTxt = '<br /><p>'+String(errStr)+'</p>';
					notifyService.showError("Password Update failed !"+errTxt, err);
				});
		};

	}
]);
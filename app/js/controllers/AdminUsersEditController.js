'use strict';

appAngularJS.controller('AdminUsersEditController',['$scope','$location','$routeParams', 'adminServices', 'townsService','notifyService',
	function ($scope, $location, $routeParams, adminServices, townsService, notifyService) {

		$scope.user = {townId: null};

		var uid = $routeParams.id;
		$scope.user.id = uid;
		$scope.publicTowns = townsService.getAllTowns();

		adminServices.getUserInfo(uid,
			function success(resp){
				if(typeof resp == "object"){
					console.log(resp);
					$scope.user = resp;
					$scope.user.username = resp.userName;
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
			adminServices.updateUserInfo(userData,function() {
					notifyService.showInfo("Profile Updated Successfuly !");
					$location.path('/admin/users/list')
				},
				function error(err) {
					var errStr = "";
					console.log(err);
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
			adminServices.updateUserPass(userData,function() {
					notifyService.showInfo("<p>Method is not working as service</p>" +
					"Password Updated Successfuly !");
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

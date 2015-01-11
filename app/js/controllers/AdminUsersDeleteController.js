'use strict';

appAngularJS.controller('AdminUsersDeleteController',['$scope','$location','$routeParams', 'adminServices', 'townsService','notifyService',
	function ($scope, $location, $routeParams, adminServices, townsService,notifyService) {

		$scope.user = {};
		var uid = $routeParams.id;
		$scope.user.id = uid;

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

		$scope.deleteUserNow = function (userData) {
			adminServices.deleteUser(userData,function() {
					notifyService.showInfo("User Deleted Successfuly !");
					$location.path("/admin/users/list");
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
					notifyService.showError("User Deletion failed !"+errTxt, err);
				});
		};
	}
]);

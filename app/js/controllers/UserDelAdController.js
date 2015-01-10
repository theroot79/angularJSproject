'use strict';

appAngularJS.controller('UserDelAdController',['$scope','$location','$routeParams','townsService','categoriesService','userServices','notifyService',
	function ($scope, $location, $routeParams, townsService, categoriesService, userServices, notifyService) {
		$scope.adData = {title:'', townId: null, categoryId: null};
		var adId = $routeParams.adId;
		$scope.adNum = adId;

		$scope.publicCategories = categoriesService.getCategories();
		$scope.publicTowns = townsService.getAllTowns();

		userServices.getUserAdById(adId,
			function success(resp){
				console.log(resp);
				if(typeof resp == "object"){
					$scope.adData = resp;
				}else{
					notifyService.showError("<br/><p>Failed to get Ad info!</p><br/>");
				}
			},
			function error(err){
				var errTxt = '<br /><p>'+String(err.message)+'</p>';
				notifyService.showError("<br/><p>Failed to get Ad info!</p><br/>"+errTxt,err);
			}
		);

		$scope.deleteAd = function(adData) {
			userServices.editUserAd(adData,
				function success(){
					notifyService.showInfo("<br /><p>Ad Deleted Successfuly!<br /></p>");
					//$location.path("/user/ads");
				},
				function error(err){
					console.log(err);
					var errStr = "";
					if(err.modelState) {
						var mstate = err.modelState;
						for (var item in mstate){
							errStr += mstate[item]+"\n";
						}
					}
					var errTxt = '<br /><p>'+String(errStr)+'</p>';
					notifyService.showError("<br/><p>Failed to delete Ad!</p><br/>"+errStr,err);
				}
			);
		};
	}
]);

'use strict';

appAngularJS.controller('UserPublishNewAdController',['$scope','$location','townsService','categoriesService','authService','notifyService',
	function ($scope, $location, townsService, categoriesService, authService, notifyService) {
		$scope.adData = {townId: null, categoryId: null};
		$scope.publicCategories = categoriesService.getCategories();
		$scope.publicTowns = townsService.getAllTowns();

		$scope.publishAd = function(adData) {
			userService.createNewAd(adData,
				function success(){
					notifyService.showInfo("<br /><p>Ad Created Successfuly !<br /></p>");
					$location.path("/user/ads");
				},
				function error(err){
					console.log(err);
					var errTxt = '<br /><p>'+err.data.error_description+'</p>';
					notifyService.showError("Failed to create Ad! "+errTxt, err);
				}
			);
		};
	}
]);

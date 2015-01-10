'use strict';

appAngularJS.controller('UserPublishNewAdController',['$scope','$location','townsService','categoriesService','userServices','notifyService',
	function ($scope, $location, townsService, categoriesService, userServices, notifyService) {
		$scope.adData = {townId: null, categoryId: null};
		$scope.publicCategories = categoriesService.getCategories();
		$scope.publicTowns = townsService.getAllTowns();

		$scope.publishAd = function(adData) {
			userServices.createNewAd(adData,
				function success(){
					notifyService.showInfo("<br /><p>Ad Created Successfuly, but will be waiting for aproval!<br /></p>");
					$location.path("/user/ads");
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
					notifyService.showError("<br/><p>Failed to create Ad!</p><br/>"+errStr,err);
				}
			);
		};

		$scope.fileSelected = function(fileInputField) {
			delete $scope.adData.imageDataUrl;
			var file = fileInputField.files[0];
			if (file.type.match(/image\/.*/)) {
				var reader = new FileReader();
				reader.onload = function() {
					$scope.adData.imageDataUrl = reader.result;
					$(".image-box").html("<img src='" + reader.result + "'>");
				};
				reader.readAsDataURL(file);
			} else {
				$(".image-box").html("<p>File type not supported!</p>");
			}
		};

	}
]);

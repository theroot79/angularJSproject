'use strict';

appAngularJS.controller('UserEditAdController',['$scope','$location','$routeParams','townsService','categoriesService','userServices','notifyService',
	function ($scope, $location, $routeParams, townsService, categoriesService, userServices, notifyService) {
		$scope.adData = {title:'', townId: null, categoryId: null};
		var adId = $routeParams.adId;
		$scope.adNum = adId;
		$scope.publicCategories = categoriesService.getCategories();
		$scope.publicTowns = townsService.getAllTowns();

		userServices.getUserAdById(adId,
			function success(resp){
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

		$scope.removeImageFromAd = function(){
			$(".image-box").html("<p>No Image Selected!</p>");
			$scope.imageDataUrl = null;
		};

		$scope.updateAd = function(adData) {
			userServices.editUserAd(adData,
				function success(){
					notifyService.showInfo("<br /><p>Ad Updated Successfuly!<br /></p>");
					$location.path("/user/ads");
				},
				function error(err){
					var errStr = "";
					if(err.modelState) {
						var mstate = err.modelState;
						for (var item in mstate){
							errStr += mstate[item]+"\n";
						}
					}
					var errTxt = '<br /><p>'+String(errStr)+'</p>';
					notifyService.showError("<br/><p>Failed to update Ad!</p><br/>"+errStr,err);
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

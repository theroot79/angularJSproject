'use strict';

appAngularJS.controller('AdminEditAdController',['$scope','$location','$routeParams','townsService','categoriesService','adminServices','notifyService',
	function ($scope, $location, $routeParams, townsService, categoriesService, adminServices, notifyService) {
		$scope.adData = {title:'', townId: null, categoryId: null, changeimage: false};
		var adId = $routeParams.adId;
		$scope.adNum = adId;
		$scope.publicCategories = categoriesService.getCategories();
		$scope.publicTowns = townsService.getAllTowns();

		adminServices.getAdminAdById(adId,
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
			adminServices.editAdminAd(adData,
				function success(){
					notifyService.showInfo("<br /><p>Ad Updated Successfuly!<br /></p>");
					$location.path("/admin/ads");
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
					$scope.adData.changeimage = true;
					$(".image-box").html("<img src='" + reader.result + "'>");
				};
				reader.readAsDataURL(file);
			} else {
				$(".image-box").html("<p>File type not supported!</p>");
			}
		};



		$scope.today = function() {
			$scope.adData.date = new Date();
		};
		$scope.clear = function () {
			$scope.adData.date = $scope.date;
		};

		$scope.open = function($event) {
			$event.preventDefault();
			$event.stopPropagation();
			$scope.opened = true;
		};

		$scope.dateOptions = {
			formatYear: 'yy',
			startingDay: 1
		};

	}
]);

'use strict';

appAngularJS.controller('AdminDelAdController',['$scope','$location','$routeParams','adminServices','notifyService',
	function ($scope, $location, $routeParams, adminServices, notifyService){
		$scope.adData = {title:'', text:'',  townId: null, categoryId: null};

		var adId = $routeParams.adId;
		$scope.adNum = adId;

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

		$scope.deleteAd = function(adId){
			adminServices.delAdminAd(adId,
				function success(){
					notifyService.showInfo("<br /><p>Ad Deleted Successfuly!<br /></p>");
					$location.path("/admin/ads");
				},
				function error(err){
					var errTxt = '<br /><p>'+String(err.message)+'</p>';
					notifyService.showError("<br/><p>Failed to delete Ad!</p><br/>"+errTxt,err);
				}
			);
		};
	}
]);

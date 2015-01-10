'use strict';

appAngularJS.controller('UserDelAdController',['$scope','$location','$routeParams','userServices','notifyService',
	function ($scope, $location, $routeParams, userServices, notifyService){
		$scope.adData = {title:'', text:'',  townId: null, categoryId: null};

		var adId = $routeParams.adId;
		$scope.adNum = adId;

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

		$scope.deleteAd = function(adId){
			userServices.delUserAd(adId,
				function success(){
					notifyService.showInfo("<br /><p>Ad Deleted Successfuly!<br /></p>");
					$location.path("/user/ads");
				},
				function error(err){
					var errTxt = '<br /><p>'+String(err.message)+'</p>';
					notifyService.showError("<br/><p>Failed to delete Ad!</p><br/>"+errTxt,err);
				}
			);
		};
	}
]);

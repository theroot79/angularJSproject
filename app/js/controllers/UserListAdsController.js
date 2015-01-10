'use strict';

appAngularJS.controller('UserListAdsController',['$scope','$location','userServices','authService','notifyService','filters','PAGESIZE',
	function ($scope, $location, userServices, authService, notifyService, filters, PAGESIZE) {

		$scope.currentPage = 1;
		$scope.startPage = 1;
		$scope.itemsPerPage = PAGESIZE;

		function loadUserAds(params){
			var paramsSend = params || {};
			userServices.getUserAds(paramsSend,function (resp) {
				$scope.allPublicAds = resp;
			});
		}

		filters.setPage($scope.currentPage,$scope.itemsPerPage);
		loadUserAds(filters.getParams());

		$scope.myAdsSetFilter = function (status){
			filters.setStatus(status);
			loadUserAds(filters.getParams());
		};

		$scope.pageChanged = function(){
			filters.setPage($scope.currentPage,$scope.itemsPerPage);
			loadUserAds(filters.getParams());
		};

		$scope.deactivateAd = function(adId){
			userServices.deactivateAd(adId,
				function success(){
					notifyService.showInfo("<br /><p>Ad Deactivated Successfuly!<br /></p>");
					loadUserAds(filters.getParams());
				},
				function error(err){
					var errTxt = '<br /><p>'+String(err.message)+'</p>';
					notifyService.showError("<br/><p>Failed to deactivate Ad!</p><br/>"+errTxt,err);
				});
		};

		$scope.publishAgaineAd = function(adId){
			userServices.publishAgainAd(adId,
				function success(){
					notifyService.showInfo("<br /><p>Ad Published Successfuly!<br /></p>");
					loadUserAds(filters.getParams());
				},
				function error(err){
					var errTxt = '<br /><p>'+String(err.message)+'</p>';
					notifyService.showError("<br/><p>Failed to publish Ad!</p><br/>"+errTxt,err);
				});
		};

	}
]);

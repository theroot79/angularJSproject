'use strict';

appAngularJS.controller('AdminListAdsController',['$scope','$location','adminServices','authService','townsService', 'categoriesService','notifyService','filters','PAGESIZE',
	function ($scope, $location, adminServices, authService, townsService, categoriesService, notifyService, filters, PAGESIZE) {

		$scope.currentPage = 1;
		$scope.startPage = 1;
		$scope.itemsPerPage = PAGESIZE;

		function loadAdminAds(params){
			jQuery('.adslist').addClass('bgloader');
			var paramsSend = params || {};
			adminServices.getAdminAds(paramsSend,function (resp) {
				$scope.allPublicAds = resp;
				jQuery('.adslist').removeClass('bgloader');
			});
		}


		filters.setPage($scope.currentPage,$scope.itemsPerPage);
		loadAdminAds(filters.getParams());

		categoriesService.getCategories().$promise.then(function(resp){
			$scope.publicCategories = resp;
		});
		$scope.categoryClicked = function (categoryObj){
			console.log(categoryObj);
			filters.filterByCategory(categoryObj);
			loadAdminAds(filters.getParams());
		};

		townsService.getAllTowns().$promise.then(function(resp){
			$scope.publicTowns = resp;
		});
		$scope.townClicked = function (townObj){
			filters.filterByTown(townObj);
			loadAdminAds(filters.getParams());
		};

		$scope.myAdsSetFilter = function (status){
			filters.setStatus(status);
			loadAdminAds(filters.getParams());
		};

		$scope.pageChanged = function(){
			filters.setPage($scope.currentPage,$scope.itemsPerPage);
			loadAdminAds(filters.getParams());
		};

		$scope.RejectAd = function(adId){
			adminServices.rejectAd(adId,
				function success(){
					notifyService.showInfo("<br /><p>Ad Rejected Successfuly!<br /></p>");
					loadAdminAds(filters.getParams());
				},
				function error(err){
					var errTxt = '<br /><p>'+String(err.message)+'</p>';
					notifyService.showError("<br/><p>Failed to Rejected Ad!</p><br/>"+errTxt,err);
				});
		};

		$scope.ApproveAd = function(adId){
			adminServices.approveAd(adId,
				function success(){
					notifyService.showInfo("<br /><p>Ad Approved Successfuly!<br /></p>");
					loadAdminAds(filters.getParams());
				},
				function error(err){
					var errTxt = '<br /><p>'+String(err.message)+'</p>';
					notifyService.showError("<br/><p>Failed to Approved Ad!</p><br/>"+errTxt,err);
				});
		};

	}
]);

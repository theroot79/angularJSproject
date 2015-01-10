'use strict';

appAngularJS.controller('UserListAdsController',['$scope','userServices','authService','notifyService','filters','PAGESIZE',
	function ($scope, userServices, authService, notifyService, filters, PAGESIZE) {

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

		$scope.myAdsSetFilter = function (filter){
			filters.filterByTown(townObj);
			loadUserAds(filters.getParams());
		};

		$scope.pageChanged = function(){
			filters.setPage($scope.currentPage,$scope.itemsPerPage);
			loadUserAds(filters.getParams());
		};

	}
]);

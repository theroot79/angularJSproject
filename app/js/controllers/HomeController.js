'use strict';

appAngularJS.controller('HomeController',['$scope','$rootScope','adsService','townsService','categoriesService','authService','notifyService','filters','pageSize',
	function ($scope, $rootScope, adsService, townsService, categoriesService, authService, notifyService, filters, pageSize) {

		$scope.currentPage = 1;
		$scope.startPage = 1;
		$scope.itemsPerPage = pageSize;

		function loadPublicAds(params){
			var paramsSend = params || {};
			adsService.getPublicAds(paramsSend).$promise.then(function (resp) {
				$scope.allPublicAds = resp;
			});
		}

		filters.setPage($scope.currentPage,$scope.itemsPerPage);
		loadPublicAds(filters.getParams());

		categoriesService.getCategories().$promise.then(function(resp){
			$scope.publicCategories = resp;

		});
		$scope.categoryClicked = function (categoryObj){
			filters.filterByCategory(categoryObj);
			loadPublicAds(filters.getParams());
		};

		townsService.getAllTowns().$promise.then(function(resp){
			$scope.publicTowns = resp;
		});
		$scope.townClicked = function (townObj){
			filters.filterByTown(townObj);
			loadPublicAds(filters.getParams());
		};

		$scope.pageChanged = function(){
			filters.setPage($scope.currentPage,$scope.itemsPerPage);
			loadPublicAds(filters.getParams());
		};
	}
]);
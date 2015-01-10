'use strict';

appAngularJS.controller('HomeController',['$scope','$rootScope','adsService','townsService','categoriesService','authService','notifyService','filters','pageSize',
	function ($scope, $rootScope, adsService, townsService, categoriesService, authService, notifyService, filters, pageSize) {

		$scope.startPage = 0;
		$scope.itemsPerPage = 5;

		$rootScope.isLoggedIn = Boolean(authService.isLoggedIn());

		function loadPublicAds(params){
			var paramsSend = params || {};
			adsService.getPublicAds(paramsSend).$promise.then(function (resp) {
				$scope.allPublicAds = resp;
			});
		}

		loadPublicAds();

		categoriesService.getCategories().$promise.then(function(resp){
			$scope.publicCategories = resp;

		});
		$scope.categoryClicked = function (categoryObj){
			filters.filterByCategory(categoryObj);
			loadPublicAds(filters.getFilterParams());
		};

		townsService.getAllTowns().$promise.then(function(resp){
			$scope.publicTowns = resp;
		});
		$scope.townClicked = function (townObj){
			filters.filterByTown(townObj);
			loadPublicAds(filters.getFilterParams());
		};


		$scope.pageChanged = function(){

		}

	}
]);
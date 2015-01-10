'use strict';

appAngularJS.controller('HomeController',['$scope','$rootScope','adsService','townsService','categoriesService','authService','notifyService','pageSize',
	function ($scope, $rootScope, adsService, townsService, categoriesService, authService, notifyService, pageSize) {

		$rootScope.isLoggedIn = Boolean(authService.isLoggedIn());
		console.log($rootScope.isLoggedIn);

		adsService.getPublicAds().$promise.then(function(resp){
			$scope.allPublicAds = resp;
		});

		categoriesService.getCategories().$promise.then(function(data){
			$scope.publicCategories = data;
		});

		$scope.towns = townsService.getAllTowns().$promise.then(function(data){
			$scope.publicTowns = data;
		});


	}
]);
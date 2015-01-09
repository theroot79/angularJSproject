'use strict';

appAngularJS.controller('HomeController',['$scope','$rootScope','$sce','homepageService','notifyService','pageSize',
	function ($scope, $rootScope, $sce, homepageService, notifyService, pageSize) {

		$scope.allTitle = '<span>Ads - All</span>';

		homepageService.getAllAds(function(resp){

			$scope.allAds = resp;

		});
	}
]);
'use strict';

appAngularJS.controller('HomeController',['$scope','$rootScope','$sce','homepageService','notifyService','pageSize',
	function ($scope, $rootScope, $sce, homepageService, notifyService, pageSize) {

		homepageService.getAllAds(function(resp){

			$scope.allAds = resp;

		});
	}
]);
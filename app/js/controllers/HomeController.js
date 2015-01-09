'use strict';

appAngularJS.controller('HomeController',['$scope','$rootScope','homepageService','notifyService','pageSize',
	function ($scope, $rootScope, homepageService, notifyService, pageSize) {
		homepageService.getAllAds(function(resp){
			$scope.allAds = resp;
		});
	}
]);
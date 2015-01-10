'use strict';

appAngularJS.controller('LogoutController',['$scope','$location','authService',
	function ($scope, $location, authService){
		authService.logout();
		$location.path("/");
	}
]);
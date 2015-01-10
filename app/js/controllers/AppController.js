'use strict';

appAngularJS.controller('AppController',['$scope','$rootScope','authService',
	function ($scope, $rootScope, authService) {
		$scope.authService = authService;
		$rootScope.isLoggedIn = Boolean(authService.isLoggedIn());
	}
]);
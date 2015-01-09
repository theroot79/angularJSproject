'use strict';

appAngularJS.controller('AppController',
	function ($scope, authService) {
		// Put the authService in the $scope to make it accessible from all screens
		$scope.authService = authService;
	}
);
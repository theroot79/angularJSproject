'use strict';

appAngularJS.controller('LogoutController',
	function ($scope, $location, authService){
		authService.logout();
	}
);
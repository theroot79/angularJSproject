'use strict';

appAngularJS.controller('LogoutController',['$scope','$location','authService',
	function ($scope, $location, authService){
		jQuery('.navbar-default,.footer').css({
			'backgroundImage':'linear-gradient(to bottom, #FFF 10%, #E4FFE1 100%)'
		})
		authService.logout();
		$location.path("/");
	}
]);
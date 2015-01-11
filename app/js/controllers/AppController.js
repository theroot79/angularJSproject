'use strict';

appAngularJS.controller('AppController',['$scope','$rootScope','authService',
	function ($scope, $rootScope, authService) {

		$scope.authService = authService;
		$rootScope.isLoggedIn = Boolean(authService.isLoggedIn());

		$scope.getPartialHtmls = function () {
			var userStateTopPanel = 'notLoggedIn';

			$rootScope.isLoggedIn = Boolean(authService.isLoggedIn());
			$rootScope.isLoggedAdmin = Boolean(authService.isAdmin());

			if($rootScope.isLoggedAdmin){
				jQuery('.navbar-default,.footer').css({
					'backgroundImage':'linear-gradient(to bottom, #FFF 10%, #ffd4a5 100%)'
				})
			}
			if($rootScope.isLoggedIn && $rootScope.isLoggedAdmin){
				userStateTopPanel = 'loggedInAdmin';
			}else if($rootScope.isLoggedIn && !$rootScope.isLoggedAdmin){
				userStateTopPanel = 'loggedInUser';
			}

			return 'template/partial/menu-'+userStateTopPanel+'.html';
		}
	}
]);
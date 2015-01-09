'use strict';

appAngularJS.controller('RegisterController',['$scope','townsService','authService','notifyService',
	function ($scope, townsService, authService, notifyService) {
		townsService.getAllTowns = function(data){
			console.log(data);
		}
	}
]);
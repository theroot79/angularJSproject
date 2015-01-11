'use strict';

appAngularJS.controller('AdminTownsDeleteController',['$scope','$location','$routeParams','adminServices','notifyService',
	function ($scope, $location, $routeParams, adminServices, notifyService) {

		$scope.town = {name:''};
		$scope.town.id = $routeParams.id;
		$scope.town.name = $routeParams.name;

		$scope.deleteTownNow = function (town){
			adminServices.deleteAdminTown(town,
				function success(){
					notifyService.showInfo("<br /><p>Town deleted successfuly!<br /></p>");
					$location.path("/admin/towns/list");
				},
				function error(err){
					var errTxt = '<br /><p>'+String(err.message)+'</p>';
					notifyService.showError("<br/><p>Failed to delete Town!</p><br/>"+errTxt,err);
				}
			);
		};

	}
]);

'use strict';

appAngularJS.controller('AdminTownsEditController',['$scope','$location','$routeParams','adminServices','notifyService',
	function ($scope, $location, $routeParams, adminServices, notifyService) {

		$scope.town = {name:''};
		$scope.town.id = $routeParams.id;
		$scope.town.name = $routeParams.name;

		$scope.editTownNow = function (town){
			adminServices.editAdminTowns(town,
				function success(){
					notifyService.showInfo("<br /><p>Town edited successfuly!<br /></p>");
					$location.path("/admin/towns/list");
				},
				function error(err){
					var errTxt = '<br /><p>'+String(err.message)+'</p>';
					notifyService.showError("<br/><p>Failed to edit Town!</p><br/>"+errTxt,err);
				}
			);
		};

	}
]);

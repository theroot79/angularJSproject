'use strict';

appAngularJS.controller('AdminTownsAddController',['$scope','$location','adminServices','notifyService',
	function ($scope, $location, adminServices, notifyService) {

		$scope.town = {name:''};

		$scope.addTownNow = function (town){
			adminServices.addAdminTown(town,
				function success(){
					notifyService.showInfo("<br /><p>Town created successfuly!<br /></p>");
					$location.path("/admin/towns/list");
				},
				function error(err){
					var errTxt = '<br /><p>'+String(err.message)+'</p>';
					notifyService.showError("<br/><p>Failed to create Town!</p><br/>"+errTxt,err);
				}
			);
		};

	}
]);

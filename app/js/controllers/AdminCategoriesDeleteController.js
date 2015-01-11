'use strict';

appAngularJS.controller('AdminCategoriesDeleteController',['$scope','$location','$routeParams','adminServices','notifyService',
	function ($scope, $location, $routeParams, adminServices, notifyService) {

		$scope.category = {name:''};
		$scope.category.id = $routeParams.id;
		$scope.category.name = $routeParams.name;

		$scope.deleteCategoryNow = function (category){
			adminServices.deleteAdminCategory(category,
				function success(){
					notifyService.showInfo("<br /><p>Category deleted successfuly!<br /></p>");
					$location.path("/admin/categories/list");
				},
				function error(err){
					var errTxt = '<br /><p>'+String(err.message)+'</p>';
					notifyService.showError("<br/><p>Failed to delete Category!</p><br/>"+errTxt,err);
				}
			);
		};

	}
]);

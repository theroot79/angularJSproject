'use strict';

appAngularJS.controller('AdminCategoriesEditController',['$scope','$location','$routeParams','adminServices','notifyService',
	function ($scope, $location, $routeParams, adminServices, notifyService) {

		$scope.category = {name:''};
		$scope.category.id = $routeParams.id;
		$scope.category.name = $routeParams.name;

		$scope.editCategoryNow = function (category){
			adminServices.editAdminCategory(category,
				function success(){
					notifyService.showInfo("<br /><p>Category edited successfuly!<br /></p>");
					$location.path("/admin/categories/list");
				},
				function error(err){
					var errTxt = '<br /><p>'+String(err.message)+'</p>';
					notifyService.showError("<br/><p>Failed to edit Category!</p><br/>"+errTxt,err);
				}
			);
		};

	}
]);

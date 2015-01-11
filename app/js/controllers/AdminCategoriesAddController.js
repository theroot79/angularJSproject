'use strict';

appAngularJS.controller('AdminCategoriesAddController',['$scope','$location','adminServices','notifyService',
	function ($scope, $location, adminServices, notifyService) {

		$scope.category = {name:''};

		$scope.addCategoryNow = function (categoryObj){
			adminServices.addAdminCategory(categoryObj,
				function success(){
					notifyService.showInfo("<br /><p>Category created successfuly!<br /></p>");
					$location.path("/admin/categories/list");
				},
				function error(err){
					var errTxt = '<br /><p>'+String(err.message)+'</p>';
					notifyService.showError("<br/><p>Failed to create Category!</p><br/>"+errTxt,err);
				}
			);
		};

	}
]);

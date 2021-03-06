'use strict';

appAngularJS.controller('AdminCategoriesListController',['$scope','$location','adminServices','notifyService','filters',
	function ($scope, $location, adminServices, notifyService, filters) {

		$scope.currentPage = 1;
		$scope.startPage = 1;
		$scope.itemsPerPage = 10;
		$scope.SortBy = 'username';
		$scope.reverseSort = false;

		function loadAdminCategories(params){
			var paramsSend = params || {};
			adminServices.getAdminCategories(paramsSend,function (resp) {
				$scope.allCategories = resp;
			});
		}

		$scope.sortBy = function(sortByStr){
			filters.sortBy(sortByStr);
			loadAdminCategories(filters.getParams());
			$scope.reverseSort = $scope.reverseSort == false;
		};

		filters.setPage($scope.currentPage,$scope.itemsPerPage);
		filters.sortBy('Name');
		loadAdminCategories(filters.getParams());

		$scope.pageChanged = function(){
			filters.setPage($scope.currentPage,$scope.itemsPerPage);
			loadAdminCategories(filters.getParams());
		};

	}
]);

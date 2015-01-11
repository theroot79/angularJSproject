'use strict';

appAngularJS.controller('AdminCategoriesListController',['$scope','$location','adminServices','authService','townsService', 'categoriesService','notifyService','filters','PAGESIZE',
	function ($scope, $location, adminServices, authService, townsService, categoriesService, notifyService, filters, PAGESIZE) {

		$scope.currentPage = 1;
		$scope.startPage = 1;
		$scope.itemsPerPage = PAGESIZE;
		$scope.SortBy = 'username';
		$scope.reverseSort = false;

		function loadAdminCategories(params){
			var paramsSend = params || {};
			adminServices.getAdminCategories(paramsSend,function (resp) {
				console.log(resp);
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


		$scope.categoryClicked = function (categoryObj){
			console.log(categoryObj);
			filters.filterByCategory(categoryObj);
			loadAdminCategories(filters.getParams());
		};

		$scope.pageChanged = function(){
			filters.setPage($scope.currentPage,$scope.itemsPerPage);
			loadAdminCategories(filters.getParams());
		};

	}
]);

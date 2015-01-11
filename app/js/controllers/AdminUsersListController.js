'use strict';

appAngularJS.controller('AdminUsersListController',['$scope','adminServices','filters',
	function ($scope, adminServices, filters) {

		$scope.currentPage = 1;
		$scope.startPage = 1;
		$scope.itemsPerPage = 10;
		$scope.SortBy = 'UserName';
		$scope.reverseSort = false;

		function loadAdminUsers(params){
			var paramsSend = params || {};
			adminServices.getAdminUsers(paramsSend,function (resp) {
				$scope.allUsers = resp;
			});
		}

		$scope.sortBy = function(sortByStr){
			filters.sortBy(sortByStr);
			loadAdminUsers(filters.getParams());
			$scope.reverseSort = $scope.reverseSort == false;
		};

		filters.setPage($scope.currentPage,$scope.itemsPerPage);
		filters.sortBy('UserName');
		loadAdminUsers(filters.getParams());

		$scope.pageChanged = function(){
			filters.setPage($scope.currentPage,$scope.itemsPerPage);
			loadAdminUsers(filters.getParams());
		};

	}
]);

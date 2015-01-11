'use strict';

appAngularJS.controller('AdminTownsListController',['$scope','$location','adminServices','notifyService','filters',
	function ($scope, $location, adminServices, notifyService, filters) {

		$scope.currentPage = 1;
		$scope.startPage = 1;
		$scope.itemsPerPage = 8;
		$scope.SortBy = 'Name';
		$scope.reverseSort = false;

		function loadAdminTowns(params){
			var paramsSend = params || {};
			adminServices.getAdminTowns(paramsSend,function (resp) {
				$scope.allTowns = resp;
			});
		}

		$scope.sortBy = function(sortByStr){
			filters.sortBy(sortByStr);
			loadAdminTowns(filters.getParams());
			$scope.reverseSort = $scope.reverseSort == false;
		};

		filters.setPage($scope.currentPage,$scope.itemsPerPage);
		filters.sortBy('Name');
		loadAdminTowns(filters.getParams());

		$scope.pageChanged = function(){
			filters.setPage($scope.currentPage,$scope.itemsPerPage);
			loadAdminTowns(filters.getParams());
		};

	}
]);

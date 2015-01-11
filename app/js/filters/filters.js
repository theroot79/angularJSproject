appAngularJS.factory('filters',
	function(){
		var filterParams = {};

		function filterByCategory(categoryObj){
			if(categoryObj == 0){
				delete filterParams.categoryId;
			}else{
				filterParams.categoryId = categoryObj.id;
			}
		}

		function filterByTown(townObj){
			if(townObj == 0){
				delete filterParams.townId;
			}else{
				filterParams.townId = townObj.id;
			}
		}

		function getFilterParams(){
			return filterParams;
		}

		function setPage(startPage,pagesize){
			filterParams.startPage = startPage;
			filterParams.pagesize = pagesize;
		}

		function setStatus(statusStr){
			if(statusStr == 0){
				delete filterParams.status;
			}else{
				filterParams.status = statusStr;
			}
		}

		return {
			filterByCategory: filterByCategory,
			filterByTown: filterByTown,
			getParams: getFilterParams,
			setPage: setPage,
			setStatus: setStatus
		}
	}
);
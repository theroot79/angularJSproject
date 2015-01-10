appAngularJS.factory('filters',function(){

	var filterParams = {};

	function filterByCategory(categoryObj){
		if(filterParams.categoryId != categoryObj.id){
			filterParams.categoryId = categoryObj.id;
		}else{
			delete filterParams.categoryId;
		}

	}

	function filterByTown(townObj){
		if(filterParams.townId != townObj.id) {
			filterParams.townId = townObj.id;
		}else{
			delete filterParams.townId;
		}
	}


	function getFilterParams(){
		return filterParams;
	}

	return {
		filterByCategory: filterByCategory,
		filterByTown: filterByTown,
		getFilterParams: getFilterParams
	}

});
'use strict';

appAngularJS.factory('categoriesService', ['$resource', 'baseServiceUrl',
	function ($resource, baseServiceUrl) {

		var categoriesResource = $resource(
			baseServiceUrl + '/categories'
		);

		return {
			getCategories: function(success, error) {
				return categoriesResource.query(success, error);
			}
		}

	}
]);
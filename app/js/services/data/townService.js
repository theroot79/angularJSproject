'use strict';

appAngularJS.factory('townsService', ['$resource', 'baseServiceUrl',
	function ($resource, baseServiceUrl) {

		var categoriesResource = $resource(
			baseServiceUrl + '/towns'
		);

		return {
			getAllTowns: function(success, error) {
				return categoriesResource.query(success, error);
			}
		}

	}
]);
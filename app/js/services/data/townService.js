'use strict';

appAngularJS.factory('townsService', ['$resource', 'baseServiceUrl',
	function ($resource, baseServiceUrl) {

		/**
		 * Main resource
		 */
		var resource = $resource(baseServiceUrl + '/towns');

		return {
			getAllTowns: getTowns()
		};
		/**
		 * Pulls all towns from SoftUni service provider
		 */
		function getTowns() {
			return resource.query();
		}
	}
]);
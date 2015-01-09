'use strict';

appAngularJS.factory('townsService',
	function ($resource, baseServiceUrl) {
		return {
			getAllTowns: getTowns($resource,baseServiceUrl)
		};
		/**
		 * Pulls all towns from SoftUni service provider
		 */
		function getTowns($resource,baseServiceUrl){
			return $resource(baseServiceUrl+'/api/towns').get();
		}

	}
);
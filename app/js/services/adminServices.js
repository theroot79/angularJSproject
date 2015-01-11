'use strict';

appAngularJS.factory('adminServices',['$http','baseServiceUrl','authService',
	function($http, baseServiceUrl, authService) {

		function getAdminAds(params,success,error){
			var request = {
				method: 'GET',
				url: baseServiceUrl + '/admin/ads',
				headers: authService.getAuthHeaders(),
				params: params
			};
			$http(request).success(success).error(error);
		}

		function getAdminAdById(adId,success,error){
			var request = {
				method: 'GET',
				url: baseServiceUrl + '/admin/ads/'+adId,
				headers: authService.getAuthHeaders(),
				params: {}
			};
			$http(request).success(success).error(error);
		}

		function editAdminAd(adData,success,error){
			var request = {
				method: 'PUT',
				url: baseServiceUrl + '/admin/ads/'+adData.id,
				headers: authService.getAuthHeaders(),
				data: adData
			};
			return $http(request).success(success).error(error)
		}

		return {
			getAdminAds:getAdminAds,
			getAdminAdById:getAdminAdById,
			editAdminAd:editAdminAd
		}
	}
]);

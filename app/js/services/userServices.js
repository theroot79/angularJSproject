'use strict';

app.factory('userService',['$http','baseServiceUrl','authService',
	function($http, baseServiceUrl, authService) {

		function createNewAd(adData,success,error){
			var request = {
				method: 'POST',
				url: baseServiceUrl + '/api/user/ads',
				headers: authService.getAuthHeaders(),
				data: adData
			};
			$http(request).success(success).error(error);
		}

		function getUserAds(params,success,error){
			var request = {
				method: 'GET',
				url: baseServiceUrl + '/api/user/ads',
				headers: authService.getAuthHeaders(),
				params: params
			};
			$http(request).success(success).error(error);
		}

		return {
			createNewAd: createNewAd,
			getUserAds:getUserAds,
			deactivateAd: function (id, success, error) {
				// TODO
			},
			publishAgainAd: function (id, success, error) {
				// TODO
			}
		}
	}
]);

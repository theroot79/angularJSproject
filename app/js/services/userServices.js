'use strict';

appAngularJS.factory('userServices',['$http','baseServiceUrl','authService',
	function($http, baseServiceUrl, authService) {

		function createNewAd(adData,success,error){
			var request = {
				method: 'POST',
				url: baseServiceUrl + '/user/ads',
				headers: authService.getAuthHeaders(),
				data: adData
			};
			return $http(request).success(success).error(error)
		}

		function getUserAds(params,success,error){
			var request = {
				method: 'GET',
				url: baseServiceUrl + '/user/ads',
				headers: authService.getAuthHeaders(),
				params: params
			};
			$http(request).success(success).error(error);
		}

		function deactivateAd(adId,success,error){
			var request = {
				method: 'PUT',
				url: baseServiceUrl + '/user/ads/deactivate/'+adId,
				headers: authService.getAuthHeaders(),
				params: {}
			};
			return $http(request).success(success).error(error)
		}

		function publishAgainAd(adId,success,error){
			var request = {
				method: 'PUT',
				url: baseServiceUrl + '/user/ads/publishagain/'+adId,
				headers: authService.getAuthHeaders(),
				params: {}
			};
			return $http(request).success(success).error(error)
		}

		function getUserAdById(adId,success,error){
			var request = {
				method: 'GET',
				url: baseServiceUrl + '/user/ads/'+adId,
				headers: authService.getAuthHeaders(),
				params: {}
			};
			$http(request).success(success).error(error);
		}

		function editUserAd(adData,success,error){
			var request = {
				method: 'PUT',
				url: baseServiceUrl + '/user/ads/'+adData.id,
				headers: authService.getAuthHeaders(),
				data: adData
			};
			return $http(request).success(success).error(error)
		}

		function delUserAd(adId,success,error){
			var request = {
				method: 'DELETE',
				url: baseServiceUrl + '/user/ads/'+adId,
				headers: authService.getAuthHeaders(),
				data: {}
			};
			return $http(request).success(success).error(error)
		}

		function getUserInfo(success,error){
			var request = {
				method: 'GET',
				url: baseServiceUrl + '/user/profile/',
				headers: authService.getAuthHeaders(),
				params: {}
			};
			$http(request).success(success).error(error);
		}

		function updateUserInfo(userInfoObj,success,error){
			var request = {
				method: 'PUT',
				url: baseServiceUrl + '/user/profile',
				headers: authService.getAuthHeaders(),
				data: userInfoObj
			};
			return $http(request).success(success).error(error)
		}

		function updateUserPass(userInfoObj,success,error){
			var request = {
				method: 'PUT',
				url: baseServiceUrl + '/user/changePassword',
				headers: authService.getAuthHeaders(),
				data: userInfoObj
			};
			return $http(request).success(success).error(error)
		}

		return {
			createNewAd: createNewAd,
			getUserAds:getUserAds,
			deactivateAd:deactivateAd,
			publishAgainAd:publishAgainAd,
			getUserAdById:getUserAdById,
			editUserAd:editUserAd,
			delUserAd:delUserAd,
			getUserInfo:getUserInfo,
			updateUserInfo:updateUserInfo,
			updateUserPass:updateUserPass
		}
	}
]);

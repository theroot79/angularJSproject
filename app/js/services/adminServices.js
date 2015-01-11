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

		function delAdminAd(adId,success,error){
			var request = {
				method: 'DELETE',
				url: baseServiceUrl + '/admin/ads/'+adId,
				headers: authService.getAuthHeaders(),
				data: {}
			};
			return $http(request).success(success).error(error)
		}

		function approveAd(adId,success,error){
			var request = {
				method: 'PUT',
				url: baseServiceUrl + '/admin/ads/approve/'+adId,
				headers: authService.getAuthHeaders(),
				params: {}
			};
			return $http(request).success(success).error(error)
		}

		function rejectAd(adId,success,error){
			var request = {
				method: 'PUT',
				url: baseServiceUrl + '/admin/ads/reject/'+adId,
				headers: authService.getAuthHeaders(),
				params: {}
			};
			return $http(request).success(success).error(error)
		}

		function getAdminUsers(params,success,error){
			var request = {
				method: 'GET',
				url: baseServiceUrl + '/admin/users',
				headers: authService.getAuthHeaders(),
				params: params
			};
			$http(request).success(success).error(error);
		}

		function getUserInfo(uid,success,error){
			var request = {
				method: 'GET',
				url: baseServiceUrl + '/admin/users/'+uid,
				headers: authService.getAuthHeaders(),
				params: {}
			};
			$http(request).success(success).error(error);
		}

		function updateUserInfo(userInfoObj,success,error){
			var request = {
				method: 'PUT',
				url: baseServiceUrl + '/admin/user/'+userInfoObj.userName,
				headers: authService.getAuthHeaders(),
				data: userInfoObj
			};
			return $http(request).success(success).error(error)
		}

		function updateUserPass(userInfoObj,success,error){
			var request = {
				method: 'PUT',
				url: baseServiceUrl + '/admin/SetPassword',
				headers: authService.getAuthHeaders(),
				data: userInfoObj
			};
			return $http(request).success(success).error(error)
		}

		function deleteUser(user,success,error){
			var request = {
				method: 'DELETE',
				url: baseServiceUrl + '/admin/user/'+user.userName,
				headers: authService.getAuthHeaders(),
				data: {}
			};
			return $http(request).success(success).error(error)
		}

		function getAdminCategories(params,success,error){
			var request = {
				method: 'GET',
				url: baseServiceUrl + '/admin/categories',
				headers: authService.getAuthHeaders(),
				params: params
			};
			$http(request).success(success).error(error);
		}

		return {
			getAdminAds:getAdminAds,
			getAdminAdById:getAdminAdById,
			editAdminAd:editAdminAd,
			delAdminAd:delAdminAd,
			approveAd:approveAd,
			rejectAd:rejectAd,
			getAdminUsers:getAdminUsers,
			getUserInfo:getUserInfo,
			updateUserInfo:updateUserInfo,
			updateUserPass:updateUserPass,
			deleteUser:deleteUser,
			getAdminCategories:getAdminCategories
		}
	}
]);

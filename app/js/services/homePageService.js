'use strict';

appAngularJS.factory('homepageService',function($http,$log){
	return {
		getAllAds: function (success){
			$http({method:'GET',url:baseServiceUrl+'api/Ads?StartPage=0&PageSize=4'})
				.success(function(data,status,headers,config){
					success(data);
				})
				.error(function(data,status,headers,config){
					$log.warn(data);
				});
		}
	}
});
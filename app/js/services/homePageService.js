'use strict';

appAngularJS.factory('homepageService',function($http,baseServiceUrl,$log){
	return {
		getAllAds: function (success){
			$http({method:'GET',url:baseServiceUrl+'/api/Ads?StartPage=1&PageSize=4'})
				.success(function(data,status,headers,config){
					$log.info(data);
					success(data);
				})
				.error(function(data,status,headers,config){
					$log.warn(data);
				});
		}
	}
});
'use strict';

appAngularJS.factory('adsService',['$resource','baseServiceUrl',
	function($resource,baseServiceUrl){
		var resource = $resource(baseServiceUrl+ '/ads:adId',{adId:'@id'},{
			update: { method: 'PUT' }
		});

		function getAllPublicAds(params){
			return resource.get(params);
		}

		function editSomeAd(adId,ad){
			return resource.update({id:adId},ad);
		}

		function getSomeAdById(adId){
			return resource.get({id:adId});
		}

		function addSomeAd(ad){
			return resource.save(ad);
		}

		function removeSomeAd(adID){
			return resource.remove({id:adId});
		}

		return {
			getPublicAds: getAllPublicAds,
			editAd:editSomeAd,
			getAdById:getSomeAdById,
			addAd:addSomeAd,
			removeAd:removeSomeAd
		};
	}
]);

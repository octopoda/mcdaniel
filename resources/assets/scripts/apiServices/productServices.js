(function() {
    'use strict';

    angular
        .module('mcdaniel.api')
        .factory('productService', productService);

     productService.$inject = ['$http', 'common', 'errors'];

    /* @ngInject */
    function productService($http, common,  errors) {
        var apiUrl = common.apiUrl + '/download/product/';
        
        var service = {
            productUrl : productUrl 
        };
        return service;

        ////////////////

        /**
         * Get url for Download StoreController@downloadProducts;
         * @param  {int} id 
         * @return {object}    
         */
        function productUrl (id) {
        	return $http.get(apiUrl + id)	
        		.then(urlComplete)
        		.catch(function (message) {
        			errors.catcher('Cannot Download Product right now.  Please contact us')(message);
        		});

        		function urlComplete(data, status, headers, config) {
        			return data;
        		}
        }
    }
})();
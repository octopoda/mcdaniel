/*
|--------------------------------------------------------------------------
| Complete Portfolios Service for Portfolio API
|--------------------------------------------------------------------------
|
| Query Options: 
| 
*/

(function() {
    'use strict';

    angular
        .module('assetbuilder.api')
        .factory('completeService', completeService);

    completeService.$inject = ['$http', '$location', 'flash', 'common', 'errors'];

    /* @ngInject */
    function completeService($http, $location, flash, common, errors) {
        var apiUrl = common.apiUrl;

        var service = {
            getGroupComplete: getGroupComplete
        };
        return service;

        ////////////////

        /**
         * Get the complete information for a group ticker
         * @param  {string} groupTicker 
         * @return {object}             
         */
        function getGroupComplete(groupTicker) {
        	return $http.get(apiUrl + 'GroupComplete/' + groupTicker)
        		.then(groupComplete)
        		.catch(function (message) {
        			errors.catcher('Sorry, we are not able to get the complete portfolio information at this time.')(message);
        		});

        		function groupComplete(data, status, header, config) {
        			return data.data;
        		}
        }
    }
})();
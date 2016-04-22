/*
|--------------------------------------------------------------------------
| Api Helpers 
|--------------------------------------------------------------------------
|
*/

(function() {
    'use strict';

    angular
        .module('assetbuilder.api')
        .factory('helperService', helperService);

    helperService.$inject = ['$http', 'common', 'flash', 'errors'];

    /* @ngInject */
    function helperService($http, common, flash, errors) {
        var apiUrl = common.apiUrl;

        var service = {
            getStates: getStates
        };
     
        return service;

        ////////////////

        /**
         * Get a list of the states and thier abbreviations
         * @setup {StateCode: TX, StateName: Texas }
         * @return {object} [description]
         */
        function getStates() {
		  return $http.get(apiUrl + 'States')
			.then(statesComplete)
			.catch( function (message) {
				errors.catcher('Sorry we cannot retrive all of our form.  Please call us to open an account')(message);
			});

			function statesComplete(data, status, headers, config) {
				return data.data;
			}
            
        }
    }
})();
/*
|--------------------------------------------------------------------------
| Randon Returns Data Service
|--------------------------------------------------------------------------
|
| Get the random returns json for the application
| the is built for the newsletter each year. 
| 
|
*/

(function() {
    'use strict';

    angular
        .module('assetbuilder.api')
        .factory('randomReturnsService', randomReturnsService);

    randomReturnsService.$inject = ['$http', 'errors'];

    /* @ngInject */
    function randomReturnsService($http, errors) {
		var jsonUrl = '/json/random-returns.json'

		var service = {
            getRandomReturns : getRandomReturns 
        };
        
        return service;

        ////////////////


        /**
         * Get the returns
         * @return {object} 
         */
        function getRandomReturns () {
        	return $http.get(jsonUrl)
        		.then(returnsComplete)
        		.catch(function (message) {
        			errors.catcher('Sorry we were not able to get the random returns information.')(message);
        		});

        		function returnsComplete(data, status, headers,config) {
        		    console.dir(data);
        		    return data.data;
        		}
        }
    }
})();
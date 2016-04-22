(function() {
    'use strict';

    angular
        .module('assetbuilder.api')
        .factory('openAccountService', openAccountService);

    openAccountService.$inject = ['$http', 'errors', 'common'];

    /* @ngInject */
    function openAccountService($http, errors, common) {
        var apiUrl = common.apiUrl + 'openAccount';
        var prospectUrl = common.apiUrl + 'prospectInfo';

        var service = {
            sendOpenAccountRequest: sendOpenAccountRequest,
            sendProspectRequest :sendProspectRequest
        };

        return service;

        ////////////////

        /**
         * Send Open Account Object to API
         * @param  {object} data 
         * @return {object}
         */
        function sendOpenAccountRequest(data) {
        	return $http.post(apiUrl, data)
        		.then(openAccountComplete)
        		.catch(function (message) {
        			errors.catcher("Sorry we are unable to process the account information at this time.  Please contact us at 972.535.4040 to open an account.")(message);
        		});

        		//Only Return Status.
        		function openAccountComplete(data, status, headers, config) {
        			return data;
        		}
        }


        /**
         * Send Prospect Information to Open Account Controller
         * @pararm {object} data
         * @return {object}
         */
        function sendProspectRequest(data) {
            $http.post(apiUrl, data)
                .then(prospectComplete)
                .catch(function (message) {
                    errors.catcher("Sorry we are unable to save your information at this time.  Please contact us at 972.535.4040 to get on our list.")(message);
                });

            function prospectComplete(data, status, headers, config) {
                return data;
            }
        }
    }
})();
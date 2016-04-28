(function() {
    'use strict';

    angular
        .module('mcdaniel.api')
        .factory('mailChimpService', mailChimpService);

    mailChimpService.$inject = ['$http', 'common', 'flash', 'errors'];

    /* @ngInject */
    function mailChimpService($http, common, flash, errors) {
        var apiUrl = common.apiUrl + 'MailChimp';

        var service = {
            sendToMailChimp: sendToMailChimp
        };
        
        return service;

        ////////////////

        
        /**
         * Send email address to mailchimp
         * @param  {string} email 
         * @return {string}       
         */
        function sendToMailChimp(email) {
        	return $http.get(apiUrl + '/' +email)
        		.then(mailChimpComplete)
        		.catch(function (message) {
        			errors.catcher('Sorry, we cannot connect to MailChimp')(message);
        		});

        		function mailChimpComplete(data, status, headers, config) {
        			return data.data;
        		}
        }
    }
})();
(function() {
    'use strict';

    angular
        .module('mcdaniel.api')
        .factory('mailChimpService', mailChimpService);

    mailChimpService.$inject = ['$http', 'common', 'flash', 'errors'];

    /* @ngInject */
    function mailChimpService($http, common, flash, errors) {
        var apiUrl = common.apiUrl + '/mailchimp/subscribe';

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
        function sendToMailChimp(data) {
        	return $http.post(apiUrl, data)
        		.then(mailChimpComplete)
        		.catch(function (message) {
        			errors.catcher('Sorry, we cannot connect to MailChimp')(message);
        		});

        		function mailChimpComplete(data, status, headers, config) {
        			console.dir(data);
                    return data.data;
        		}
        }
    }
})();
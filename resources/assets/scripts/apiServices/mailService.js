(function() {
    'use strict';

    angular
        .module('mcdaniel.api')
        .factory('mailService', mailService);

    mailService.$inject = ['$http', 'common', 'errors'];

    /* @ngInject */
    function mailService($http, common,  errors) {
        var apiUrl = common.apiUrl + "/contact/formSubmit";
        
        var service = {
            sendToMailer: sendToMailer,
            sendAlert: sendAlert
        };
        
        return service;

        ////////////////

        /**
         * Post Request to Mail API
         * @param  {object} data Mailing Object
         * @return {statusCode }
         */
        function sendToMailer(data) {
        	return $http.post(apiUrl, data)
                .then(mailSent)
                .catch(function (message) {
                    errors.catcher('Mail cannot be sent at this time.')(message);
                });

                function mailSent(data, status, headers, config) {
                    return data;
                }
        }

        /**
         * 
         * @param {object} data Alert Object
         * @return {statusCode}
         */
        function sendAlert(data) {
            return $http.post(apiUrl, data)
                .then(alertSent)
                .catch(function (message) {
                    errors.catcher('Our Alert Service is down.  Please contact us by phone at 314.413.1996')(message);
                });

            //Mark hides the status inside the data.
            function alertSent(data, status, headers, config) {
                return data;
            }
        }


        
       
     }
})();
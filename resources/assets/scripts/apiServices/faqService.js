/*
|--------------------------------------------------------------------------
| Service for FAQ questions
|--------------------------------------------------------------------------
|
| Service to grab and return FAQ questions
| @note in Dev mode and using fake questions
| 
|
*/
(function() {
    'use strict';

    angular
        .module('mcdaniel.api')
        .factory('faqService', faqService);

    faqService.$inject = ['$http', 'common',  'errors']

    /* @ngInject */
    function faqService($http, common,  errors) {
        var apiUrl = common.apiUrl + '/faqs';

        var service = {
            getFaqs: getFaqs,
            getStaredFaqs : getStaredFaqs,
            searchFaqs : searchFaqs 
        };
        
        return service;

        ////////////////

        /**
         * Get the FAQs
         * @return {object} 
         */
        function getFaqs() {
        	return $http.get(apiUrl)
        		.then(faqComplete)
        		.catch(function (message) {
        			errors.catcher('Sorry but we cannot connect to the FAQ service')(message);
        		});

        		function faqComplete(data, status, headers, config) {
        			return data.data;
        		}
        }


        /**
         * Get the stared FAQS
         * @return {object} 
         */
        function getStaredFaqs() {
            return $http.get(apiUrl + '/stared')
                .then(faqComplete)
                .catch(function (message) {
                    errors.catcher('Sorry but we cannot connect to the FAQ servics')(message);
                });

                function faqComplete(data, status, headers, config) {
                    return data.data;
                }
        }

        
        /**
         * Seach the FAQS
         * @return {object} 
         */
        function searchFaqs(data) {
            return $http.post(apiUrl + '/search', data)
                .then(faqComplete)
                .catch(function (message) {
                    errors.catcher('Sorry but we cannot connect to the FAQ service')(message);
                });

                function faqComplete(data, status, headers, config) {
                    return data.data;
                } 
        }
    }
})();
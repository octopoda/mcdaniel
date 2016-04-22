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
        .module('assetbuilder.api')
        .factory('faqService', faqService);

    faqService.$inject = ['$http', 'common',  'errors']

    /* @ngInject */
    function faqService($http, common,  errors) {
        var apiUrl = common.apiUrl + 'faq';

        var service = {
            getFaqs: getFaqs
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
    }
})();
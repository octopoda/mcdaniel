/*
|--------------------------------------------------------------------------
| FAQ controller.  
|--------------------------------------------------------------------------
|
| Grabs FAQs from API and presents them on the page. 
|
*/

(function() {
    'use strict';

    angular
        .module('assetbuilder.faq')
        .controller('FaqController', FaqController);

    /* @ngInject */
    function FaqController(faqService) {
        var vm = this;
        vm.title = 'FaqController';
        vm.Faqs =[];

        activate();

        ////////////////

        /**
         * Activate the Controller and wait for Promise
         * @return {object} 
         */
        function activate() {
        	return getFaqData().then(function () {
               
        	});
        }


        /**
         * Get FAQ Data 
         * @return {oibject} 
         */
        function getFaqData () {
        	return faqService.getFaqs().then(function (data) {
        		vm.Faqs = data;
                return vm.Faqs;
        	});
        }



    }
})();
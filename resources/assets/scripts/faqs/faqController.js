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
        .module('mcdaniel.faq')
        .controller('FaqController', FaqController);

    FaqController.$inject = ['$rootScope', 'faqService'];

    /* @ngInject */
    function FaqController($rootScope, faqService) {
        var vm = this;
        vm.title = 'FaqController';
        vm.Faqs =[];
        vm.loading = false;
        vm.formData = {
            query: null
        }

        activate();

        ////////////////

        /**
         * Activate the Controller and wait for Promise
         * @return {object} 
         */
        function activate() {
        	vm.loading = true;
            return getFaqData().then(function () {
               vm.loading = false;
        	});
        }


        /**
         * Get FAQ Data 
         * @return {object} 
         */
        function getFaqData () {
        	return faqService.getStaredFaqs().then(function (data) {
        		vm.Faqs = data.faqs;
                vm.loading = false;
                return vm.Faqs;
        	});
        }



        /**
         * Seach all the Faqs
         * @return {object}
         */
        function searchFaqs() {
            return faqService.searchFaqs(vm.formData).then(function (data) {
                vm.Faqs = data.faqs;
                vm.loading = false;
                return vm.Faqs;
            });
        }



        /**
         * Wait for FAQ search event and then load new search
         * @param  {event}  event       
         * @param  {string} query
         * @return {null}
         */
        $rootScope.$on("faqSearch", function handleSearchEvent( event, query ) {
            vm.loading = true;
            
            if (query === '') {
                getFaqData();
                return;
            }

            vm.formData.query = query;
            searchFaqs();
        });





    }
})();
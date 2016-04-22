(function() {
    'use strict';

    angular
        .module('assetbuilder.admin')
        .controller('AdminFAQListController', AdminFAQListController);

    /* @ngInject */
    function AdminFAQListController(faqService) {
        var vm = this;
        vm.title = 'AdminFAQListController';
        
        vm.FaqList;

        activate();

        ////////////////

        function activate() {
        	return getFaqs().then(function () {
        		
        	});
        }

        /** GEt t */
        function getFaqs() {
        	return faqService.getFaqs().then(function (data) {
        		vm.FaqList = data;
        		return vm.FaqList;
        	});
        }


        /*
        |--------------------------------------------------------------------------
        | Scope Methods
        |--------------------------------------------------------------------------
        */




    }
})();
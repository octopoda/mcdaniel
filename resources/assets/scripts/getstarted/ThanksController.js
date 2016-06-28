(function() {
    'use strict';

    angular
        .module('mcdaniel.getstarted')
        .controller('ThanksController', ThanksController);

    ThanksController.$inject = ['localStorageService'];

    /* @ngInject */
    function ThanksController(localStorageService) {
        var vm = this;
        vm.title = 'ThanksController';
        vm.service = null;

        activate();

        ////////////////

        function activate() {
            console.dir(localStorageService.get('submittedService'));
        	 
             switch (localStorageService.get('submittedService')) {
                case 'lunch-and-learn' :
                    vm.service = 'corporate';
                    break;
                case 'teach-and-taste' : 
                    vm.service = 'corporate';
                    break;
                case 'webinars' : 
                    vm.service = 'corporate';
                    break;
                case 'weight-loss-sustain' : 
                    vm.service = "weight";
                    break;
                case 'weight-loss-sustain-premium' : 
                    vm.service = "weight";
                    break;
                case 'weight-loss-sustain-online' : 
                    vm.service = "weight";
                    break;
                case 'weight-loss' :
                    vm.service = "weight";
                    break;
                case 'sports-nutrition' :
                    vm.service = "sports";
                    break;
                case 'maternal-nutrition' :
                    vm.service = "maternal";
                    break;
                case 'rmr-testing' :
                    vm.service = "rmr"
                case 'default' :
                	vm.service = "default"
            }

            console.log(vm.service);
        }
    }
})();
(function() {
    'use strict';

    angular
        .module('mcdaniel.getstarted')
        .controller('GetStartedController', GetStartedController);

    GetStartedController.$inject = ['$rootScope', 'localStorageService'];

    /* @ngInject */
    function GetStartedController($rootScope, localStorageService) {
        var vm = this;
        vm.title = 'GetStartedController';
        vm.price = null;
        vm.service = localStorageService.get('interestedService');

        activate();

        ////////////////
        
        

        function activate() {
            console.dir(vm.service);
            switch (vm.service) {
                case 'lunch-and-learn' :
                    vm.price = '$300.00';
                    break;
                case 'teach-and-taste' : 
                    vm.price = '$400.00';
                    break;
                case 'weight-loss-sustain' : 
                    vm.price = "$150.00";
                    break;
                case 'weight-loss-sustain-premium' : 
                    vm.price = "$450.00";
                    break;
                case 'sports-nutrition' :
                    vm.price = "$180.00";
                    break;
                case 'maternal-nutrition' :
                    vm.price = "$150.00";
                    break;
                case 'rmr-testing' :
                    vm.price = "$75.00"
            }
        }

        $rootScope.$on('updatePrice', function handlePrice(event, price) {
            if (price !== "null") {
                vm.price = "$" + price  + '.00';    
            }
            
        });
    }
})();
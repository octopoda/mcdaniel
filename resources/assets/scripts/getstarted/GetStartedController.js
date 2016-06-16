(function() {
    'use strict';

    angular
        .module('mcdaniel.getstarted')
        .controller('GetStartedController', GetStartedController);

    GetStartedController.$inject = ['$rootScope', 'localStorageService', '$location'];

    /* @ngInject */
    function GetStartedController($rootScope, localStorageService, $location) {
        var vm = this;
        vm.title = 'GetStartedController';
        vm.price = null;
        vm.service = localStorageService.get('interestedService');
        vm.name = null;

        activate();

        ////////////////
        
        
        
        


        function activate() {
            clearServiceIfNeeded();

            
            switch (vm.service) {
                case 'lunch-and-learn' :
                    vm.price = '$300.00';
                    vm.name = "Lunch and Learn Session";
                    break;
                case 'teach-and-taste' : 
                    vm.price = '$400.00';
                    vm.name = "Teach and Taste Session";
                    break;
                case 'webinars' : 
                    vm.price = '$300.00';
                    vm.name = "Company Webinar";
                    break;
                case 'weight-loss-sustain' : 
                    vm.price = "$150.00";
                    vm.name = "Individual Consultation";
                    break;
                case 'weight-loss-sustain-premium' : 
                    vm.price = "$450.00";
                    vm.name = "Premium Sustain Weight Loss Consultation";
                    break;
                case 'weight-loss-sustain-online' : 
                    vm.price = "$400.00";
                    vm.name = "Sustain Weight Loss Online";
                    break;
                case 'sports-nutrition' :
                    vm.name = "Individual Consultation";
                    vm.price = "$180.00";
                    break;
                case 'maternal-nutrition' :
                    vm.name = "Individual Consultation";
                    vm.price = "$150.00";
                    break;
                case 'rmr-testing' :
                    vm.name = "Metabolic Test";
                    vm.price = "$75.00"
            }
        }

        function clearServiceIfNeeded() {
            var path = $location.absUrl().split('/')[4]
            
            //Multiples
            if (path === 'weight-loss' ) {
                if (vm.service != 'weight-loss-sustain' && vm.service != 'weight-loss-sustain-premium' && vm.service != 'weight-loss-sustain-online')  {
                    vm.service = "weight-loss-sustain";
                }

            } 

            if (path === 'corporate-wellness' ) {
                if (vm.service != 'lunch-and-learn' && vm.service != 'taste-and-teach' && vm.service != 'webinars')  {
                    vm.service = null
                }
            } 

            //Singles
            if (path === 'maternal-nutrition' && vm.service != 'maternal-nutrition')  {
              vm.service = "maternal-nutrition";  
            } 

            if (path === 'sports-nutrition' && vm.service != 'sports-nutrition')  {
              vm.service = "sports-nutrition";  
            }     

            if (path === 'rmr-testing' && vm.service != 'rmr-testing')  {
              vm.service = "rmr-testing";  
            } 

        }

        $rootScope.$on('updatePrice', function handlePrice(event, price) {
            if (price !== "null") {
                vm.price = "$" + price  + '.00';    
            }
            
        });
    }
})();
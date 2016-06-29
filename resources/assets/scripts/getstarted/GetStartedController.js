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

            console.dir(vm.service);
            
            switch (vm.service) {
                case 'lunch-and-learn' :
                    vm.price = '$300.00';
                    vm.name = "Lunch and Learn Session";
                    break;
                case "teach-and-taste" : 
                    vm.price = '$400.00';
                    vm.name = "Teach and Taste Session";
                    break;
                case 'webinars' : 
                    vm.price = '$300.00';
                    vm.name = "Company Webinar";
                    break;
                case 'weight-loss-consult' : 
                    vm.price = "$150.00";
                    vm.name = "Weight Loss <br> Individual Consultation";
                    break;
                case 'weight-loss-premium' : 
                    vm.price = "$450.00";
                    vm.name = "Weight Loss<br> Packages";
                    break;
                case 'weight-loss-sustain-online' : 
                    vm.price = "$400.00";
                    vm.name = "Sustain <br>Weight Loss Online";
                    break;
                case 'sports-nutrition' :
                    vm.name = "Sports Nutrition <br> Individual Consultation";
                    vm.price = "$180.00";
                    break;
                case 'maternal-nutrition' :
                    vm.name = "Maternal Nutrition <br> Individual Consultation";
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
                if (vm.service != 'weight-loss-consult' && vm.service != 'weight-loss-premium' && vm.service != 'weight-loss-sustain-online')  {
                    vm.service = "weight-loss-consult";
                }

            } 

            if (path === 'corporate-wellness' ) {
                if (vm.service != 'lunch-and-learn' && vm.service != 'teach-and-taste' && vm.service != 'webinars')  {
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

        $rootScope.$on('updatePrice', function handlePrice(event, data) {
            if (data !== "null") {
                vm.price = "$" + data.price  + '.00';    
                vm.name = data.name;
            }
            
        });
    }
})();
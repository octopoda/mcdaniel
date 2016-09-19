(function() {
    'use strict';

    angular
        .module('mcdaniel.getstarted')
        .controller('GetStartedController', GetStartedController);

    GetStartedController.$inject = ['$rootScope', 'localStorageService', 'servicesService', 'common'];

    /* @ngInject */
    function GetStartedController($rootScope, localStorageService, servicesService, common) {
        var vm = this;
        vm.title = 'GetStartedController';
        vm.price = null;
        vm.service = localStorageService.get('interestedService');
        vm.AllServices = null;
        vm.name = null;

        activate();

        ////////////////
        
        
        /**
         * Activate the Service
         * @return 
         */
        function activate() {
            console.log('activate', vm.service)

            if (vm.service == null) {
                vm.service = {
                    category: null,
                    code: null
                };
            }

            vm.service = servicesService.clearServiceFromURL(vm.service);

            
            if (vm.service.category == null) {
                getAllServices();
            } else if (vm.service.code === null) {
                //Get the Service for Categories
                getServices();
            } else {
                //Get the Indiviudal Service
                getService();    
            }
        }

        function getAllServices() {
            servicesService.getServices().then(function (data) {
                for (var key in data.services) {
                    if (!data.services.hasOwnProperty(key))  continue;
                    data.services[key].forEach(function (service) {
                        if (service.code !== null) {
                            service.category = key;
                            vm.allServices.push(service);    
                        }
                    });
                }

                vm.service = vm.AllServices[0].code;
            });
        }

        /**
         * Get the First from and Indivdual   Service
         * @return {object} 
         */
        function getServices() {
            servicesService.getServiceCategory(vm.service.category).then(function (data) {
                vm.service = data[0];
                populateHTML(vm.service);
            });
        }

        /**
         * Get Indivdual Servic
         * @return {object} 
         */
        function getService() {
            servicesService.getService(vm.service.category, vm.service.code).then(function (data) {
                vm.service = data[0];
                populateHTML(vm.service);
            });
        }


        function populateHTML(service) {
            vm.name = service.html;
            vm.price  = (service.price !== null) ? '$' + common.addZeroes(service.price) : null;
            vm.code = service.code;
            vm.description = service.description;
        }

        /**
         * Filter the Service that are returned. 
         * @param  {[type]} object [description]
         * @return {[type]}        [description]
         */
        function filterCode(object) {
            
        }

        function clearServiceIfNeeded() {
            
            var corporateArray = ['corporate', 'sustain'];
            var category = null;
            
            /** Reset Weight */
            

            
        }


        /**
         * Send Service Object to 
         * @param  {[type]} serviceObject [description]
         * @return {[type]}               [description]
         */
        function updateService(serviceObject) {
            $rootscope.$emit('updateService', serviceObject);
        }

        /*
        |--------------------------------------------------------------------------
        | Scope Functions
        |--------------------------------------------------------------------------
        |
        | Description 1
        |  Description 2
        | 
        |
        */

        $rootScope.$on('updatePrice', function handlePrice(event, data) {
            if (data !== "null") {
               vm.service = data;
               getService(); 
            }
            
        });


        
    }
})();
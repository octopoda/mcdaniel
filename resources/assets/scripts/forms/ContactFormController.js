/*
|--------------------------------------------------------------------------
| Contact Form Controller
|--------------------------------------------------------------------------
|
| This controller should be used for all contacts forms on the AssetBuilder 6.0 site
| By adding more variables to the formData object it should allow anything
| to be sent to the mailService
| 
|
*/
(function() {
    'use strict';

    angular
        .module('mcdaniel.forms')
        .controller('ContactFormController', ContactFormController);

    ContactFormController.$inject = ['$scope', '$rootScope', 'mailService', 'flash', 'common', 'localStorageService', 'servicesService'];

    /* @ngInject */
    function ContactFormController($scope, $rootScope, mailService, flash, common, localStorageService, servicesService) {
        var vm = this;
        vm.title = 'ContactFormController';
        
        /** @type {Vars} Scope Vars */
        vm.loading = false;
        vm.success = false;
        vm.service = localStorageService.get('interestedService');
        vm.categoryServices = null;
        vm.allServices = [];
        vm.dropdownType = null;

        /** @type {Methods} Scope Methods */
        vm.submitForm = submitForm;
        vm.updatePrice = updatePrice;
        vm.getStarted = false;

        /** @type {String} Success Message */
        vm.successMessage = "Thanks for Contacting Us. Your email is important to us and we will get back to you in 1 to 2 business days.";



        /**
         * Data for All contact Forms.  Just add to here if not in form already. 
         * @type {Object}
         */
        vm.formData = {
        	customerName: null,
        	email: null, 
        	phone: null,
        	bestContactTime: null,
        	subject: null,
        	contactMessage: null,
            formType: null,
            question: null,
            interestedService: null,
            lastArticleRead: null,
            service: null
        }

        /**
         * If Testing Fill out form
         * @param  {boolean} common.isTesting 
         */
        if (common.isTesting) {
            fillForm();
        }

        activate();

        ////////////////

        /*
        |--------------------------------------------------------------------------
        | Startup Methods
        |--------------------------------------------------------------------------
        |
        */

        /**
         * Active Controller if needed
         * @return {[type]} [description]
         */
        function activate() {
            

            if(vm.service === null) {
                vm.service = {
                    category: null,
                    code: null
                }
            }

            // console.log('from form', vm.service);

            vm.service = servicesService.clearServiceFromURL(vm.service);
            

            

            //Need a Dropdown of All Services
            if (vm.service.category === null) {
                getAllServices();
            
            //Not a specific services so need drop down on services per cateogry
            } else if (vm.service.category !== null && vm.service.code === null) {
                getServiceCategory(vm.service.category);
            
            //Came for a single service
            } else {
                vm.formData.interestedService = vm.service.code;
                vm.formData.category = vm.service.category;
            }
        }

        
        /**
         * Get all the Services and prepare for select box
         * @return {array} 
         */
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

                vm.formData.interestedService = vm.allServices[0].code;
                vm.dropdownType = 'all';
            });
        }

        /**
         * Get Services in service category and prepare for select box
         * @param  {string} category 
         * @return {array}          
         */
        function getServiceCategory(category) {
            servicesService.getServiceCategory(category).then(function (data) {
                vm.categoryServices = data;
                vm.formData.interestedService = data[0].code;
                vm.formData.category = vm.service.category;
                if (data.length === 1) return;
                vm.dropdownType = 'category'
            });
        }




        

        
        /**
         * Update the Price based on Selection of Service
         * @return {object} 
         */
        function updatePrice() {
            var code = jq("#interestedService").find(':selected').val();
            var category = jq("#interestedService").find(':selected').attr('data-item-category');

            vm.formData.category = category;

            var data = {
                category : category,
                code: code
            };

            $rootScope.$emit('updatePrice', data);
        }

        $rootScope.$on('updateService', function (event, data) {
            if (data !== "null") {
               vm.service = data;
               activate(); 
            }
        })

        /*
        |--------------------------------------------------------------------------
        | Submit Methods
        |--------------------------------------------------------------------------
        |
        */



        /**
         * Submit the Mail Form
         * @param PortfolioNAme  name of last viewed portfolio.  Set null for most forms. 
         * @return {[type]} [description]
         */
        function submitForm() {
            
            vm.loading = 'loading'

            vm.formData.subject = setupEmailSubject();
            vm.formData.lastArticleRead = localStorageService.get('lastArticleRead');
            

            servicesService.getService(vm.formData.category, vm.formData.interestedService).then(function (data) {
                vm.formData.service = data[0];   
                
                mailService.sendToMailer(vm.formData).then(function (data) {
                        mailSent(data);
                });

                function mailSent(data) {
                    if (data.status == 200) {
                        vm.formData.service.category = vm.formData.category;
                        localStorageService.set('submittedService', vm.formData.service);

                        clearForm();
                        vm.success = true;

                        if (vm.getStarted) {
                            // console.dir(data);
                            window.location = '/get-started/thanks'
                        }
                    }
                }
            });
        }


        /**
         * Change the subject out based on the formType
         * @return {string} subject
         */
        function setupEmailSubject() {
            switch (vm.formData.formType) {
                case "get-started-page":
                    vm.getStarted = true;
                    return 'The Get Started Page was submitted';
                    break;
                case "faqForm":
                    return 'A Question has been submitted';
                    break;
                case "contactForm":
                    return 'A customer has submitted a Contact Request';
                    break;
                default: 
                    return 'A form was submitted on the site';
                    break;
            }
        }
    


        /**
         * Clear the Form for next submission
         * @return {DOM} 
         */
        function clearForm() {
            vm.loading = false


              vm.formData =  {
                customerName: null,
                email: null, 
                phone: null,
                bestContactTime: null,
                subject: null,
                contactMessage: null,
                formType: null,
                question: null,
                interestedService: null,
                lastArticleRead: null,
                submittedService: null,
            }

            $scope.contactForm.$setPristine();
        }



        /*
        |--------------------------------------------------------------------------
        | Testing Methods
        |--------------------------------------------------------------------------
        |
        */

        function fillForm() {
           vm.formData = { 
                customerName: 'Bob Dole',
                email: 'zack@2721west.com', 
                phone: '972.535.4040',
                bestContactTime: {
                    'afternoon' : true,
                    'morning' : true
                    // 'evening' : true
                },
                subject: "Big Gulp Huh?",
                contactMessage: 'alright\' ... we\'ll see you later',
                formType: null,
                question: 'Big Gulps Huh?',
            }
        }


    }
})();
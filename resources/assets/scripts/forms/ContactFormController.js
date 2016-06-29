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
        vm.service = 'all'

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
            lastArticleRead: null
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
            vm.formData.interestedService = localStorageService.get('interestedService');
            vm.service = localStorageService.get('interestedService');

            if (vm.formData.interestedService == null) vm.service = 'all';
            if (vm.formData.interestedService == 'weight-loss') vm.formData.interestedService = 'weight-loss-consult';
            if (vm.formData.interestedService == null) vm.formData.interestedService = 'weight-loss-consult';
        }

        
        function updatePrice() {
            var price = jq("#interestedService").find(':selected').attr('data-item-price');
            var name = jq("#interestedService").find(':selected').attr('data-item-name');
            var data = {
                price: price,
                name: name
            };

            $rootScope.$emit('updatePrice', data);
        }

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
            vm.formData.interestedService = vm.formData.interestedService.replace("-", " ");
            vm.formData.lastArticleRead = localStorageService.get('lastArticleRead');
            
            
            
            mailService.sendToMailer(vm.formData)
                .then(function (data) {
                    mailSent(data);
                });

            function mailSent(data) {
                if (data.status == 200) {
                    localStorageService.set('submittedService', localStorageService.get('interestedService'));

                    //clearForm();
                    vm.success = true;

                    if (vm.getStarted) {
                        window.location = '/get-started/thanks'
                    }
                }
            }
        }


        /**
         * Change the subject out based on the formType
         * @return {string} subject
         */
        function setupEmailSubject() {
            switch (vm.formData.formType) {
                case "get-started-page":
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

            }
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
                email: 'bobd@2721west.com', 
                phone: '972.535.4040',
                bestContactTime: {
                    'afternoon' : true,
                    'morning' : true
                },
                subject: "Big Gulp Huh?",
                contactMessage: 'alright\' ... we\'ll see you later',
                formType: null,
                question: 'Big Gulps Huh?',
                interestedService: 'teach-and-taste'
            }
        }


    }
})();
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

    ContactFormController.$inject = ['$scope', 'mailService', 'flash', 'common'];

    /* @ngInject */
    function ContactFormController($scope, mailService, flash, common) {
        var vm = this;
        vm.title = 'ContactFormController';
        
        /** @type {Vars} Scope Vars */
        vm.loading = false;

        /** @type {Methods} Scope Methods */
        vm.submitForm = submitForm;

        vm.successMessage = "Thanks for Contacting Us. Your email is important to us and one of our team members will get back to you in 1 to 2 business days.";

        /**
         * Data for All contact Forms.  Just add to here if not in form already. 
         * @type {Object}
         */
        vm.formData = {
        	first: null,
            last: null,
        	email: null, 
        	phone: null,
        	bestContactTime: null,
        	subject: null,
        	message: null,
            formType: null,
            question: null,
            lastViewedPortfolio: null,
            alertMessage: null,
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
        function submitForm(portfolioName) {
            
            vm.loading = 'loading'

            vm.formData.subject = setupEmailSubject();
            vm.formData.lastViewedPortfolio = portfolioName;

            
            mailService.sendToMailer(vm.formData)
                .then(function (data) {
                    mailSent(data);
                });

            function mailSent(data) {
                console.dir(data);
                if (data.status == 200) {
                    flash.success(vm.successMessage);
                    clearForm();
                }
            }
        }


        /**
         * Change the subject out based on the formType
         * @return {string} subject
         */
        function setupEmailSubject() {
            switch (vm.formData.formType) {
                case "expatsForm":
                    return 'Expats Contact Form';
                    break;
                case "faqForm":
                    return 'A Question has been submitted';
                    break;
                case "portfolioForm":
                    return 'A customer has submitted a request from the Portfolio Page';
                    break;
                case "contactForm":
                    return 'A customer has submitted a Contact Request';
                    break;
                case "expatsPortfolioForm":
                    return 'An expat customer has submitted a request from the Portfolio Page';
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
                name: null,
                email: null, 
                phone: null,
                bestContactTime: null,
                subject: null,
                message: null,
                formType: null,
                question: null,
                alertMessage: null,
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
                name: 'Bob Dole',
                email: 'bobd@assetbuilder.com', 
                phone: '972.535.4040',
                bestContactTime: {
                    'afternoon' : true,
                    'morning' : true
                },
                subject: "Big Gulp Huh?",
                message: 'alright\' ... we\'ll see you later',
                formType: null,
                question: 'Big Gulps Huh?',
                alertMessage: null,
                lastViewedPortfolio: 'portfolio 10',
            }
        }


    }
})();
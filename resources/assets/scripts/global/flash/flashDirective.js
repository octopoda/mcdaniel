(function() {
    'use strict';

    angular
        .module('global.flash')
        .directive('abFlash', abFlash);

    abFlash.$inject = ['$rootScope', '$timeout', 'mailService', 'flash', 'errors'];

    /* @ngInject */
    function abFlash ($rootScope, $timeout, mailService, flash, errors) {
        // Usage:
        // <div ab-flash></div>
        var directive = {
            bindToController: true,
            controller: Controller,
            controllerAs: 'vd',
            link: link,
            templateUrl: '/ngViews/global/flash.html',
            restrict: 'A',
            scope: {
            }
        };
        
        return directive;

        function link(scope, element, attrs) {
					 var el = jq(element);
					 var vd = scope.vd;
					 	    vd.closeFlash = closeFlash;
					 	    vd.close = false;
					 	    vd.actionButton = false;
					 	    vd.event = false;


					 	    vd.actionSubmit = actionSubmit;
                

					 /**
					  * Display the Flash in an Error Format with Close
					  * @note add button in flash to alert technology - will be sent through mailService
					  * 
					  */		 
					 $rootScope.$on('flash.error', function handleErrorFlash( event, message) {
					 		vd.close = true;
					 		el.addClass('error').addClass('open');
					 		vd.heading = message;
					 		vd.actionButton = true;
					 		vd.actionEvent = errors.getReason().status;
					 		vd.actionText = 'Alert Us'; 
					 });

					 /**
					  * Display the Flash in an Success Format
					  */
					 $rootScope.$on('flash.success', function handleSuccessFlash( event, message) {
					 		el.addClass('success').addClass('open');
					 		vd.heading = message;
					 		$timeout(closeFlash, 3000);
					 });

					 /**
					  * Display the Flash in an Warning Format ready for Close
					  */
					 $rootScope.$on('flash.warning', function handleWarningFlash( event, message) {
					 		vd.close = true;
					 		el.addClass('warning').addClass('open');
					 		vd.heading = message;
					 		$timeout(closeFlash, 3000);
					 });

					 /**
					  * Display the Flash in an Info Format
					  */
					 $rootScope.$on('flash.info', function handleInfoFlash( event, message) {
					 		el.addClass('info').addClass('open');
					 		vd.heading = message;
					 		$timeout(closeFlash, 3000);
					 });

					 /**
					  * Close the Flash
					  * @return {DOM} 
					  */
					 function closeFlash() {
					 		el.removeClass('open');
					 }

                    /**
                     * When Button is clicked send Allert Mail
                     * 
                     */
					 function actionSubmit() {
					    
					     var AlertData = {
					       name: 'hack master',
					       email: 'zackd@assetbuilder.com',
					       phone: null,
					       bestContactTime: null,
					       question: null,
                           survey: null,
					       subject: 'The Alert Button was pressed',
					       message: 'User saw a error message.   The status code is ' +  vd.actionEvent + '. ' +  errors.getReason().insertedObject,
					       formType: 'alertMessage',
					       alertMessage: vd.heading,
					    }


					     return mailService.sendAlert(AlertData)
                            .then(function (data) {
                      
                                if (data.status === 200) {
                                    closeFlash();
                                    $timeout(function () {
                                        flash.success('Thanks for alerting us.  Our team will look into the problem shortly.');
                                    }, 300);
                                    
                                }
                               
                                vd.actionButton = false;
                            });

                            
                            
					 }
        }
    }

    /* @ngInject */
    function Controller () {

    }

})();
(function() {
    'use strict';

    angular
        .module('assetbuilder.forms')
        .directive('mailChimp', mailChimp);

    /* @ngInject */
    function mailChimp () {
        // Usage:
        // <div mail-chimp color-type="black || green">
        var directive = {
            bindToController: true,
            controller: mailChimpInputController,
            controllerAs: 'vd',
            restrict: 'A',
            link: link,
            templateUrl: '/ngViews/forms/subscribe-button.html',
            scope: {
            	colorType: "@"
            }
        };
    
        return directive;

        function link (scope, element, attrs) {
        		var vd = scope.vd;
        		vd.getColor = getColor;

        		function getColor() {
        			if (vd.colorType === 'black') {
        				return 'bw';
        			} else if (vd.colorType == 'green') {
        				return 'open';
        			}
        		}
				}

    }

    mailChimpInputController.$inject = ['$scope', 'mailChimpService', 'common', 'flash'];

    /* @ngInject */
    function mailChimpInputController ($scope, mailChimpService, common, flash) {
    	var vd = $scope.vd;

    	if (common.isTesting) {
    	    vd.mailChimpInput = "zackd@assetbuilder.com";
    	}
			
			vd.mailChimpSubmit = mailChimpSubmit;
			vd.mailChimpMessage = null;

			function mailChimpSubmit() {
				if (vd.mailChimpInput === null) return;
				send(vd.mailChimpInput);
			};


			function send(email) {
				return mailChimpService.sendToMailChimp(email)
					.then(mailChimpComplete)
					.catch(mailChimpError);

					/**
					 * Dislay User Safe Results
					 * @param  {object} data 
					 * @return {string}      
					 */
					function mailChimpComplete(data) {
                        flash.success(data.ReturnResult);
					}

					/**
					 * Display User safe Error
					 * @return {string} 
					 */
					function mailChimpError() {
						console.log('error happendin in the controller');
						//Make up user error not CPU Error
					}
			}
    }
})();
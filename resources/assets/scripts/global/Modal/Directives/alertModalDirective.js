(function() {
    'use strict';

    angular
        .module('global.modal')
        .directive('alertModal', alertModal);

    alertModal.$inject = ['$rootScope', 'modalService'];

    /* @ngInject */
    function alertModal ($rootScope, modalService) {
        // Usage:
        // <div alert-modal title="" message="" action=""></div>
        var directive = {
            link: link,
            restrict: 'A',
        };
        
        return directive;

        function link(scope, element, attrs) {
        	var promise;
        	var params =  {
        		title: attrs.title,
        		message: attrs.message,
        		action: attrs.action
        	};
 
        	

            // scope.alertModal = function () {
                 
            // }

            angular.element(element).bind('click', function () {
                promise = modalService.open('alert', params);

                promise.then(function handleResolve(response) {
                    
                }, function handleReject(error) {
                    
                });                   
            })

        	/**
        	 * Resolve or Reject the Promise;
        	*/
        	
        }
    
    }

    
})();
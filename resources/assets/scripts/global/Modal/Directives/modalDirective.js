(function() {
    'use strict';

    angular
        .module('global.modal')
        .directive('abModal', abModal);

    abModal.$inject = ['$rootScope', 'modalService']

    /* @ngInject */
    function abModal ($rootScope, modalService) {
        // Usage:
        // <div ab-modal>
        var directive = {
            link: link,
            templateUrl: '/ngViews/global/modal.html'
        };
        
        return directive;

        
        function link(scope, element, attrs) {
        	scope.subview = null;


            //click on background to reject
            jq('.m-modal__background').on("click", function handleClickEvent( event ) {
				cope.$apply( modalService.reject );
			});

            
			
			//Modal Open - Blur Background throw approriate modal
			$rootScope.$on("modalService.open", function handleModalOpenEvent( event, modalType ) {
				scope.subview = modalType;
                scope.$apply( scope.subview );
                jq('body').addClass('m-modal-open');
			});

			//Clost the modal
			$rootScope.$on("modalService.close", function handleModalCloseEvent( event ) {
				scope.subview = null;
                jq('body').removeClass('m-modal-open');
			});
        }
    }

})();
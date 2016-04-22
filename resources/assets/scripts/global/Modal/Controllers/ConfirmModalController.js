(function() {
    'use strict';

    angular
        .module('global.modal')
        .controller('ConfirmModalController', ConfirmModalController);

    ConfirmModalController.$inject = ['$scope', 'modalService'];

    /* @ngInject */
    function ConfirmModalController($scope, modalService) {
        var vm = this;
        var params = modalService.params();
        
    	vm.title = ( params.title || "" );
        vm.message = ( params.message || "" );
    	vm.confirmButton = ( params.confirmButton || "Confirm" );
    	vm.denyButton = ( params.denyButton || "Deny" );

    	vm.confirm = modalService.resolve;
    	vm.deny = modalService.reject;
    }
})();
(function() {
    'use strict';

    angular
        .module('global.modal')
        .controller('AlertModalController', AlertModalController);

    AlertModalController.$inject = ['$scope', 'modalService'];

    /* @ngInject */
    function AlertModalController($scope, modalService) {
        var vm = this;
        vm.title = 'AlertModalController';

        // Modal Prameters
        vm.title = ( modalService.params().title || "Whoa!" );
       	vm.message = ( modalService.params().message || "Whoa!" );
        vm.action = ( modalService.params().action || "Whoa!" );

        //Close the Modal
        vm.close = modalService.resolve;
    }


})();

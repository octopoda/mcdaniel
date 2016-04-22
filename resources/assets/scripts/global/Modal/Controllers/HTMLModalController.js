/*
|--------------------------------------------------------------------------
| HTML Modal Controller
|--------------------------------------------------------------------------
|
| Controller to Insert HTML into a Modal
|
*/

(function() {
    'use strict';

    angular
        .module('global.modal')
        .controller('HTMLModalController', HTMLModalController);

    HTMLModalController.$inject = ['$scope', 'modalService'];

    /* @ngInject */
    function HTMLModalController($scope, modalService) {
        var vm = this;
        vm.title = 'HTMLModalController';

        vm.code;
        vm.close = modalService.resolve;

        activate();

        ////////////////

        function activate() {
            return modalService.getTemplate(modalService.params().htmlTemplate)
                .then(function (data) {
                    vm.code = data;
                    return vm.code;
                })
        }

        
    }
})();
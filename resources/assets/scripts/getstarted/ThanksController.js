(function() {
    'use strict';

    angular
        .module('mcdaniel.getstarted')
        .controller('ThanksController', ThanksController);

    ThanksController.$inject = ['localStorageService'];

    /* @ngInject */
    function ThanksController(localStorageService) {
        var vm = this;
        vm.title = 'ThanksController';
        vm.service = null;

        activate();

        ////////////////

        function activate() {
            vm.service = localStorageService.get('submittedService');
            // console.dir(vm.service);
        }
    }
})();
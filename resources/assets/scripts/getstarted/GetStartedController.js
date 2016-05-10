(function() {
    'use strict';

    angular
        .module('mcdaniel.getstarted')
        .controller('GetStartedController', GetStartedController);

    /* @ngInject */
    function GetStartedController() {
        var vm = this;
        vm.title = 'GetStartedController';

        activate();

        ////////////////

        function activate() {
        
        }
    }
})();
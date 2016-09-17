(function() {
    'use strict';

    angular
        .module('mcdaniel.pages')
        .controller('WeightlossController', WeightlossController);

    /* @ngInject */
    function WeightlossController(servicesService) {
        var vm = this;
        vm.title = 'WeightlossController';

        activate();

        ////////////////

        function activate() {
        	servicesService.getServices().then(function (data) {
        		console.dir(data.data.services.weight);
        	})
        }
    }
})();
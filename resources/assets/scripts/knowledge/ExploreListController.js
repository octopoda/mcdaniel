(function() {
    'use strict';

    angular
        .module('assetbuilder.knowledge')
        .controller('ExploreListController', ExploreListController);

    /* @ngInject */
    function ExploreListController(exploreService) {
        var vm = this;
        vm.title = 'ExploreListController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();
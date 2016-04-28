(function() {
    'use strict';

    angular
        .module('mcdaniel.blog')
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
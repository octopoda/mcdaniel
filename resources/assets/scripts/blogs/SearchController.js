(function() {
    'use strict';

    angular
        .module('mcdaniel.blog')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['$rootScope', 'articleService'];

    /* @ngInject */
    function SearchController($rootScope, articleService) {
        var vm = this;
        vm.title = 'SearchController';
        vm.formData =  {
        	query: null,
        }

        activate();

        ////////////////

        function activate() {
        	
        }

        function searchArticles() {
        	articleService.searchArticles(vm.formData).then(function (data) {

        	});
        }


        function clearSpaceAndReplace() {
        	
        }


        $rootScope.$on('article.search', function (event, query) {
        	//if (query === 'null') 
        	vm.formData.query = query;
        	searchArticles();

        })



    }
})();
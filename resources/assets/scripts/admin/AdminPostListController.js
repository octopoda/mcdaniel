(function() {
    'use strict';

    angular
        .module('assetbuilder.admin')
        .controller('AdminPostListController', AdminPostListController);

    AdminPostListController.$inject = ['articleService', 'exploreService'];

    /* @ngInject */
    function AdminPostListController(articleService, exploreService) {
        var vm = this;
        vm.title = 'AdminPostListController';
        vm.pageNumber = 1;
        vm.articlesPerPage = 20;
        vm.isSearch = false;

        vm.ArticleList;
        vm.totalPages;

        //Methods
        vm.search = searchArticles;
        vm.prevPage = prevPage;
        vm.nextPage = nextPage;

        activate();

        ////////////////

        /**
         * Activate the Controller
         */
        function activate() {
        	return getArticles().then(function () {
        	    vm.totalPages = getTotalPages();
        	});
        }

        
        /**
         * Get the articles from the service.
         */
        function getArticles() {
        	return articleService.getPaginatedArticles(vm.pageNumer, vm.articlesPerPage).then(function (data) {
        	    vm.ArticleList = data.Articles;
        	    vm.count = data.Count;
        	    return vm.ArticleList;
        	});
        }

        function paginateArticles() {
            return articleService.getPaginatedArticles(vm.pageNumer, vm.articlesPerPage).then(function (data) {
                vm.ArticleList = data.Articles;
                $scope.$apply();
                return vm.ArticleList;
            });
        }

        /**
         * Get the total pages of articles. 
         */
        function getTotalPages() {
            return Math.round(vm.count / vm.articlesPerPage);
        }


        /*
        |--------------------------------------------------------------------------
        | Scope Methods
        |--------------------------------------------------------------------------
        */


        /**
         * Search the Articles through the service
         */
        function searchArticles() {
            return exploreService.exploreByKeyword(vm.keyword, vm.articlesPerPage).then(function (data) {
              
                vm.ArticleList = data.Articles;
                vm.isSearch = true;
                vm.pageNumber = 1;
                vm.count = data.Count;
                vm.totalPages = getTotalPages();
                return vm.ArticleList;
            });
        }

        /**
         * Paginate the Search Topics
         */
        function paginateSearch() {
            return exploreService.paginateExploreKeyword(vm.keyword, vm.pageNumber, vm.articlesPerPage).then(function (data) {
               
                vm.ArticleList = data.Articles;
                return vm.ArticleList;
            });
        }

        /**
         * Paginate Articles forward.
         */
        function nextPage() {
            vm.pageNumber++;

            if (vm.isSearch) {
                paginateSearch();
            } else {
                paginateArticles();
            }
        }

        /**
         * Paginate Article backwards
         */
        function prevPage() {
            vm.pageNumber--;

            if (vm.isSearch) {
                paginateSearch();
            } else {
                paginateArticles();
            }
        }


    }
})();
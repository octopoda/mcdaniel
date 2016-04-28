/*
|--------------------------------------------------------------------------
| Article List
|--------------------------------------------------------------------------
|
| Controls the homepage of the knowledge center
|
*/

(function() {
    'use strict';

    angular
        .module('mcdaniel.blog')
        .controller('ArticleListController', ArticleListController);

    ArticleListController.$inject = ['articleService'];

    /* @ngInject */
    function ArticleListController(articleService) {
        var vm = this;
        vm.title = 'ArticleListController';
        vm.Articles = [];
        vm.Total;
        vm.isTrending = isTrending;
        vm.pageNumber = 0;
        vm.pageSize = 20;
        vm.pages;
        vm.ArticlesLoaded = false;


        //Methods 
        vm.nextPage = nextPage;
        vm.prevPage = previousPage;

        activate();


        ////////////////

        function activate() {
            return getData().then(function () {
                vm.ArticlesLoaded = true;
                vm.Articles[0].trending = true;
                countPages();
            });
        }

        /**
         * Get article data
         * @return {[type]} [description]
         */
        function getData() {
            return articleService.getPaginatedArticles(vm.pageNumber, vm.pageSize).then(function (data) {
                vm.Total = data.Count;
                vm.Articles = data.Articles;
                return vm.Articles;
            })
        }

        /**
         * If article is trending return featured class
         * @param  {boolean}  trending 
         * @return {string}          
         */
        function isTrending(trending) {
            if (trending) return 'trending';
            return;
        }


        function countPages() {
            vm.pages = Math.round(vm.Total/vm.pageSize);
            return vm.pages;
        }

        function nextPage() {

        }

        function previousPage() {

        }
    
    }
})();
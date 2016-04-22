/*
|--------------------------------------------------------------------------
| Knowledge Center Controller
|--------------------------------------------------------------------------
|
| Controls the homepage of the knowledge center
|
*/

(function() {
    'use strict';

    angular
        .module('assetbuilder.knowledge')
        .controller('KnowledgeCenterController', KnowledgeCenterController);

    KnowledgeCenterController.$inject = ['$scope', '$rootScope', '$window', 'articleService'];

    /* @ngInject */
    function KnowledgeCenterController($scope, $rootScope, $window, articleService) {
        var vm = this;
        vm.title = 'KnowledgeCenterController';
        vm.Articles = [];
        vm.pageNumber = 0;
        vm.ArticleAmount = 24;
        vm.TrendingAmount = 8;
        vm.includeInternal = true;
        vm.pages;
        vm.ArticlesLoaded = false;
        vm.loading = false;


        //Methods 
        vm.ArticlesLoaded = false;
        vm.goToLink = goToLink;

        activate();

        ////////////////

        function activate() {
        	return getData().then(function () {
                vm.ArticlesLoaded = true;
            });
        }

         /**
         * Get article data
         * @return {[type]} [description]
         */
        function getData() {
            return articleService.getArticlesForHomepage(vm.ArticleAmount, vm.TrendingAmount, vm.includeInternal).then(function (data) {
                vm.Total = data.Count;
                vm.Articles = data.Articles;
                return vm.Articles;
            })
        }

      

       

        /*
        |--------------------------------------------------------------------------
        | $scope listener methods
        |--------------------------------------------------------------------------
        |
        |
        */
       
        $rootScope.$on('articleSearch.loading', function handleLoading(event, keyword) {
            //TODO Throw loading Directive
        });


        /**
         * If user is searching in the background 
         * @param  {event} event 
         * @param  {object} data)
         * @return {object}
         */
        $rootScope.$on('articleSearch.results', function handleLoading(event, data) {
            vm.Articles = data.Articles;
        });


        /**
         *  Go to Link for Touch Devices
         * @return {page redirect}
         */
        function goToLink(link) {
            $window.location = link;
        }
    
    }
})();
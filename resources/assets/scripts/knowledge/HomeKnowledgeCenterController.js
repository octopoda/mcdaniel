(function() {
    'use strict';

    angular
        .module('assetbuilder.knowledge')
        .controller('HomeKnowledgeCenterController', HomeKnowledgeCenterController);

    HomeKnowledgeCenterController.$inject = ['$scope', '$window', 'articleService'];

    /* @ngInject */
    function HomeKnowledgeCenterController($scope, $window, articleService) {
        var vm = this;
        vm.title = 'HomeKnowledgeCenterController';
        vm.Articles = [];
        vm.articleAmount = 6;
        vm.trendingAmount = 2;
        vm.internals = false;

        vm.ArticlesLoaded = false;
        vm.goToLink = goToLink;

        activate();

        ////////////////

        /**
         * Activate the Controller
         * @return {object} 
         */		
        function activate() {
        	return getData().then(function () {
        		vm.ArticlesLoaded = true;
        	});	
        }

        /**
         * Get the data for the articles
         * @return {object} 
         */
        function getData() {
    	   return articleService.getArticlesForHomepage(vm.articleAmount, vm.trendingAmount, vm.internals).then(function (data) {
    			vm.Articles = data.Articles;
    			return vm.Articles;
    		});
        }

        /**
         *  Go to Link for Touch Devices
         * @return {page redirect}
         */
        function goToLink(link) {
            $window.location = link;
        }
    }
})();
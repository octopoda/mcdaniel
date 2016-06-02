(function() {
    'use strict';

    angular
        .module('mcdaniel.blog')
        .directive('articleAnalytics', articleAnalytics);

    articleAnalytics.$inject =  ['localStorageService'];

    /* @ngInject */
    function articleAnalytics (localStorageService) {
        // Usage:
        // <div article-analytics title="article-title"></div>
        var directive = {
            link: link,
            restrict: 'A',
            scope: {
            	title: '@'
            }
        };
        
        return directive;

        function link(scope, element, attrs) {
        	localStorageService.set('lastArticleRead', scope.title);
        }
    }

    
})();
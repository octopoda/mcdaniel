/*
|--------------------------------------------------------------------------
| Search Result Directive
|--------------------------------------------------------------------------
|
| Displays search results on sidebar on changes article listing for
| to show search results based on dynamic attribute
| @note dynamic = 1 will send it to article-listing 
| @note dynamic = 0 will send it to sidebar;
|
*/
(function() {
    'use strict';

    angular
        .module('assetbuilder.knowledge')
        .directive('searchResults', searchResults);

    searchResults.$inject = ['$rootScope', 'exploreService'];

    /* @ngInject */
    function searchResults ($rootScope, exploreService) {
        // Usage:
        // <div search-results dynamic="0||1"></div>
        var directive = {
            link: link,
            restrict: 'A',
            templateUrl: '/ngViews/knowledge/sidebar-search-results.html',
        };
        
        return directive;

        function link(scope, element, attrs) {
        	scope.loading = null;
        	scope.results = null;
        	scope.keyword = null

            sendToSidebar();
            

        	

            /*
            |--------------------------------------------------------------------------
            | Send Methods
            |--------------------------------------------------------------------------
            |
            */
           
           /**
            * Send Results to sidebar 
            * @return {DOM} 
            */
           function sendToSidebar() {
                /** Setup Loading and Keywords */
                $rootScope.$on('search.loading', function handleLoading(event, keyword) {
                    scope.loading = 1;
                    scope.keyword = keyword
                    scope.error = false;
                    scope.$apply(scope.loading);

                    //Fade Out Article Listing
                    jq('.article-listing').fadeOut(2000);
                });

                /** Fill In Search Results */
                $rootScope.$on('search.results', function handleResults(event, data) {
                    scope.loading = null;
                    if (data.Errors !== undefined) {
                        scope.error = true;
                    } else {
                        //console.log('good');
                        scope.results = data.Articles;
                    }
                    
                });

                /** Clear Search Results */
                $rootScope.$on('search.clear', function handleClear(event) {
                    scope.keyword = null;
                    scope.loading = null;
                    scope.results = null;

                    scope.$apply();

                    jq('.article-listing').fadeIn(100);
                });

           }
        }
    }


    
    
})();		
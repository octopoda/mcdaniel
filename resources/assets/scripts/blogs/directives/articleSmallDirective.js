(function() {
    'use strict';

    angular
        .module('mcdaniel.blog')
        .directive('articleSmall', articleSmall);

    /* @ngInject */
    function articleSmall () {
        // Usage:
        // <div article-small></div>
        
        var directive = {
            bindToController: true,
            controller: ArticleSmallController,
            controllerAs: 'vd',
            templateUrl: '/templates/blog/article-small.html',
            replace:true,
            restrict: 'A',
            scope: {
     			title: "@",
     			image: "@",
     			link: "@",
                video: "@"
            }
        };
        
        return directive;
	}

    ArticleSmallController.$inject = ['$scope', '$element', '$attrs'];

    /* @ngInject */
    function ArticleSmallController ($scope, $element, $attrs) {
    	var vd = $scope.vd;

    }
})();
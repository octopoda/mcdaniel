/*
|--------------------------------------------------------------------------
| Blog Preview
|--------------------------------------------------------------------------
|
|  Creates a preview of the blog on information based pages.
|
*/
(function() {
    'use strict';

    angular
        .module('mcdaniel.blog')
        .directive('blogPreview', blogPreview);

    /* @ngInject */
    function blogPreview () {
        // Usage:
        // <div blog-preview></div>
        var directive = {
            bindToController: true,
            controller: BlogPreviewController,
            controllerAs: 'vd',
            templateUrl: '/templates/blog/blog-preview.html',
            replace: true,
            restrict: 'A',
        };
        
        return directive;
	}


    BlogPreviewController.$inject = ['$scope', '$element', '$attrs', 'articleService']

    /* @ngInject */
    function BlogPreviewController ($scope, $element, $attrs, articleService) {
    	var vd = $scope.vd;
    		vd.mainArticle = {};
    		vd.otherArticles = [];

    	activate();


    	//////////////

    	function activate() {
    		getArticleData();
        }


        //Get the Main Article Data
    	function getArticleData() {
    		return articleService.getArticlesForBlogPreview(4).then(function (data) {
    			vd.mainArticle = data.data[0]

                if (vd.mainArticle.post_image == false) {
                    var rand = Math.floor(Math.random() * 4) + 1  
                    vd.mainArticle.post_image = 'https://s3-us-west-2.amazonaws.com/mcdaniel-staging/unsplash/' + rand + '.jpg'
                }
            
                for (var i = 1; i < data.data.length; i++) {
                    if (data.data[i].post_thumbnail == false) {
                        var rand = Math.floor(Math.random() * 22) + 1  
                        data.data[i].post_thumbnail = 'https://s3-us-west-2.amazonaws.com/mcdaniel-staging/unsplash/' + rand + '.jpg'
                    }
                    vd.otherArticles.push(data.data[i]);
                }

                
    		});
    	}
    }

})();
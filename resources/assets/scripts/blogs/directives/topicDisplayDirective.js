/*
|--------------------------------------------------------------------------
| Topic Display Directive
|--------------------------------------------------------------------------
|
| Displays the topics from the cookie
|
*/

(function() {
    'use strict';

    angular
        .module('mcdaniel.blog')
        .directive('topicDisplay', topicDisplay);

    topicDisplay.$inject = ['$rootScope',  'topicService'];

    /* @ngInject */
    function topicDisplay ($rootScope, topicService) {
        // Usage:
        //	<div topic-display></div>
        var directive = {
            link: link,
            restrict: 'A',
            replace: true,
            templateUrl: '/ngViews/knowledge/topic-display.html'
        };
        
        return directive;

        function link(scope, element, attrs) {
        	//Get the Topics
        	scope.notEmpty = false;
            //var stringTopics = topicService.getTopics();
            
            //if (stringTopics) {
            //    scope.notEmpty = true;
            //    scope.topics = JSON.parse(stringTopics);    
            //}

        	
            ////If Topics Change get them again
        	//$rootScope.$on('topics.changed', function handleChange(event) {
        	//	scope.topicData = topicService.getTopics();
        	//})
        }
    }

    
})();
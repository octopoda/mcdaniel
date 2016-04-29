(function() {
    'use strict';

    angular
        .module('mcdaniel.blog')
        .directive('goBlog', goBlog);

    /* @ngInject */
    function goBlog () {
        // Usage:
        // <div go-blog></div>
        
        var directive = {
            link: link,
            restrict: 'A',
        };
        
        return directive;

        function link(scope, element, attrs) {
        		
        	var el = jq(element[0]);

        	el.on('click', function () {
        		console.log('message');
        		window.location = '/posts';
        	});
        }
    }

    /* @ngInject */
    function Controller () {

    }
})();
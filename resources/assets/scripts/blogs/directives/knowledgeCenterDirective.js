(function() {
    'use strict';

    angular
        .module('mcdaniel.blog')
        .directive('knowledgeCenter', knowledgeCenter);

    /* @ngInject */
    function knowledgeCenter () {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: knowledgeCenterController,
            controllerAs: 'vd',
            link: link,
            templateUrl: '/ngViews/knowledge/knowledge-center.html',
            replace:true,
            restrict: 'A',
            scope: {
            	articles: "="
            }
        };
        return directive;

        function link(scope, element, attrs) {
        	var vd = scope;
        	
        }
    }

    /* @ngInject */
    function knowledgeCenterController (scope) {

    }
})();
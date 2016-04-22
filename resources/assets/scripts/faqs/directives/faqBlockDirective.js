(function() {
    'use strict';

    angular
        .module('assetbuilder.faq')
        .directive('faqBlock', faqBlock);

    /* @ngInject */
    function faqBlock () {
        // Usage:
        // <div ng-repeat="faq in fc.Faqs" ng-if="faq.featured" faq-block>
				// 		<h4 >{{ faq.question }} <i class="fa fa-angle-right"></i></h4>
				// 		<div ng-bind-html="faq.answer" class="faq-answer"></div>
				// </div>
        var directive = {
            link: link,
            restrict: 'A',
        };
        
        return directive;

        function link(scope, element, attrs) {
        		var el = jq(element);
        		var question = el.children('.faq-question');
        		var answer = el.children('.faq-answer');

        		question.on('click', function (e) {
        			if (el.hasClass('open')) {
        				answer.slideUp(200);
        				el.toggleClass('open');
        			} else {
        				answer.slideDown(200);
        				el.toggleClass('open');
        			}
        		});
        }
    }

    /* @ngInject */
    function Controller () {

    }
})();
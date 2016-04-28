(function() {
    'use strict';

    angular
        .module('mcdaniel.faq')
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
        		
                var question = jq(element[0]);
        		var answer = question.children('.faq__answer');

        		question.on('click', function (e) {
        			if (question.hasClass('open')) {
        				answer.slideUp(200);
        				question.toggleClass('open');
        			} else {
        				answer.slideDown(200);
        				question.toggleClass('open');
        			}
        		});
        }
    }

    /* @ngInject */
    function Controller () {

    }
})();
(function() {
    'use strict';

    angular
        .module('mcdaniel.faq')
        .directive('faqBlock', faqBlock);

    /* @ngInject */
    function faqBlock () {
        // Usage:
        // <div faq-block></div>
        var directive = {
            bindToController: true,
            controller: FaqBlockController,
            controllerAs: 'vd',
            link: link,
            restrict: 'A',
            templateUrl: '/templates/faqs/faq-block.html',
            scope: {
                faqs: "="
            }
        };
        return directive;

        function link(scope, element, attrs) {
            
        }
    }

    FaqBlockController.$inject = ['$scope', '$element', '$attrs'];

    /* @ngInject */
    function FaqBlockController ($scope, $element, $attrs) {
        var vd = $scope.vd;

        vd.openAnswer = openAnswer;



        //Open the Answers
        function openAnswer($event) {
            var self = jq($event.currentTarget),
                answer = self.children('.faq__answer');

            if (self.hasClass('open')) {
                answer.slideUp(200);
                self.toggleClass('open');
            } else {
                answer.slideDown(200);
                self.toggleClass('open');
            }
        }
    }

})();
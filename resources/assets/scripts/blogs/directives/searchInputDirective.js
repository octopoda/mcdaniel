(function() {
    'use strict';

    angular
        .module('mcdaniel.blog')
        .directive('searchInput', searchInput);

    /* @ngInject */
    function searchInput () {
        // Usage:
        // <div data-search-input></div>
        var directive = {
            bindToController: true,
            controller: SearchInputController,
            controllerAs: 'vd',
            link: link,
            restrict: 'A',
            replace: true,
            templateUrl: '/templates/blog/search-input.html',
            scope: {
                alwaysOpen: "@"
            }
        };
        
        return directive;


        function link(scope, element, attrs) {
            
        }
    }

    SearchInputController.$inject =  ['$scope', '$element', '$attrs', '$location'];

    /* @ngInject */
    function SearchInputController ($scope, $element, $attrs, $location) {
        var vd = $scope.vd,
            el = jq($element[0]),
            input = jq('#q'),
            form = jq('#searchForm');

        if (vd.alwaysOpen) {
            el.addClass('always-open');
        }
        
        jq('body').click(function (e) {
            if (jq(e.target).closest(el).length === 0) {
                el.removeClass('open')
            }
        });


        el.on('click', function (e) {
            e.preventDefault();
            el.addClass('open');
            input.focus();
        })


        jq(document).keypress(function (e) {
            if (e.which === 13) {
                if (el.hasClass('open')) {
                    form.submit();
                }
            }
        });

    }
})();
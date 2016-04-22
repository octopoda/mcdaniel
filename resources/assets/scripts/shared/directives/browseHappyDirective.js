(function() {
    'use strict';

    angular
        .module('mcdaniel.shared')
        .directive('browseHappy', browseHappy);


    
    function browseHappy () {
        // Usage:
        //     <div browse-happy></div>
        // Creates:
        // 
        var directive = {
            link: link,
            restrict: 'A',
            replace: true,
            templateUrl: '/ngViews/global/browse-happy.html'
        };
        return directive;

        function link(scope, element, attrs) {
                
        }
    }

})();
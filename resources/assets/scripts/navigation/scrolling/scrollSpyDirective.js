(function() {
    'use strict';

    angular
        .module('mcdaniel.navigation')
        .directive('scrollSpy', scrollSpy);

    scrollSpy.$inject = ['$window', '$document', 'common'];
    scrollSpyController.$inject = ['$scope'];

    /* @ngInject */
    function scrollSpy ($window, $document, common) {
        // Usage:
        // <div scroll-spy></div>
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: scrollSpyController,
            controllerAs: 'vd',
            link: link,
            restrict: 'A',
        };
        
        return directive;

        function link(scope, element, attrs, common) {
            var vd = scope.vd;
                vd.spyElements = [];
                vd.navigationHeight = 93;

            scope.$watch('vd.spies', watchSpies(vd.spies));

            return angular.element($window).bind('scroll', scrollWatcher);

            /**
             * Watch the Spies array and return the element that matches
             * @param  {array} spies 
             * @return {array}       
             */
            function watchSpies(spies) {
                var spy,
                    results = [];

                for (var i = 0; i < spies.length; i++) {
                    spy = spies[i];
                    if (vd.spyElements[spy.id] == null) {
                        results.push(vd.spyElements[spy.id] = jq('#'+spy.id));
                    } 
                }

                return results;
            }


            /**
             * Highlight the Spy
             * @return {function} 
             */
            function scrollWatcher() {
                var spy, activeSpy;
                

                for(var i = 0; i < vd.spies.length; i++) {
                    spy = vd.spies[i];
                    spy.out();

                    vd.spyElements[spy.id] = vd.spyElements[spy.id].length === 0 ? jq('#'+spy.id) : vd.spyElements[spy.id];
                    var pos = jq(vd.spyElements[spy.id]).offset().top
    
                    if (pos - $window.scrollY <= vd.navigationHeight) {
                        spy.pos = pos;
                        if (activeSpy == null) {
                            activeSpy = spy;
                        }

                        if (activeSpy.pos < spy.pos) {
                            activeSpy = spy;
                        }
                    }

                }
                return activeSpy != null ? activeSpy["in"]() : void 0;
            }

            
    

        } //Link
    } //Directive

    /* @ngInject */
    function scrollSpyController ($scope) {
        var vd = $scope.vd;
            vd.spies = [];
            vd.addSpy = addSpy;
            vd.scrollTo = scrollTo;
        


        return vd;

        /**
         * Add a spy to the spies array
         * @param {spy directive} spyObject 
         */
        function addSpy(spyObject) {
            return vd.spies.push(spyObject);
        }


        function scrollTo(spyObject) {

        }
    }
})();
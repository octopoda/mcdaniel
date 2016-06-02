(function() {
    'use strict';

    angular
        .module('mcdaniel.faq')
        .directive('faqSearchInput', faqSearchInput);

    faqSearchInput.$inject = ['$rootScope'];

    /* @ngInject */
    function faqSearchInput ($rootScope) {
        // Usage:
        // <input type="text" name="search" faq-search-input>
        var directive = {
            link: link,
            restrict: 'A',
        };
        
        return directive;

        function link(scope, element, attrs) {
        	/** @type {DOM} element  */
        	var el = jq(element[0]);

        	/**
        	 * On Key up search
        	 * @param  {event}
        	 * @return {function} 
        	 */
        	el.on('keyup', function (e) {
        		if (timer) clearTimeout(timer);
        		var timer = setTimeout(broadcastSearch, 400);
        	});


        	/**
        	 * Broadcast to the Root
        	 * @param  {string} query 
        	 * @return {null}       
        	 */
        	function broadcastSearch() {
        		var query = el.val();
        		$rootScope.$emit('faqSearch', query)
        	}
        }
    }
})();
(function() {
    'use strict';

    angular
        .module('mcdaniel.shared')
        .directive('downloadProduct', downloadProduct);

    downloadProduct.$inject = ['productService'];   

    /* @ngInject */
    function downloadProduct (productService) {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'A',
            scope: {
            	productId: "@"
            }
        };
        
        return directive;

        function link(scope, element, attrs) {
        	var el = jq(element[0]);

        	el.on('click', function (e) {
        		e.preventDefault();
        		var newWindow = window.open();
        		var url = getURL(wind);
        		newWindow.location = data[url];

        	});

        	/**
        	 * Get the Product URL and download it.
        	 * @return {[type]} [description]
        	 */
        	function getURL(wind) {
        		return productService.productUrl(scope.productId).then(function (data) {
        			
        			if (data.status === 200) {
        				return data.data;
        			} else {
                        
                    }
        		});
			}
        }
    }

    
})();
(function() {
    'use strict';

    angular
        .module('assetbuilder.pages')
        .directive('randomReturnBlock', randomReturnBlock);

    /* @ngInject */
    function randomReturnBlock () {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: RandomReturnBlock,
            controllerAs: 'vb',
            link: link,
            restrict: 'A',
            templateUrl: '/ngViews/pages/random-returns-block.html',
            scope: {
            	returns : "=",
            	assetClass : "="
            }
        };
        return directive;

        function link(scope, element, attrs) {
     		var vb = scope.vb;
     			vb.returnNumber = vb.returns[1];
     			vb.assetClassName = vb.assetClass.css[vb.returns[0]];

     			

     		jq(element[0]).on('mouseover', function () {
     			highlight();
     		});

     		jq(element[0]).on('mouseout', function () {
     			unhighlight();
     		})


     		function highlight() {
     			jq('.'+ vb.assetClass.css[vb.returns[0]]).addClass('active');
     			jq('#randomReturnsWrapper').addClass('white-out');
     			addTooltip();
     		}

     		function unhighlight() {
				jq('.'+ vb.assetClass.css[vb.returns[0]]).removeClass('active');
     			jq('#randomReturnsWrapper').removeClass('white-out');
     			jq(element[0]).children('.asset-tooltip').remove();
     		}


     		function addTooltip() {
 			 var html = '<div class="asset-tooltip">';
    		 	 html += '<span class="tooltip_name">' + vb.assetClass.friendly[vb.returns[0]] + '</span>'
    		 	 html += '<span class="tooltip_full_name">' + vb.assetClass.names[vb.returns[0]] + '</span>'
    		 	 html += '</div>'

        		jq(element[0]).append(html);
     		}
        }
    }

    /* @ngInject */
    function RandomReturnBlock () {

    }
})();
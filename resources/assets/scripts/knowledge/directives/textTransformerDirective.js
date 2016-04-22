(function() {
    'use strict';

    angular
        .module('assetbuilder.knowledge')
        .directive('textTransformer', textTransformer);

    /* @ngInject */
    function textTransformer () {
        // Usage:
        //  @param: id of item you want to transfor
        //  <div text-transformer selector="@param"></div>
        
        var directive = {
            bindToController: true,
            controller: textTransformerController,
            controllerAs: 'vd',
            templateUrl: '/ngViews/global/text-transformer.html',
            replace: true,
            link: link,
            restrict: 'A',
            scope: {
            }
        };
        
        return directive;

        function link(scope, element, attrs) {
            var vd = scope.vd;
                vd.selector = attrs.selector;
                vd.textSize = 100;

            /**
             * Increse the Text
             * @return {DOM} 
             */
            vd.increaseText = function () {
               var kids = parseSelectorChildren(vd.selector);
               vd.textSize = transformText(vd.selector, kids, "+", vd.textSize);
            }

            /**
             * Decrese the Text
             * @return {DOM}
             */
            vd.decreaseText = function () {
               var kids = parseSelectorChildren(vd.selector);
               vd.textSize = transformText(vd.selector, kids, "-", vd.textSize);
            }
        }
    }

    textTransformerController.$inject = ['$scope'];

    /* @ngInject */
    function textTransformerController ($scope) {
        var vd = $scope.vd;
    }


    /**
     * Transform the text
     * @param  {string} selector  
     * @param  {array} kids      
     * @param  {string} increment 
     * @return {int}           
     */
    function transformText(selector, kids, increment, textSize) {
        var textSize = (increment === "+") ? textSize + 10 : textSize -10;
        var fontSize = textSize+"%",
            lineHeight = (textSize > 100) ? (textSize*1.7)+"%" : "170%";


        for (var i = 0; i < kids.length; i++) {
            jq('#'+selector+' '+kids[i]).css({fontSize: fontSize, lineHeight: lineHeight});
        }

        return textSize;
    }


    /**
     * Parse the children of the selector
     * @param  {string} selector 
     * @return {array}          
     */
    function parseSelectorChildren(selector) {
        var kiddos = [];
        
        jq('#'+selector).children().each(function () {
            var el = jq(this);
            if (kiddos.indexOf(el.context.localName) != -1) { return; }
            
            var filter = filterContext(el.context.localName);
            if (filter) { kiddos.push(filter); }
        });

        return kiddos;  
    }

    /**
     * Filter out namespaces we don't want to transform or change out ones that we need to transform
     * @param  {string} context 
     * @return {string} 
     */
    function filterContext(context) {
        //Remove Block Elements
        if (context === 'div' || context === 'img' || context === 'aside') {
            return false; 
        }


        
        //Trade out Table
        if (context === 'table') {
            context = 'td';
        }

        if (context === 'ul') {
            context = 'li';
        }

        return context;
    }



})();
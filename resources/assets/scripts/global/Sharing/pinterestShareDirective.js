(function() {
    'use strict';

    angular
        .module('global.share')
        .directive('pinterestShare', pinterestShare);

    pinterestShare.$inject = ['$location']

    /* @ngInject */
    function pinterestShare ($location) {
        // Usage:
        // <li pinterest-share><li>
        var directive = {
            link: link,
            restrict: 'A',
            scope: {
            	title: '@',
            	media: '@'
            }
        };
        return directive;

        function link(scope, element, attrs) {
        	var el = jq(element[0]),
        		url = $location.absUrl(),
        		title = scope.title,
        		media = scope.media,
        		pinterstLink = buildLink(url, title, media)

        		el.on('click', function () {
        			popup(pinterstLink, 700, 500);
        		});
        }
    }


     /**
     * Build Pinterst Sharer Link
     * @param  {string} url 
     * @return {string}     
     */
    function buildLink(url, title, media) {
        return 'http://pinterest.com/pin/create/button/?url='+ url +'&description='+ title +'&media=' +  media;
    }


    /**
     * Trucate the String to Match
     * @param  {string} url  
     * @param  {string} via  
     * @param  {string} html 
     * @return {string}
     */
    function truncateHTML(url, via, html) {
        var full = url.length + via.length + 4;
        var text = html.substr(0, (140-full));
        return text + '...'
    }

     /**
     * Make the Popup Window
     * @param  {string} url    
     * @param  {int} width  
     * @param  {int} height 
     * @return {window.open}        
     */
    function popup(url, width, height) {
        window.open(url,'1429735674908','width='+width+',height='+height+',toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
    }
    
})();
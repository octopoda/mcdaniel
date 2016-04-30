(function() {
    'use strict';

    angular
        .module('global.share')
        .directive('linkedinShare', linkedinShare);

    linkedinShare.$inject = ['$location'];
    
    /* @ngInject */
    function linkedinShare ($location) {
        // Usage:
        // <div data-linked-share>
        var directive = {
            link: link,
            restrict: 'A',
            scope: {
            	title:  "@",
            	summary: "@"
            }
        };
        return directive;

        function link(scope, element, attrs) {
    		var el = jq(element[0]),
    			url = $location.absUrl(),
    			title = scope.title,
    			summary = scope.summary,
    			linkedInLink = buildLink(url, title, summary);

    		el.on('click', function () {
    			popup(linkedInLink, 700, 500);
    		})

        }
    }


     /**
     * Build Pinterst Sharer Link
     * @param  {string} url 
     * @return {string}     
     */
    function buildLink(url, title, summary) {
        //return 'http://pinterest.com/pin/create/button/?url='+ url +'&description='+ title +'&media=' +  media;
        return 'http://www.linkedin.com/shareArticle?mini=true&url='+ url +'&title='+ title +'&summary='+ summary +'&source=http://mcndanielnutrition.com';
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
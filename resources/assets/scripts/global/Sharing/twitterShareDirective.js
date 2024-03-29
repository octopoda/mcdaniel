(function() {
    'use strict';

    angular
        .module('global.share')
        .directive('twitterShare', twitterShare);

    twitterShare.$inject = ['$location'];

    /* @ngInject */
    function twitterShare ($location) {
        // Usage:
        // <div twitter-share></div>
        var directive = {
            link: link,
            restrict: 'A',
            scope: {
                title: '@'
            }
        };
        
        return directive;

        function link(scope, element, attrs) {
            var el = jq(element[0]),
                title = scope.title,
                tiny = jq('meta[name="tiny"]').attr('content'),
                url = 'http://mcdanielnutrition.com/p/' + tiny,
                via = '- @mcdanielrdn',
                twitterLink = buildLink(url, via, title);

            el.on('click', function () {
                popup(twitterLink, 700, 500);
            })
        
        }
    }



     /**
     * Build Twitter Sharer Link
     * @param  {string} url 
     * @return {string}     
     */
    function buildLink(url, via, html) {
        var text = truncateHTML(url, via, html);
        return 'http://twitter.com/intent/tweet?url='+ url + '&text=' + text + via;
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
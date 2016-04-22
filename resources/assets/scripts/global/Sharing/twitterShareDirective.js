/*
|--------------------------------------------------------------------------
| Twitter Share Directive
|--------------------------------------------------------------------------
|
| Builds twitter share button and URL to shre the article on twitter
|
*/
(function() {
    'use strict';

    angular
        .module('global.share')
        .directive('twitterShare', twitterShare);

    twitterShare.$inject = ['$location'];

    /* @ngInject */
    function twitterShare ($location) {
        // Usage:
        // <li twitter-share tweet=""></li>
        // Creates:
        //
        var directive = {
            link: link,
            template: '<a href="{{ vd.twitterLink }}"><i class="fa fa-twitter"></i></a>',
            restrict: 'A',
        };
        return directive;

        function link(scope, element, attrs) {
        	var url = $location.absUrl(),
                twitterLink = buildLink(url);

            jq(element).on('click', function (e) {
                popup(twitterLink, 700, 500);
                _ga('send', 'event', 'knowledge-center', 'share', 'facebook', 0);
            });    
        }
    }

    /**
     * Build Twitter Sharer Link
     * @param  {string} url 
     * @return {string}     
     */
    function buildLink(url) {
    	//TODO: add social card; and description  &text=
    	return 'http://twitter.com/share?url='+ url + ' - @assetbuilder';
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

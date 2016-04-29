
/*
|--------------------------------------------------------------------------
| Facebook Share Direcgive
|--------------------------------------------------------------------------
|
| Builds facebook share button and URL to shre the article on twitter
|
*/
(function() {
    'use strict';

    angular
        .module('global.share')
        .directive('facebookShare', facebookShare);

    facebookShare.$inject = ['$location'];

    /* @ngInject */
    function facebookShare ($location) {
        // Usage:
        // <div facebook-share></div>
        var directive = {
            link: link,
            restrict: 'A',
            template: '<a href="#"><i class="fa fa-facebook"></i></a>'
        };
        
        return directive;

        function link(scope, element, attrs) {
        	var url = $location.absUrl(),
                fbLink = buildLink(url);
                
            jq(element[0]).on('click', function (e) {
                popup(fbLink, 700, 500);
                //Send to Google Analytics
                _ga('send', 'event', 'knowledge-center', 'share', 'facebook', 0);
            });

        }
    }

    /**
     * Build Facebook Sharer Link
     * @param  {string} url 
     * @return {string}     
     */
    function buildLink(url) {
    	//TODO: add description 
    	return 'https://www.facebook.com/sharer/sharer.php?u=' + url + '&display=popup';
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


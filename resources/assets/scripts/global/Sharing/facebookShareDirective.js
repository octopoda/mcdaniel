
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
            scope: {
                title: "@"
            }
        };
        
        return directive;

        function link(scope, element, attrs) {
            var url = $location.absUrl(),
                fbLink = buildLink(url, scope.title);
                
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
    function buildLink(url, title) {
        //TODO: add description 
        // return 'http://www.facebook.com/dialog/feed?app_id=556572864519365&caption=' + title + '&display=popup&link=' + url;
        
        return 'https://www.facebook.com/dialog/share?' +
                  'app_id=1557556577872786' +
                  '&display=popup' +
                  '&href=' + url + 
                  '&redirect_uri=' + url;
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


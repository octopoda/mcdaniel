(function ($) {	
  $(document).ready(function() {

      var url = window.location.href;
      var text = $('.callout').text();
      
      var buildLink = function(url) {
        return 'http://twitter.com/share?url='+ url + '&text=' + text + ' - @McDanielRDN';
      } 

      var popup = function (url, height, width) {
         window.open(url,'1429735674908','width='+width+',height='+height+',toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
      }

      $('.callout').append('<div class="callout__twitter"><i class="fa fa-twitter"></i> Tweet <div>')

      $('.callout__twitter').on('click', function (e) {
        e.preventDefault();
        popup(buildLink(url), 700, 500);
      })
  });
}( jQuery ));
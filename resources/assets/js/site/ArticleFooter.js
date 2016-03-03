(function ($) { 
  $(document).ready(function() {

      /*
    |--------------------------------------------------------------------------
    | Pop up the Article Footer on Scroll
    |--------------------------------------------------------------------------
    |
    */
   
   if ($('#articleContent').length !== 0) { 
      $(document).scroll(function (e) {
        
        
        var y = $(this).scrollTop();    
        var articleContent = $('#articleContent').position().top;
        var siteFooter = $('#siteFooter').position().top;

        
         //Content past 200
         if (y > articleContent + 200) {
              $('#articleFooter').addClass('active');
              
              //Footer comes from bottom
              if (y + window.innerHeight > siteFooter) {
                $('#articleFooter').removeClass('active');  
              }
            
            } else {
              $('#articleFooter').removeClass('active');
            }
        });


      //Submit the mailchimp form;
      $('#mailChimpSubscribe').on('submit', function (e) {
        e.preventDefault();

      });
    }

  });
 }(jQuery));

  

  

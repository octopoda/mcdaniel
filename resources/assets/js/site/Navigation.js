/*
|--------------------------------------------------------------------------
| Javascript for Navigation
|--------------------------------------------------------------------------
|
|
*/
(function ($) {	
  $(document).ready(function() {

    //Open Menu on Mobile
    $('#openMenu').on('tap click', function (e) {
      e.preventDefault();
      $('#sideMenu').addClass('active');
    });

    //Close Menu on Mobile
    $('#menu-close-button').on('tap click', function (e) {
        e.preventDefault();
        $('#sideMenu').removeClass('active');
    });


    //Add Fixed menu on Scroll  
    var lastScrollTop = 0;
    $(document).scroll(function (e) {
      var y = $(this).scrollTop();  
      var navigationOffset = $('#mainMenu').position().top;

      if (y > navigationOffset-0) {
        $('#navigationWrapper').addClass('fixed');
        $('body').addClass('nav-fixed');
      } else {
        $('#navigationWrapper').removeClass('fixed');
        $('body').removeClass('nav-fixed');
      }

      if (y > lastScrollTop) {
        //downward Scroll
        $('#navigationWrapper').removeClass('active');  
      } else {
        //updward scroll
        if ($('#navigationWrapper').hasClass('fixed')) {
            $('#navigationWrapper').addClass('active');
        }
      }

      lastScrollTop = y;
    });




    

  });
}( jQuery ));
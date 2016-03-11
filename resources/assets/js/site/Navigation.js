/*
|--------------------------------------------------------------------------
| Javascript for Navigation
|--------------------------------------------------------------------------
|
|
*/
(function ($) {	
  $(document).ready(function() {

  /*
   |--------------------------------------------------------------------------
   | Main Menu
   |--------------------------------------------------------------------------
   |
   |
   */   

    /**
     * Make Logo click take you home
     */
    $('.home-button').on('click tap', function (e) {
      e.preventDefault();
      window.location = "/";
    })

    

    /**
     * Open the Menu
     */
    $('#openMenu').on('click', function (e) {
      e.preventDefault();
      
      $(this).toggleClass('is-active');
      $('#navigation').toggleClass('is-active');
      $('.navigation__modal').toggleClass('is-active');
      $('body').toggleClass('nav-open');
    });


    /**
     * Close the Menu
     * @return 
     */
    $('.navigation__modal').on('click tap', function (e) {
      $(this).removeClass('is-active');
      $('#navigation').removeClass('is-active');
      $('#openMenu').removeClass('is-active');
      $('body').removeClass('nav-open');
    });


    /*
    |--------------------------------------------------------------------------
    | Drop Downs
    |--------------------------------------------------------------------------
    |
    |
    */
    var openMenu = null;

    //Have dropdowns operate on Click for Mobile.
    $('.Dropdown__trigger').on('tap', function (e) {
      e.preventDefault();
      dropDropDown($(this).attr('data-dropdown'));
    });

 
    /**
     * Drop the Dropdown
     * @param  {string} attr 
     * @return {DOM}      
     */
    var dropDropDown = function (attr) {
      var dropdown = $('#' + attr);

      if (dropdown.hasClass('is-active')) {
        dropdown.removeClass('is-active').slideUp(500);
      } else {
        dropdown.addClass('is-active').slideDown(500);
      }
    }


    /*
    |--------------------------------------------------------------------------
    | Scrolling Fixed Menu
    |--------------------------------------------------------------------------
    |
    |
    */

    //Add Fixed menu on Scroll  
    var lastScrollTop = 0;
    $(document).scroll(function (e) {
      var y = $(this).scrollTop();  
      var navigationOffset = $('#contentWrapper').position().top;
      
      var glued = $('#navigation').hasClass('glued');
      var fixed = $('#navigation').hasClass('fixed');

      if (y > navigationOffset-0 && !glued) {
        $('#navigation').addClass('fixed');
        $('body').addClass('nav-fixed');
      } else if (!glued) {
        $('#navigation').removeClass('fixed');
        $('body').removeClass('nav-fixed');
      }

      if (y > lastScrollTop && fixed && !glued) {   //downward Scroll
        $('#navigation').removeClass('in-view');  
        $('#quickNavigation').removeClass('in-view')
      } else if (!glued) { //updward scroll
        $('#navigation').addClass('in-view');
        $('#quickNavigation').addClass('in-view');
      }

      lastScrollTop = y;
    });




    

  });
}( jQuery ));

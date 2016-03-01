(function ($) {	
  $(document).ready(function() {
 
  	$.ajax({
  		type: 'GET',
  		url: '',
  		beforeSend: function () {

  		}
  	}).done(function (data) {
  	
  	})


  	var displayArticles = function (data) {

  	}

  });
}( jQuery ));
(function ($) {	
  $(document).ready(function() {

  	/*
  	|--------------------------------------------------------------------------
  	| Pop up the Article Footer on Scroll
  	|--------------------------------------------------------------------------
  	|
  	*/
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

  	})

  
  });
}( jQuery ));
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
/*
|--------------------------------------------------------------------------
| Javascript for Navigation
|--------------------------------------------------------------------------
|
|
*/
(function ($) {	
  $(document).ready(function() {

    //Open Menu on Mobild
    $('#openMenu').on('tap click', function (e) {
        console.dir(e);
        e.preventDefault();
        $('#sideMenu').addClass('active');
    })

    $('')

    //Close Menu on Mobile
    $('#menu-close-button').on('tap click', function (e) {
        e.preventDefault();
        $('#sideMenu').removeClass('active');
    })


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
(function ($) {	
  $(document).ready(function() {




  
  
  });
}( jQuery ));

//# sourceMappingURL=app.js.map

(function ($) { 
  $(document).ready(function() {

		$('.collapsible').children('.collapsible-body').hide();

		$('.collapsible').children('.collapsible-header').on('click', function (e) {
			console.log('message');
			var next =  $(this).next('.collapsible-body')
			if (next.hasClass('active')) {
				next.removeClass('active').slideUp(500);
			} else {
				console.log('adding');
				next.addClass('active').slideDown(500);
			}
		})

  
  });
}( jQuery ));
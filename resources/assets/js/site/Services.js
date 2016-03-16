(function ($) {
	$(document).ready(function () {

		var phone = window.matchMedia("(max-width: 767px)");

		$('.package-trigger').on('click tap', function (e) {
			e.preventDefault()
			var service = $('#'  + $(this).attr('data-package'));
			
			if (phone.matches) {
				$('body').animate({ 
					scrollTop: service.offset().top 
				}, 1000);
			} else {
				if (service.hasClass('is-active')) {
					service.siblings().slideUp(500);
				} else {
					//Siblings
					service.siblings().slideUp(500);
					service.siblings().removeClass('is-active');
					//Service
					service.slideDown(500)
					service.addClass('is-active');
				}
			}
		});

	});
}( jQuery));
$(function () {
	//Setup Side Nav
	$(".button-collapse").sideNav();
	$('.datepicker').pickadate({
		format: 'mmmm d, yyyy'
	});
	
	$('.dashboard-select').material_select();

	
	$('.destroy-button').bind('ajax:success', function(e, data, status, xhr){
    	$(e.target).closest('tr').slideUp(500);
    	var name = $(e.target).attr('data-title');
    	
    	Materialize.toast("Your " + name + " has been deleted", 1400, 'success');
    });



	$('.publish-button').bind('ajax:success', function (e, data, status, xhr) {
		console.dir(data);
		if (data.published) {
			$('.dashboard__content--draft').animate({
				width: 0
			}, 2000, function () {
				$(this).removeClass('unpublished');
			});

			$(e.target).children('i').html('file_download');	
		} else {
			$('.dashboard__content--draft').addClass('unpublished').animate({
				width: '100%'
			}, 2000);

			$(e.target).children('i').html('publish');	
		}
		
		Materialize.toast(data.message, 1400, 'success');
	});


	$('.test-email')
	.bind('ajax:before', function () {
		$(this).html('setting up....');
	})
	.bind('ajax:send', function () {
		$(this).html('sending...');
	})
	.bind('ajax:success', function (e, data, status, xhr) {
		$(this).html('Test Email');
		Materialize.toast("Email has been sent", 1400, 'success');
	})
	.bind('ajax:error', function (xhr, status, error) {
		Materialize.toast("Something is wrong: " + error, 2200, 'error');
	});



	$('#videoSwitch').on('change', function (e) {
		if ($(e.target).is(':checked')) {
			$('#embedVideoField').slideDown(500);
		} else {
			$('#embedVideoField').slideUp(500);
		}
	});

	$('.faq-star').bind('ajax:success', function (e, data, status, xhr) {
		console.dir(data);

		(data.featured) ? $(this).removeClass('disabled') : $(this).addClass('disabled');
		
		Materialize.toast(data.message, 1400, 'success');
	});

	
});











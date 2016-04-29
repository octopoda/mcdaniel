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
    	
    	console.dir(data);

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



	$('#videoSwitch').on('change', function (e) {
		if ($(e.target).is(':checked')) {
			$('#embedVideoField').slideDown(500);
		} else {
			$('#embedVideoField').slideUp(500);
		}
	})

	
});











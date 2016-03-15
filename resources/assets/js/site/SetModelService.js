(function ($) {
	$(document).ready(function () {

		$('[data-service]').on('click tap', function (e) {
			e.preventDefault();
			$('#serviceInput').val($(this).attr('data-service'));
		})


	});
}(jQuery)) 
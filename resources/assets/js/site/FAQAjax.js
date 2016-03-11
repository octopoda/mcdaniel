(function ($) { 
  $(document).ready(function() {

  	$('#faqQuery').on('keyup', function (e) {
  		var query = $(e.target).val();
  		var _token = $(e.target).next('input').val();

      if (query === null) {
        $.ajax({
          type: "POST",
          url: 'api/v1/faqs/stared',
          data: { 
              'query' : query, 
              '_token' : _token 
           }
        }).done(function (data) {
            renderQuestion(data);
        });
      } else {
        $.ajax({
          type: "POST",
          url: 'api/v1/faqs/search',
          data: { 
              'query' : query, 
              '_token' : _token 
           }
        }).done(function (data) {
            renderQuestion(data);
        });
      }

  		
      var renderQuestion = function (data) {
          $.get('./js/templates/FaqQuestion.mst', function (template) {
            var faqs = {
              "faqs" : data
            }

            var rendered = Mustache.render(template, faqs);
            $('#faqQuestions').html(rendered);
          });
      }
  	})

  });
}( jQuery ));

  

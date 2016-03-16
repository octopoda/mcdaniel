(function ($) {	
  $(document).ready(function() {

    if ($('#articleDisplay') !== undefined) {
        $.ajax({
          type: "GET",
          url: '/api/v1/posts/byNumber/6'
        }).done(function (data) {
          $.get('/js/templates/ArticleDisplay.mst', function (template) {
            var articles = {
              "articles" : data.data
            }
            
            var rendered = Mustache.render(template, articles);
            $('#articleDisplay').html(rendered);
          });
        
      });
    }
  		


  		
 });
 

 }(jQuery));
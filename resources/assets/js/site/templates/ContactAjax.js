(function ($) { 
  $(document).ready(function() {

    /**
     * Ajax for All Forms
    */
    $('form[data-remote]').on('submit', function (e) {
      e.preventDefault();
      var form = $(this);
      var method = form.find('input[name="method"]').val() || 'POST';
      var url = form.prop('action');


      $.ajax({
        type: method,
        url: url,
        data: form.serialize(),
        beforeSend: function () {
          showPreloader();
        }
      }).done(function () {
        showMessage('success');
      }).fail(function () {
          showMessage('error')
      })
    });




    /**
     * Show the Preloader
     * @return {DOM} 
     */
    var showPreloader = function () {
      $('.contact__submit').hide();
      $('.contact__preloader').show();
    };

    /**
     * Hide the Preloaded and SHow the Form
     * @return {DOM} 
     */
    var showFormButton = function () {
      $('.contact__submit').show();
      $('.contact__preloader').hide();
    }

    /**
     * Show the message based on Type
     * @param  {string} type 
     * @return {DOM}
     */
    var showMessage = function (type) { 
      var message = null;
     
      if (type === "success") {
        message = $('.contact__message').attr('data-success-message');
      } else {
        message = $('.contact__message').attr('data-error-message');
      }
      
      $('.contact__preloader').hide();
      $('.contact__message').html(message).show();
    }


 

    
    
  });
}( jQuery ));

  

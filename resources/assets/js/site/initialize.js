if (window.jQuery) {  
    // jQuery is loaded  
    
    //Initalize Materialize Shit here 
     $('.modal-trigger').leanModal();
	 $('.scrollspy').scrollSpy();
  
      
	// $('.dropdown-button').dropdown({
	// 	beloworigin: true,
	// 	hover: true,
	// 	constrainwidth: false
	// });
	

	 $.ajaxSetup({
		headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').val() }
	 });

} else {
    console.log('jquery is not loaded');
}
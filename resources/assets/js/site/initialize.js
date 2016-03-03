if (window.jQuery) {  
    // jQuery is loaded  
    
    //Initalize Materialize Shit here 
     $('.modal-trigger').leanModal();
	// $('.dropdown-button').dropdown({
	// 	beloworigin: true,
	// 	hover: true,
	// 	constrainwidth: false
	// });

} else {
    console.log('jquery is not loaded');
}
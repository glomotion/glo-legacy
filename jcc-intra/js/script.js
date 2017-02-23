/* Author: Tim Paul

*/

jQuery(document).ready(function () {

//  	$('#home #d-headr').load('ajax-headrs.html #max'); 	

	moo();		

	searchWatermark('#i-srch-input');

	$('#a-toggl-headr').click(function(){ 
		if ($(this).hasClass('max')) {
				$(this).removeClass('max');
				$('#d-headr-cntnr').slideUp('slow', function() {
							$('#d-headr-cntnr').addClass('intrnl');
							$('#d-headr-cntnr').load('ajax-headrs.html #min', function(data) {
									$('#d-headr-cntnr').slideDown('fast', moo);
									}
							);}
				);
			} else {							
			$(this).addClass('max');				
			$('#d-headr-cntnr').slideUp('slow', function() {
						$('#d-headr-cntnr').removeClass('intrnl');
						$('#d-headr-cntnr').load('ajax-headrs.html #max', function(data) {
								$('#d-headr-cntnr').slideDown('fast', moo);
								}
						);}
			);				
		}
		return false;
	});



}); // Close Document Ready Call ---------------

	
	
function moo() {
	
	$('#d-srch-box').hide();
		
//	startclock();
		
	$('#a-srch').click(function() {
		if ($(this).hasClass('open')){
		  $('#d-srch-box').fadeOut(350, 'easeInOutExpo');
		  $(this).removeClass('open');
		}
		else {
		  $('#d-srch-box').fadeIn(250, 'easeInOutExpo');	
		  $(this).addClass('open');
		  searchWatermark('#i-srch-input');
		}
		return false;		
	  });		
	$('#a-close').click(function() {	
		if ($('#a-srch').hasClass('open')){
		  $('#d-srch-box').fadeOut(350, 'easeInOutExpo');
		  $('#a-srch').removeClass('open');
		}
		return false;		
	  });
	$('#a-hide').click(function(){ 
		$('#d-title').slideUp();
		$('.contnt').addClass('moo');
		return false;	
    });	  
}
	
function searchWatermark(sBox) {
	$(sBox).focus(function() {
		$(this).filter(function() {
			return $(this).val() == '' || $(this).val() == 'keyword search';
		}).val('');
	});
	$(sBox).blur(function() {
		$(this).filter(function() {
			return $(this).val() == '';
		}).val('keyword search');
	});
}	



$(window).load(function() {
	


});














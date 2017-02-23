$(document).ready(function(){

	$.ajaxSetup ({
		cache: true
	});
	
	var ajax_load = "<img style='padding: 50px' src='assets/images/loading.gif' alt='loading...' />";

//	load() functions
	var loadUrl = "gdocs-auto-msgs.html";
	$('#a-bot-hlp, #a-top-hlp').click(function(){
		$('#d-hlp-ifrm').html(ajax_load).load(loadUrl);
	});

//	Save Button	
	$('#sp-save').hover(function() {
	$(this).find('a').addClass("hover").stop(true, true)
			.animate({
				backgroundColor: '#43670b'
			}, 200);
		} , function() {
	$(this).find('a').removeClass("hover")
			.animate({
				backgroundColor: '#8ab229'
		}, 350);
	});
	$('#sp-save a').hover(function() {
		$(this).next("em").stop(true, true).animate({opacity: "show", top: "-77"}, "slow");
		}, function() {
		$(this).next("em").animate({opacity: "hide", top: "-90"}, "fast");
	});
	
// Fix float-fix alignment issues 		
	var h = $('#d-sect-tree-mid').height();
	$('#sp-float-fix').height(h);	
	
});

// Heading Replacement
	Cufon.replace('#h3-pge-titl', {textShadow: '#6a8d0b 0px 1px 1px'}); 
	Cufon.replace('#h4-msg-type');	

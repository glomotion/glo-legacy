$(document).ready(function(){

	$.ajaxSetup ({
		cache: true
	});
	
	var ajax_load = "<img style='padding: 50px' src='assets/images/loading.gif' alt='loading...' />";

//	load() functions
	var loadUrl = "gdocs-struct-contnt.html";
	$('#a-bot-hlp, #a-top-hlp').click(function(){
		$('#d-hlp-ifrm').html(ajax_load).load(loadUrl);
	});

//	Save and Preview Buttons
	$('#sp-prevw').hover(function() {
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
	$('#sp-prevw a').hover(function() {
		$(this).next("em").stop(true, true).animate({opacity: "show", top: "-77"}, "slow");
		}, function() {
		$(this).next("em").animate({opacity: "hide", top: "-90"}, "fast");
	});
	$('#sp-save a').hover(function() {
		$(this).next("em").stop(true, true).animate({opacity: "show", top: "-77"}, "slow");
		}, function() {
		$(this).next("em").animate({opacity: "hide", top: "-90"}, "fast");
	});
	
// #d-tree-func-btns Buttons	 --------------
	
	$('#sp-xpnd').hover(function() {
	$(this).find('a').addClass("hover").stop(true, true)
			.animate({
				backgroundColor: '#1687e5'
			}, 200);
		} , function() {
	$(this).find('a').removeClass("hover")
			.animate({
				backgroundColor: '#f3f3f3'
		}, 350);
	});	
	$('#sp-xpnd a').hover(function() {
		$(this).next("em").stop(true, true).animate({opacity: "show", top: "-75"}, "slow");
		}, function() {
		$(this).next("em").animate({opacity: "hide", top: "-90"}, "fast");
	});

	$('#sp-cllpse').hover(function() {
	$(this).find('a').addClass("hover").stop(true, true)
			.animate({
				backgroundColor: '#1687e5'
			}, 200);
		} , function() {
	$(this).find('a').removeClass("hover")
			.animate({
				backgroundColor: '#f3f3f3'
		}, 350);
	});	
	$('#sp-cllpse a').hover(function() {
		$(this).next("em").stop(true, true).animate({opacity: "show", top: "-75"}, "slow");
		}, function() {
		$(this).next("em").animate({opacity: "hide", top: "-90"}, "fast");
	});
	
// Scroll Follow Code	
	var offset = $(".scrll-fllw").offset();
	var topPadding = 25;
	$(window).scroll(function() {
		if ($(window).scrollTop() > offset.top) {
			$(".scrll-fllw").stop().animate({
				marginTop: $(window).scrollTop() - offset.top + topPadding
			});
		} else {
			$(".scrll-fllw").stop().animate({
				marginTop: 10
			});
		};
	});	
	
//Fix Scroll follow bug on small screens by stopping it	**** this might need work
	var windowHeight = $(window).height();
	var sectFuncHeight = $('#d-sect-func-area').height() + 116;
	if (windowHeight < sectFuncHeight) { 
		$('#d-sect-func-area').removeClass('scrll-fllw');
		} else { 
		$('#d-sect-func-area').addClass('scrll-fllw');
	} 
});

//Fix Scroll follow bug when somone resizes the window
$(window).resize(function() {
	var windowHeight = $(window).height();
	var sectFuncHeight = $('#d-sect-func-area').height() + 116;
	if (windowHeight < sectFuncHeight) { 
		$('#d-sect-func-area').removeClass('scrll-fllw');
		} else { 
		$('#d-sect-func-area').addClass('scrll-fllw');
	} 
});

// Heading Replacement
	Cufon.replace('#h3-pge-titl', {textShadow: '#6a8d0b 0px 1px 1px'}); 

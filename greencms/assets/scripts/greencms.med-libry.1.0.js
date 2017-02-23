$(document).ready(function(){

	$.ajaxSetup ({
		cache: true
	});
	
	var ajax_load = "<img style='padding: 50px' src='assets/images/loading.gif' alt='loading...' />";

//	load() functions
	var loadUrl = "gdocs-med-libry.html";
	$('#a-bot-hlp, #a-top-hlp').click(function(){
		$('#d-hlp-ifrm').html(ajax_load).load(loadUrl);
	});

//	RHS Bubble Buttons
	$('#sp-rename').hover(function() {
	$(this).find('a').addClass("hover").stop(true, true)
			.animate({
				backgroundColor: '#43670b'
			}, 200);
		} , function() {
	$(this).find('a').removeClass("hover")
			.animate({
				backgroundColor: '#6d9019'
		}, 350);
	});		
	$('#sp-dwnld').hover(function() {
	$(this).find('a').addClass("hover").stop(true, true)
			.animate({
				backgroundColor: '#43670b'
			}, 200);
		} , function() {
	$(this).find('a').removeClass("hover")
			.animate({
				backgroundColor: '#6d9019'
		}, 350);
	});	
	$('#sp-rename a').hover(function() {
		$(this).next("em").stop(true, true).animate({opacity: "show", top: "-92"}, "slow");
		}, function() {
		$(this).next("em").animate({opacity: "hide", top: "-100"}, "fast");
	});
	$('#sp-dwnld a').hover(function() {
		$(this).next("em").stop(true, true).animate({opacity: "show", top: "-89"}, "slow");
		}, function() {
		$(this).next("em").animate({opacity: "hide", top: "-100"}, "fast");
	});
	
// #d-tree-func-btns Buttons	 --------------
	
	$('#sp-drctry').hover(function() {
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
	$('#sp-drctry a').hover(function() {
		$(this).next("em").stop(true, true).animate({opacity: "show", top: "-108"}, "slow");
		}, function() {
		$(this).next("em").animate({opacity: "hide", top: "-120"}, "fast");
	});
	
	$('#sp-upld').hover(function() {
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
	$('#sp-upld a').hover(function() {
		$(this).next("em").stop(true, true).animate({opacity: "show", top: "-75"}, "slow");
		}, function() {
		$(this).next("em").animate({opacity: "hide", top: "-90"}, "fast");
	});
	
	$('#sp-del').hover(function() {
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
	$('#sp-del a').hover(function() {
		$(this).next("em").stop(true, true).animate({opacity: "show", top: "-108"}, "slow");
		}, function() {
		$(this).next("em").animate({opacity: "hide", top: "-123"}, "fast");
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
	Cufon.replace('#h4-file-name', {textShadow: '#a7cb45 0px 1px 1px'}); 

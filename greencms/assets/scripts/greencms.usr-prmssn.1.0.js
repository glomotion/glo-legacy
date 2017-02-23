$(document).ready(function(){

	$.ajaxSetup ({
		cache: true
	});
	
	var ajax_load = "<img style='padding: 50px' src='assets/images/loading.gif' alt='loading...' />";

//	load() functions
	var loadUrl = "gdocs-usr-prmssn.html";
	$('#a-bot-hlp, #a-top-hlp').click(function(){
		$('#d-hlp-ifrm').html(ajax_load).load(loadUrl);
	});

//	RHS Bubble Buttons

	$('#sp-usr-roles').hover(function() {
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
	$('#sp-usr-roles a').hover(function() {
		$(this).next("em").stop(true, true).animate({opacity: "show", top: "-76"}, "slow");
		}, function() {
		$(this).next("em").animate({opacity: "hide", top: "-90"}, "fast");
	});

	
// #d-tree-func-btns Buttons	 --------------
	
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
		$(this).next("em").stop(true, true).animate({opacity: "show", top: "-75"}, "slow");
		}, function() {
		$(this).next("em").animate({opacity: "hide", top: "-90"}, "fast");
	});
	
	$('#sp-new-usr').hover(function() {
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
	$('#sp-new-usr a').hover(function() {
		$(this).next("em").stop(true, true).animate({opacity: "show", top: "-75"}, "slow");
		}, function() {
		$(this).next("em").animate({opacity: "hide", top: "-90"}, "fast");
	});
	
// Fix float-fix alignment issues 		
	var h = $('#d-sect-tree-area').height();
	$('#sp-float-fix').height(h);
});		

$(window).resize(function() {
	var h = $('#d-sect-tree-area').height();
	$('#sp-float-fix').height(h);
});	

// Dont need Scroll Follow

// Heading Replacement
	Cufon.replace('#h5-role-view', {textShadow: '#b9dd57 0px 1px 1px'}); 
	Cufon.replace('#h3-role-view', {textShadow: '#b1d54f 0px 1px 1px'}); 	

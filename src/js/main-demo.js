/*
AUTHOR   : SimplePixel
URL      : http://themeforest.net/user/SimplePixel
TEMPLATE : Heloo - Responsive Coming Soon Template
VERSION  : 1.0
*/

(function($) {
	"use strict";
	
	/*-- ================================ --
		1.0 window.resize FUNCTION
	/*-- ================================ --*/
	$(window).resize(function(e) {
		
    });
	//-- end window.resize function
	
	/*-- ================================ --
		2.0 window.load FUNCTION
	/*-- ================================ --*/
	$(window).load(function(e) {
		$('.preloader').addClass('animated fadeOut');
		
		//-- hide preloader
		var hidePreloader = setTimeout(function(){
			$('.preloader').hide();
			
			clearTimeout(this);
		},1000);
    });
	//-- end window.load function
	
	/*-- ================================ --
		3.0 window.scroll FUNCTION
	/*-- ================================ --*/
	$(window).scroll(function(e) {
		
    });
	//-- end window.scroll function
	
	
	/*-- ================================ --
		4.0 document.ready FUNCTION
	/*-- ================================ --*/
	$(document).ready(function(e) {					
        //-- activate single image background
		$(".bg-container-slideshow").backstretch([
			"img/demo/bg.jpg"
		],{
			duration:6000,
			fade:'normal'
		});
    });
	//-- end document.ready function
})(jQuery);
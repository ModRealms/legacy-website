(function($) {
	"use strict";
		
	/*-- ================================ --
		2.0 window.resize FUNCTION
	/*-- ================================ --*/
	$(window).resize(function(e) {
		
    });
	//-- end window.resize function
	
	/*-- ================================ --
		3.0 window.load FUNCTION
	/*-- ================================ --*/
	$(window).load(function(e) {
		//-- hide preloader if all content is loaded
		if($(".bg-container-youtube").length == 0){
			$('.preloader').animate({
				top:-($(window).height())
			},1000,"easeInCirc");
		
			//-- show home content 
			setTimeout(function(){
				$('.preloader').hide();
				$('.home-section img.logo, .home-section .coming-soon, .home-section .coming-soon-desc, .home-section .button-regular, .home-section .right-side').addClass('fadeInUp');
			},1000);	
		}
    });
	//-- end window.load function
	
	/*-- ================================ --
		4.0 window.scroll FUNCTION
	/*-- ================================ --*/
	$(window).scroll(function(e) {
		
    });
	//-- end window.scroll function
	
	
	/*-- ================================ --
		5.0 document.ready FUNCTION
	/*-- ================================ --*/
	$(document).ready(function(e) {
		//-- more info button clicked
		$('a.more-info').click(function(e) {
            $('html,body').animate({
				scrollTop:$('.about-section').offset().top
			},1000,"easeOutCirc");
        });
		
		//-- activate parallax background
		if($(".bg-container-parallax").is(':visible')){
			$('.bg-container-parallax').scrolly({
				bgParallax: true
			});
		}
    });
	//-- end document.ready function
})(jQuery);
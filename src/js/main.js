/*
AUTHOR   : SimplePixel
URL      : http://themeforest.net/user/SimplePixel
TEMPLATE : Monsy - Responsive Coming Soon Template
VERSION  : 1.0

TABLE OF CONTENTS
1.0 functions
2.0 window.resize function
    2.1 hide or show logo & menu based on screen size
3.0 window.load function
    3.1 activate word rotator plugin
4.0 window.scroll function
5.0 document.ready function
    5.1 activate static image background
    5.2 activate slideshow background
    5.3 activate slideshow with kenburns effect
    5.4 activate youtube video background
    5.5 activate tooltip
    5.6 activate countdown
    5.7 init main content background animation
    5.8 menu clicked
    5.9 close button clicked
    5.10 previous content clicked
    5.11 next content clicked
    5.12 init carousel for services
    5.13 init owl carousel for works
    5.14 activate magnific popup image
    5.15 validate and submit subscribe form
*/

(function($) {
	"use strict";

	/*-- ================================ --
		1.0 FUNCTIONS
	/*-- ================================ --*/
	function HideComingSoon(){
		$('.coming-soon-container .bottom-side').removeClass('fadeInUp').addClass('fadeOutDown');
		$('.coming-soon-container .top-side').removeClass('fadeInDown').addClass('fadeOutUp');
		$('footer').removeClass('fadeInUp').addClass('fadeOutDown');
	}
	function ShowComingSoon(){
		$('.coming-soon-container .bottom-side').removeClass('entrance fadeOutDown').addClass('fadeInUp');
		$('.coming-soon-container .top-side').removeClass('entrance fadeOutUp').addClass('fadeInDown');
		$('footer').removeClass('fadeOutDown').addClass('entrance fadeInUp');
	}
	function ShowCountdown(){
		if($(window).width() < 768){
			$('.days_dash').removeClass('fadeOutUpDiamond').addClass('fadeInUpDiamond');
			$('.seconds_dash').removeClass('fadeOutUpDiamond').addClass('fadeInUpDiamond');
			$('.hours_dash').removeClass('fadeOutUpDiamond').addClass('fadeInUpDiamond');
			$('.minutes_dash').removeClass('fadeOutUpDiamond').addClass('fadeInUpDiamond');
		}
		else{
			$('.days_dash').removeClass('fadeOutUpDiamond').addClass('fadeInDownDiamond');
			$('.seconds_dash').removeClass('fadeOutDownDiamond').addClass('fadeInUpDiamond');
			$('.hours_dash').removeClass('fadeOutLeftDiamond').addClass('fadeInLeftDiamond');
			$('.minutes_dash').removeClass('fadeOutRightDiamond').addClass('fadeInRightDiamond');
		}
	}
	function HideCountdown(){
		if($(window).width() < 768){
			$('.days_dash').removeClass('fadeInUpDiamond entrance').addClass('fadeOutUpDiamond');
			$('.seconds_dash').removeClass('fadeInUpDiamond entrance').addClass('fadeOutUpDiamond');
			$('.hours_dash').removeClass('fadeInUpDiamond entrance').addClass('fadeOutUpDiamond');
			$('.minutes_dash').removeClass('fadeInUpDiamond entrance').addClass('fadeOutUpDiamond');
		}
		else{
			$('.days_dash').removeClass('fadeInDownDiamond entrance').addClass('fadeOutUpDiamond');
			$('.seconds_dash').removeClass('fadeInUpDiamond entrance').addClass('fadeOutDownDiamond');
			$('.hours_dash').removeClass('fadeInLeftDiamond entrance').addClass('fadeOutLeftDiamond');
			$('.minutes_dash').removeClass('fadeInRightDiamond entrance').addClass('fadeOutRightDiamond');
		}
	}
	function HideMenu(){
		if($(window).width() < 992){
			$('.menu').removeClass('fadeInDown').addClass('animated fadeOutUp');

			//-- hide tooltip
			$('.tooltip').fadeOut('fast');
		}
		else{
			$('.menu li[class*="menu"]').each(function(index, element) {
            	$(this).addClass('menu-out fadeOutLeft');

				//-- remove animation class
				var removeAnimClass = setTimeout(function(){
					$('.menu li[class*="menu"]').each(function(index, element) {
        			    $(this).removeClass('menu-out fadeOutLeft');
						$(this).css({
							visibility:'hidden'
						});
        			});

					clearTimeout(this);
				},2000);
        	});
		}
	}
	function ShowMenu(){
		if($(window).width() < 992){
			//-- show menu on document load (execute only on document load)
			if($('.menu').hasClass('entrance') || $('.menu').hasClass('fadeOutUp')){
				//-- remove init class
				$('.menu').removeClass('entrance fadeOutUp');

				$('.menu').addClass('fadeInDown');

				$('.menu li[class*="menu"]').each(function(index, element) {
        		    $(this).css({
						visibility:'visible'
					});
        		});

				//-- remove animation class
				var removeAnimClass = setTimeout(function(){
					$('.menu').removeClass('fadeInDown');

					clearTimeout(this);
				},1000);
			}
			else{
				$('.menu li[class*="menu"]').each(function(index, element) {
        		    $(this).removeClass('menu-out fadeOutLeft').addClass('menu-in fadeInLeft');
        		});

				//-- remove animation class
				var removeAnimClass = setTimeout(function(){
					$('.menu li[class*="menu"]').each(function(index, element) {
        			    $(this).removeClass('menu-in fadeInLeft');
        			});

					clearTimeout(this);
				},1000);
			}
		}
		else{
			//-- show menu on document load
			if($('.menu').hasClass('entrance')){
				$('.menu').removeClass('entrance').addClass('animated fadeInDown');

				//-- remove animation class
				var removeAnimClass = setTimeout(function(){
					$('.menu').removeClass('animated fadeInDown');

					clearTimeout(this);
				},2000);
			}
			//-- if not first load
			else{
				if($('.menu').hasClass('fadeOutUp')){
					$('.menu').removeClass('fadeOutUp').addClass('animated fadeInDown');

					//-- remove animation class
					var removeAnimClass = setTimeout(function(){
						$('.menu').removeClass('animated fadeInDown');

						clearTimeout(this);
					},1000);
				}
				else{
					$('.menu li[class*="menu"]').each(function(index, element) {
        			    $(this).addClass('menu-in fadeInLeft');

						//-- remove animation class
						var removeAnimClass = setTimeout(function(){
							$('.menu li[class*="menu"]').each(function(index, element) {
        					    $(this).removeClass('menu-in fadeInLeft');
								$(this).css({
									visibility:'visible'
								});
        					});

							clearTimeout(this);
						},2000);
        			});
				}
			}
		}
	}
	function ShowContentControls(){
		$('.main-content-controls').removeClass('fadeOutUp').addClass('fadeInUp');
	}
	function HideContentControls(){
		$('.main-content-controls').removeClass('fadeInUp').addClass('fadeOutUp');
	}
	function ShowCloseButton(){
		$('.close-content-container').removeClass('entrance fadeOutUp').addClass('fadeInUp');

		//-- remove animation class
		var removeAnimClass = setTimeout(function(){
			$('.close-content-container').removeClass('fadeInUp');
			$('.close-content-container').css({
				visibility:'visible'
			});

			clearTimeout(this);
		},2000);
	}
	function HideCloseButton(){
		$('.close-content-container').addClass('fadeOutUp');

		//-- remove animation class
		var removeAnimClass = setTimeout(function(){
			$('.close-content-container').css({
				visibility:'hidden'
			});

			clearTimeout(this);
		},2000);
	}
	function ShowNews(){
		$.menu_name = "news";

		if($(window).width() < 1024){
			$('.news-container').css('display','block');
		}
		$('.news-container h2,.news-container  h3,.news-container  img, p.news-desc, .service-container').removeClass('fadeOutUp').addClass('fadeInUp');
		$('.news-container').css({
			zIndex:5
		});
	}
	function HideNews(){
		$('.news-container h2,.news-container  h3,.news-container  img, p.news-desc, .service-container').removeClass('entrance fadeInUp').addClass('fadeOutUp');
		$('.news-container').css({
			zIndex:4
		});
		if($(window).width() < 1024){
			//-- hide container
			var hideContainer = setTimeout(function(){
				$('.news-container').fadeOut('fast');
				clearTimeout(this);
			},800);
		}
	}

	/*-- ================================ --
		2.0 window.resize FUNCTION
	/*-- ================================ --*/
	// $(window).resize(function(e) {
	// 	//-- 2.1 hide or show logo & menu based on screen size
	// 	if($(window).width() < 1024){
	// 		if($('.main-content').style('visibility') == "visible"){
	// 			$('.menu').addClass('animated fadeOutUp');
	//
	// 			//-- remove animating class
	// 			var removeAnimClass = setTimeout(function(){
	// 				$('.menu li[class*="menu"]').each(function(index, element) {
     //        			$(this).removeClass('menu-out fadeOutLeft');
     //    			});
	//
	// 				clearTimeout(this);
	// 			},1000);
	//
	// 			//-- adjust main content background
	// 			$.mainContentBg.hide();
	// 			var showBg = setTimeout(function(){
	// 				$.mainContentBg.show();
	//
	// 				clearTimeout(this);
	// 			},2000);
	// 		}
	// 	}
	// 	else{
	// 		if($('.main-content').style('visibility') == "visible"){
	// 			$('.menu').removeClass('animated fadeOutUp');
	// 			$('.menu li[class*="menu"]').each(function(index, element) {
	// 				$(this).style({
	// 					visibility:'hidden'
	// 				});
     //    		});
	//
	// 			//-- adjust main content background
	// 			$.mainContentBg.hide();
	// 			var showBg = setTimeout(function(){
	// 				$.mainContentBg.show();
	//
	// 				clearTimeout(this);
	// 			},2000);
	// 		}
	// 	}
	//
	// 	//-- reordering countdown
	// 	if($(window).width() < 768){
	// 		ReorderingCountdown();
	// 	}
    // });
	// //-- end window.resize function

	/*-- ================================ --
		3.0 window.load FUNCTION
	/*-- ================================ --*/
	$(window).load(function(e) {
		//-- hide preloader
		$('.preloader').addClass('animated fadeOut');

		//-- show home content
		var showHome = setTimeout(function(){
			$('.preloader').hide();

			ShowComingSoon();
			ShowMenu();

			//-- 3.1 activate word rotator plugin
			$("#word-rotator").wordsrotator({
    			autoLoop: true,                  //auto rotate words
    			randomize: false,                //show random entries from the words array
    			stopOnHover: true,              //stop animation on hover
    			changeOnClick: true,            //force animation run on click
    			animationIn: "fadeInLeft",          //style class for entrace animation
    			animationOut: "fadeOutRight",        //style class for exit animation
    			speed: 3000,               		 //delay in milliseconds between two words
    			words: ['play.modrealms.net', 'Divine Journey 2', 'FTB Revelation', 'Chroma Technology', 'SevTech: Ages Of The Sky', 'Omnifactory', 'Project Ozone 3', 'RLCraft', 'MC Eternal', 'Join Us Today!']
			});

			//-- clearing the timeout
			clearTimeout(this);
		},1000);
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
		//-- reordering countdown
		//-- 5.2 activate slideshow background
		if($(".bg-container-slideshow").is(':visible')){
			$(".bg-container-slideshow").backstretch([
				"static/backgrounds/slide1.png",
				"static/backgrounds/slide2.png",
				"static/backgrounds/slide3.png",
				"static/backgrounds/slide4.png",
				"static/backgrounds/slide5.png",
				"static/backgrounds/slide6.png",
				"static/backgrounds/slide7.png"
			],{
				duration:6000,
				fade:'normal'
			});
		}

		//-- 5.3 activate slideshow with kenburns effect
		if($(".bg-container-kenburns").is(':visible')){
			$(".bg-container-kenburns").kenburnsy({
        		fullscreen: true
        	});
		}

		//-- 5.4 activate youtube video background
		if($(".bg-container-youtube").is(':visible')){
			if($(window).width() >= 1200){
				/*
				* Please note that this player doesnâ€™t work as background for devices due to the restriction policy adopted by all on
				* managing multimedia files via javascript. It fallsback to the default Youtube player if used as player (not applied to the body).
				*/

				$('.player').mb_YTPlayer();
			}
			else{
				$(".bg-container-youtube").backstretch([
					"https://web.archive.org/web/20171104061959/http://placehold.it/2560x1600",
					"https://web.archive.org/web/20171104061959/http://placehold.it/2560x1600"
				],{
					duration:6000,
					fade:'normal'
				});
			}
		}

		//-- 5.5 activate tooltip (on large device only)
		if($(window).width() > 991){
			$('[data-toggle="tooltip"]').tooltip({
				container:'body'
			});
		}

		//-- 5.7 init main content background animation
		$.mainContentBg = new SVGLoader( document.getElementById('main-content'), { speedIn : 150 } );

		//-- 5.8 menu clicked
		$('.menu-link').each(function(index, elem) {
            $(this).on('click',function(e){

				$.menu_name = $(this).data('name');
				//-- hide menu
				HideMenu();

				//-- hide coming soon text
				HideComingSoon();

				//-- show main content bg
				var showMainContentBg = setTimeout(function(){
					$.mainContentBg.show();

					clearTimeout(this);
				},500);

				//-- show content
				var showContent = setTimeout(function(){
					//-- show countdown
					ShowCountdown();

					//-- show close button
					ShowCloseButton();

					//-- show content controls
					ShowContentControls();

					//-- show content based on menu name
					if($.menu_name == "news"){
						ShowNews();
					}
					else if($.menu_name == "works"){
						ShowWorks();
					}
					else if($.menu_name == "subscribe"){
						ShowSubscribe();
					}
					else if($.menu_name == "contact"){
						ShowContact();
					}

					clearTimeout(this);
				},1900);
			});
        });

		//-- 5.9 close button clicked
		$('.close-content').on('click',function(){
			//-- hide close button
			HideCloseButton();

			//-- hide content controls
			HideContentControls();

			//-- hide countdown
			HideCountdown();

			//-- hide active content
			if($.menu_name == "news"){
				HideNews();
			}
			else if($.menu_name == "works"){
				HideWorks();
			}
			else if($.menu_name == "subscribe"){
				HideSubscribe();
			}
			else if($.menu_name == "contact"){
				HideContact();
			}

			//-- hide main content background
			var hideMainContentBg = setTimeout(function(){
				$.mainContentBg.hide();

				clearTimeout(this);
			},1000);

			//-- show home content
			var showHomeContent = setTimeout(function(){
				//-- show menu
				ShowMenu();

				//-- show coing soon
				ShowComingSoon();

				clearTimeout(this);
			},2000);
		});

		//-- 5.10 previous content clicked
		$('.prev-content').on('click',function(){
			//-- go to previous content
			if($.menu_name == "news"){
				HideNews();

				//-- show contact
				var showContact = setTimeout(function(){
					ShowContact();
					clearTimeout(this);
				},600);
			}
			else if($.menu_name == "subscribe"){
				HideSubscribe();

				//-- show news us
				var showAbout = setTimeout(function(){
					ShowNews();
					clearTimeout(this);
				},600);
			}
			else if($.menu_name == "works"){
				HideWorks();

				//-- show subscribe
				var showSubscribe = setTimeout(function(){
					ShowSubscribe();
					clearTimeout(this);
				},600);
			}
			else if($.menu_name == "contact"){
				HideContact();

				//-- show works
				var showWorks = setTimeout(function(){
					ShowWorks();
					clearTimeout(this);
				},600);
			}
		});

		//-- 5.11 next content clicked
		$('.next-content').on('click',function(){
			//-- go to next content
			if($.menu_name == "news"){
				HideNews();

				//-- show subscribe
				var showSubscribe = setTimeout(function(){
					ShowSubscribe();
					clearTimeout(this);
				},600);
			}
			else if($.menu_name == "subscribe"){
				HideSubscribe();

				//-- show works
				var showWorks = setTimeout(function(){
					ShowWorks();
					clearTimeout(this);
				},600);
			}
			else if($.menu_name == "works"){
				HideWorks();

				//-- show contact
				var showContact = setTimeout(function(){
					ShowContact();
					clearTimeout(this);
				},600);
			}
			else if($.menu_name == "contact"){
				HideContact();

				//-- show news
				var showAbout = setTimeout(function(){
					ShowNews();
					clearTimeout(this);
				},600);
			}
		});

		//-- 5.12 init carousel for services
		var service_carousel = $('.service-container .owl-carousel');
		service_carousel.owlCarousel({
			singleItem:true,
			navigation:false,
			transitionStyle : "goDown"
		});
		//-- services carousel custom control
		$('.next-service').on('click',function(){
			service_carousel.trigger('owl.next');
		});
		$('.prev-service').on('click',function(){
			service_carousel.trigger('owl.prev');
		});

		//-- 5.13 init owl carousel for works
		var works_carousel = $('.works-gallery .owl-carousel');
		works_carousel.owlCarousel({
			singleItem:true,
			navigation:false,
			transitionStyle : "fadeUp"
		});
		//-- works carousel custom control
		$('.next-work').on('click',function(){
			works_carousel.trigger('owl.next');
		});
		$('.prev-work').on('click',function(){
			works_carousel.trigger('owl.prev');
		});


		//-- 5.14 activate magnific popup image
		$('.popup-image').each(function(index, element) {
            $(this).magnificPopup({
  				type: 'image',
				closeBtnInside: true,
				removalDelay: 300,
				mainClass: 'mfp-fade'
			});
        });

		//-- 5.15 validate and submit subscribe form
		$('.subscribe-form').validate({
			errorLabelContainer: $('.subscribe-notif'),
			rules: {
	        	EMAIL: {
	            	required: true,
	                email: true
	            }
	        },
			messages: {
				EMAIL: {
					required: "Please insert your email address",
					email: "Your email address is not valid"
				}
			},
			submitHandler: function(form) {
				if(event){
					event.preventDefault();
				}

				var url_dest = $(form).attr('action');
				var form_data = $(form).serialize();
				var form_method = $(form).attr('method');

				//-- show loading
				$('.subscribe-notif').show().html('<label class="loading-subscribe">Please wait</label>');
				$('.loading-subscribe').fadeIn('fast');

				$.ajax({
					type: form_method,
	        		url: url_dest,
	        		data: form_data,
	        		cache : false,
	        		dataType : 'json',
	        		contentType: "application/json; charset=utf-8",
	        		error : function(err) { alert("Could not connect to the registration server. Please try again later."); },
	        		success : function(data) {
	            		if(data.result == "success"){
							//-- reset form
							$(form).trigger('reset');

							//-- hide loading
							$('.loading-subscribe').fadeOut('fast',function(){
								//-- show notif
								$('.subscribe-notif').html('<label class="subscribe-notif-success">Thank you for subscribing us.</label>');
								$('.subscribe-notif-success').fadeIn('fast').delay(5000).fadeOut('fast',function(){
									$(this).remove();
									$('.loading-subscribe').remove();
								});
							});
						}
						else{
							//-- reset form
							$(form).trigger('reset');

							//-- hide loading
							$('.loading-subscribe').fadeOut('fast',function(){
								//-- show notif
								$('.subscribe-notif').html('<label class="subscribe-notif-error">Error.</label>');
								$('.subscribe-notif-error').fadeIn('fast').delay(5000).fadeOut('fast',function(){
									$(this).remove();
									$('.loading-subscribe').remove();
								});
							});
						}
	        		}
				});

				return false;
			}
		});
		//-- end validate and submit subscribe form

    });
	//-- end document.ready function
})(jQuery);
/*
     FILE ARCHIVED ON 06:19:59 Nov 04, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:23:40 Feb 25, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 129.865 (3)
  esindex: 0.008
  captures_list: 146.76
  CDXLines.iter: 12.555 (3)
  PetaboxLoader3.datanode: 120.203 (4)
  exclusion.robots: 0.207
  exclusion.robots.policy: 0.179
  RedisCDXSource: 0.802
  PetaboxLoader3.resolve: 15.948
  load_resource: 118.594
*/

$(document).ready(function() {
	/*======Menu-toggle=============*/
	
	$(".burger").on("click", function() {
		$(this).toggleClass("active");
		$(".toggle-menu").slideToggle(333);
		$(".header").toggleClass('blue-bg');
		if($(window).width() < 769) { 
			$("body.white").toggleClass('active');
		}
	});
	/*==========/menu-toggle=========*/

	/*===============Form-popup=================*/
	$(".btn-open").on("click", function(event) {
		event.preventDefault();
		$(".form-popup").fadeIn(333);
 
		$('.form-popup').css('top', $(window).scrollTop()+'px');
		$(".form-popup__inner").fadeIn(333);
		$('body').addClass("hidden");
	});
	$(".form-popup__close,  .closex, btn-close").on("click", function(event) {
		event.preventDefault();
		$(".form-popup").fadeOut('222');
		$(".form-popup__inner").fadeOut(222);
		$('body').removeClass("hidden");
	});
/*==============/Form-popup=================*/
/*==============/Link-dropdown=================*/

if($(window).width() > 1360) { 
	$(".header-white__link-drop").hover(function() {
	$(this).find('.header-white__link-dropdown').fadeToggle(333);
	});
}
/*==============/Link-dropdown=================*/

/*===============FAQ=================*/
	$(".faq-block__header").on("click", function() {
		$(this).next().slideToggle(333);
		$(this).find('.faq-block__icon').toggleClass('active');
	});

/*==============Header-scroll==============*/
 $(window).on('scroll', function(){
    $scroll_top = $(window).scrollTop();

    if($scroll_top > 200){
      $('.header-scroll').addClass('fixed');
    }
    else{
      $('.header-scroll').removeClass('fixed');
    }
  });
 /*==============/Header-scroll==============*/

 /*=========Smooth scroll=============*/
	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		let $this = $(this),
			blockID = $this.data('scroll'),
			blockOffset = $(blockID).offset().top;

		$("html, body").animate ({
			scrollTop: blockOffset - 72
		}, 500);
		$('.burger').removeClass('active');
		$('body').removeClass('active');
		$('.header').removeClass('blue-bg');

		if($(window).width() <= 1360) { 
		$('.header__mobile-toggle').slideUp(333);
		}

	});
/*=========/smooth scroll=============*/

	
});
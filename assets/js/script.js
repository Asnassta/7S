$(document).ready(function() {
	/*======Menu-toggle=============*/
	
	$(".burger").on("click", function() {
		$(this).toggleClass("active");
		$(".toggle-menu").slideToggle(333);
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

	
});
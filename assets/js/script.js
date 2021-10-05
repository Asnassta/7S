
$(document).ready(function() {
	/*======Menu-toggle=============*/
	
	$(".burger").on("click", function() {
		$(this).toggleClass("active");
		$(".toggle-menu").slideToggle(333);
		$(".page_educational .header").toggleClass('blue-bg');
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


/*==================TypedString============*/

let text = ['Психологическая помощь', 'за 2 - 6 недель'];

function typed()
{
	
	
	if(typeof work !== 'undefined')
	{
		return false;
	}
	work = 1;
	
	//скорость набора
	let speed = 70;
	
	//Через сколько начать печатать новую строку после удаления
	let timeOutNew = 800;

	//Через сколько начать удалять строку
	let timeOutDel= 1000;
	
	parent = $('#string .typed');
	

 
	string = parent.text();
	let time = 0;
	pos = parseInt($(parent).attr('attr-pos'));
	if(string.length == 0)
	{
		str = text[pos].split('');
		$.each(str, function(i) {
		  setTimeout( function(){ 
			  
			  parent.append(str[i]);
			  
			  
			  if(text[pos].length == parent.text().length)
			  {
				  setTimeout( function(){ 
				  	delete work;
				  }, timeOutDel);
			 
			  }
			  
		   }, time)
		   time += speed;
		});
	
	}
	else
	{	
		str = text[pos].split('');	
		$.each(str, function(i) {
		  
		  setTimeout( function(){ 
			strd = parent.text();
			delstr = strd.substring(0, strd.length - 1)
		  	parent.html(delstr)

		  	if(0 == delstr.length)
			{
			  posnew = pos+1;
			 if((text.length) == posnew)
			 {
				 posnew = 0;
			 }
		
			  $(parent).attr('attr-pos', posnew);
			  setTimeout( function(){ 
			  	delete work;
			  }, timeOutNew);
			  
			}
		  	
		   }, time)
		   time += speed;
		    
		   
		});
		
	}
	
	
}

//задержка перед стартом
let timeStart = 800;
setInterval("typed()", timeStart);
/*==================/TypedString============*/

/*===============Counters==============*/
//дополнительная функция
function counterDig(id, i, count)
{
	//общее время 
	var time = 1500;
	var speed = parseInt(time/count);
	while(i < count)
	{ 
		if(i == 0)
		{
			//время первичного запуска
			time = 100;
		}
		setTimeout( function(){ 
			$('*[attr-id='+id+']').html(parseInt($('*[attr-id='+id+']').text())+1);
		}, time)
		
		i++;
		time = time+speed ;
	}
}

//основная функция
function DigAnimate()
{
	let service=$('#counters span span');
	$(service).each(function(index) {
		i = 0;
		id = $(service[index]).attr('attr-id');
		count = $(service[index]).attr('attr-end');
		counterDig(id, i, count);
	});
}


//запустить при скролле
run = 0;
$(window).scroll(function() {
	parGo = $('.scrollgo');
   if ($(this).scrollTop() > (parGo.offset().top+parGo.outerHeight()-$(window).height())){
   if(run == 0)
	{
		run = 1;
		DigAnimate();
	}
       
   }
});
/*===============/Counters==============*/


/*================WOW - start animation=================*/
const wow = new WOW({
  boxClass: 'wow', /* класс, который необходим для работы wow.js */
  animateClass: 'animate__animated', /* класс, который будет автоматически добавляться анимируемым элементам при прокрутке страницы */
  offset: 70, /* по-умолчанию установлено значение 0, то есть как только при прокрутке страницы, элемент достигает низа окна браузера проигрываться анимация, в данном случае анимация начнется на 30px выше от низа окна браузера */
  mobile: true, /* если true, то на мобильных тоже будет анимация, если false, то на мобильных анимация отключается */
  live: true /* если true, то анимация будет работать даже на динамически добавляемых элементах, если false, то только на тех элементах, которые были на странице при ее загрузке */
})
wow.init(); /* Инициализация плагина с установленными выше свойствами */
/*================WOW - start animation=================*/
function ibg(){
	let ibg=document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
}
ibg();

$(document).ready(function(){
	$('.slider').slick({
		arrows: false,
		dots: true,
		adaptiveHeight: true,
		speed: 700,
		autoplay: true,
		autoplaySpeed: 3000
	});
});

var burger = document.querySelector('.burger');

burger.onclick = function() {
  let burgerMenu = document.querySelector(".burger__menu");
  let body = document.querySelector("body");
  burgerMenu.classList.toggle("burger__menu-open");
  
  burger.classList.toggle("burger__open");

  body.classList.toggle("lock");
}
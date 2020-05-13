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


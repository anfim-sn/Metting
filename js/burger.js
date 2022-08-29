$(document).ready(function () {
	$('.menu-burger__header').click(function () {
		$('.header__nav-nav').addClass('open-menu').removeClass('close-menu');
		$('body').addClass('fixed-page').removeClass('unfixed-page');
		$('.menu__close').addClass('appear-close').removeClass('hide-close');
	});
	$('.menu__close').click(function () {
		$('.header__nav-nav').addClass('close-menu').removeClass('open-menu');
		$('body').addClass('unfixed-page').removeClass('fixed-page');
		$('.menu__close').addClass('hide-close').removeClass('appear-close');
	});
});


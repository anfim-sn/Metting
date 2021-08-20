$(document).ready(function () {
	let counter1 = "close"
	let counter2 = "close"
	let counter3 = "close"
	$('.item-readmore1').click(function () {
	if (counter1 == "close"){
			counter1 = "open"
			$('.item-subtitle1').addClass('item__subtitle-more')
		} else {
			counter1 = "close"
			$('.item-subtitle1').removeClass('item__subtitle-more')
		}
	})
	$('.item-readmore2').click(function () {
	if (counter2 == "close"){
			counter2 = "open"
			$('.item-subtitle2').addClass('item__subtitle-more')
		} else {
			counter2 = "close"
			$('.item-subtitle2').removeClass('item__subtitle-more')
		}
	})
	$('.item-readmore3').click(function () {
	if (counter3 == "close"){
			counter3 = "open"
			$('.item-subtitle3').addClass('item__subtitle-more')
		} else {
			counter3 = "close"
			$('.item-subtitle3').removeClass('item__subtitle-more')
		}
	})


})
$('ul li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(500);
});
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
})

$('.owl-carousel').owlCarousel({
	loop:true,
	margin: 20,
	navText: [ '<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>' ],
	responsiveClass:true,
	responsive: {
		0: {
			items: 1,
			nav: false
		},
		480: {
			items: 2,
			nav: false
		},
		768: {
			items: 3,
			nav: false
		},
		992: {
			items: 4,
			nav: true
		}
	}
});

document.getElementById('copyright').innerHTML = "&copy; " + new Date().getFullYear() + " Quỹ Chống hàng giả";
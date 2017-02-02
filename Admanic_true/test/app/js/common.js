$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};
// Disable scroll zooming and bind back the click event
var onMapMouseleaveHandler = function (event) {
	var that = $(this);
	that.on('click', onMapClickHandler);
	that.off('mouseleave', onMapMouseleaveHandler);
	that.find('iframe').css("pointer-events", "none");
}
var onMapClickHandler = function (event) {
	var that = $(this);
    // Disable the click handler until the user leaves the map area
    that.off('click', onMapClickHandler);
    // Enable scrolling zoom
    that.find('iframe').css("pointer-events", "auto");
    // Handle the mouse leave event
    that.on('mouseleave', onMapMouseleaveHandler);
}
  // Enable map zooming with mouse scroll when the user clicks the map
  $('section.maps_location').on('click', onMapClickHandler);

// fixed header

$(window).scroll(function(){

	if( $('body').scrollTop() > 100 ){
		$('header').addClass('navbar-fixed-top');
	}else{
		$('header').removeClass('navbar-fixed-top');
	}

});

/*

$(window).scroll(function(){

	if( $('body').scrollTop() > 200 ){
		$('.top_mnu').addClass('navbar-none-top');
		$('.top_mnu').addClass('fixed_wrap');
		$('.sandwich').addClass('navbar-block-top');
	}else{
		$('.top_mnu').removeClass('navbar-block-top');
		$('.top_mnu').removeClass('fixed_wrap');
		$('.sandwich').removeClass('navbar-block-top');
	}

});

$(".top_mnu ul a").click(function() {
	$(".top_mnu").fadeOut(600);
	$(".sandwich").toggleClass("active");
	$(".top_text").css("opacity", "1");
}).append("<span>");

$(".toggle_mnu").click(function() {
	if ($(".top_mnu").is(":visible")) {
		$(".top_text").css("opacity", "1");
		$(".top_mnu").fadeOut(600);
		$(".top_mnu li a").removeClass("fadeInUp animated");
	} else {
		$(".top_text").css("opacity", ".1");
		$(".top_mnu").fadeIn(600);
		$(".top_mnu li a").addClass("fadeInUp animated");
	};
});
*/

if (screen.width < '800') {
	$('table tr > td').attr( 'rowspan', '1' );
};

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {
	

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
$(".slider").owlCarousel({
	autoPlay : 4000,
	navigation : false,
	pagination : true,
	paginationNumbers: false,
	slideSpeed : 300,
	paginationSpeed : 400,
	singleItem : true,
	items:1,		
	responsive: true,
	paginationText:	['<span class="prev_button_slider_second"></span>','<span class="next_button_slider_second"></span>']
});
$(document).ready(function(){
	$('.map_overlay').click(function() {
		$(this).remove();
	});
});
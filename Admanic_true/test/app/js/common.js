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
/*
$(window).scroll(function(){

	if( $('body').scrollTop() > 100 ){
		$('header').addClass('navbar-fixed-top');
	}else{
		$('header').removeClass('navbar-fixed-top');
	}

});
*/
	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

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
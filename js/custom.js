
(function ($) {

	new WOW().init();

	jQuery(window).load(function() { 
		jQuery("#preloader").delay(100).fadeOut("slow");
		jQuery("#load").delay(100).fadeOut("slow");
	});


	//jQuery to collapse the navbar on scroll
	$(window).scroll(function() {
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
            $(".navbar-brand svg").attr("visibility","visible");
            $(".socialfloat").css("visibility","visible");
            $(".orderfloat").css("visibility","visible");
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
            $(".navbar-brand svg").attr("visibility","hidden");
            $(".socialfloat").css("visibility","hidden");
            $(".orderfloat").css("visibility","hidden");
		}
	});

	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$('li a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
		$('.page-scroll a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	});
    
    $(document).ready(function(){
        $('.foldscroll').scroll();
        $(".foldscroll").animate({
          scrollTop: 1400
        }, 90000);
    });

})(jQuery);

$(document).ready( function() {
    setInterval("change_image()",5000);
});

var i=0;
function change_image()
{
    
    
    if(i==4)
    {
        i=0;
    }
    
    if( i==1 | i==2){
        $('#mainslogan').css("color","#50B849");
        $('#secondslogan').css("color","#50B849");
    }
    else{
        $('#mainslogan').css("color","#ffe");
         $('#secondslogan').css("color","#ffe");
    }

    var img="img/bg"+i+'.jpg';
    $("#intro").css("background-image", "url('" + img + "')");
    i++;
    
}

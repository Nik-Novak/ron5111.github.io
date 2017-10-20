
(function ($) {

	new WOW().init();

	jQuery(window).load(function() { 
		jQuery("#preloader").delay(100).fadeOut("slow");
		jQuery("#load").delay(100).fadeOut("slow");
        $("#intro").css("background-image", "url('img/bg1.jpg')");
        $("#intro").css("background-image", "url('img/bg2.jpg')");
        $("#intro").css("background-image", "url('img/bg3.jpg')");
        $("#intro").css("background-image", "url('img/bg0.jpg')");
	});


	//jQuery to collapse the navbar on scroll
	$(window).scroll(function() {
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
            $(".socialfloat").css("visibility","visible");
            $(".orderfloat").css("visibility","visible");
            contextcolor(0);
            topofpage=false;
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
            $(".socialfloat").css("visibility","hidden");
            $(".orderfloat").css("visibility","hidden");
            contextcolor(i);
            topofpage=true;
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
    
//    var ls=350;
//   $(".foldscroll").on('scroll',function(){
//       if(($(this).scrollTop() - ls)>=400){
//            var tests = $('.art');
//            tests.first().insertAfter(tests.last());
//            ls=$(this).scrollTop()-50;
//           
//       }
//   });
//    var t=4000;
//    setInterval(function(){
//        $('.foldscroll').scroll();
//        $(".foldscroll").animate({
//          scrollTop: t
//        }, 50000, 'linear', function(){
//             
//        }); 
//    },5000);
    $(document).ready(function(){
        $('.foldscroll').scroll();
        $(".foldscroll").animate({
          scrollTop: 1400
        }, 90000, 'linear', function(){
             
        }); 
        
        //Remove first article and append to bottom
        //dpcument.child[0] = child[N-1]
        
//        $(".foldscroll").animate({
//          scrollTop: 1400
//        }, 90000);
        
        $('#foldscroll').on('mousewheel', function(){
            $('#foldscroll').stop();
    //code that will only fire on manual scroll input
        });
//        $(".foldscroll").on('scroll',function(){
//            $(this).stop();
//        });
    
    },$);

})(jQuery);

$(document).ready( function() {
    change_image();
    setInterval("change_image()",5000);
});

var topofpage=true;
var i=-1;
function change_image()
{
    i++;
    
    if(i==5)
    {
        i=0;
    }
    
    if(topofpage){
        contextcolor(i);
        }
    else{
        
    }
//    if( i==1 | i==2 | i==3){
//        $('#mainslogan').css("color","#50B849");
//        $('#secondslogan').css("color","#50B849");
//        $('#intro .page-scroll a').css("color","#50B849");
//        $('#intro .page-scroll a').css("border-color","#50B849");
//    }
//    else if(i==0 | i==4){
//        $('#mainslogan').css("color","#ffe");
//         $('#secondslogan').css("color","#ffe");
//        $('#intro .page-scroll a').css("color","#ffe");
//        $('#intro .page-scroll a').css("border-color","#ffe");
//
//    }

    var img="img/bg"+i+'.jpg';
    $("#intro").css("background-image", "url('" + img + "')");
}

//.navbar-custom .nav li a:hover, .navbar-custom .nav li a:focus, .navbar-custom .nav li.active {
//    outline: 0;
//    background-color: rgba(255,255,255,.2);
//}

function contextcolor(i){
    $('.navbar-custom').addClass("navdark");
    $('.navbar-custom').removeClass("navdark");
    
    $('.navbarlink').css("color",'#fff');
    $('#mainslogan').css("-webkit-text-stroke","2px black");
    //$('.slogan').removeClass("slogan-contrast");
    switch(i){
        case 1:
            $('#mainslogan').css("color","#ffe");
            
            $('#secondslogan').css("color","#ffe");
            $('#intro .page-scroll a').css("color","#ffe");
            $('#intro .page-scroll a').css("border-color","#ffe");
            $('.navbar-custom').addClass("navdark");
            //$('.slogan').addClass("slogan-contrast");
            break;
        case 2:
            $('#mainslogan').css("color","#50B849");
            $('#secondslogan').css("color","#50B849");
            $('#followslogan').css("color", "#50B849");
            $('#intro .page-scroll a').css("color","#50B849");
            $('#intro .page-scroll a').css("border-color","#50B849");
            $('.navbar-custom').addClass("navdark");
            break;
        case 3: 
            $('#mainslogan').css("color","#50B849");
            $('#secondslogan').css("color","#50B849");
            $('#intro .page-scroll a').css("color","#50B849");
            $('#intro .page-scroll a').css("border-color","#50B849");
            $('#followslogan').css("color", "#50B849");
            $('.navbar-custom').addClass("navdark");
            break;
        case 4:
            $('.navbarlink').css("color",'#333');
        default:
        $('#mainslogan').css("color","#ffe");
         $('#secondslogan').css("color","#ffe");
        $('#intro .page-scroll a').css("color","#ffe");
        $('#intro .page-scroll a').css("border-color","#ffe");
            $('#followslogan').css("color", "white");
            $('.navbar-custom').removeClass("navdark");
            
    }
}



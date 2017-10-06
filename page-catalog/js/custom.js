////$('#oils').css("visibility","hidden");
//function test(id,$) {
//    alert('#'+id);
//    document.getElementById('#oils').innerHTML="null";
//    
//}(jQuery);

//Assign blue Active bar to selected category and collapse other categories

(function ($) {
    
    $('.btn-default').click(function(event){
        var name = event.target.parentNode.parentNode.querySelector('a').innerHTML;
        var brand = event.target.parentNode.parentNode.querySelector('h2').innerHTML;
        var specs = event.target.parentNode.parentNode.querySelector('.price').innerHTML;
        alert(name + ", " + brand + ", " + specs);
        
        var table = document.getElementById("inquiry");
        var row = table.insertRow(-1);
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        cell0.innerHTML = "";
        cell1.innerHTML = name;
        cell2.innerHTML = brand;
        cell3.innerHTML = specs;
    });
    
    $('.cat').click(function() {
   // $('.active').toggleClass('collapse');
    $('.active').removeClass('active');
    $(this).addClass('active');
        

    var $myGroup = $('#category-wrapper');
$myGroup.on('show.bs.collapse','.collapse', function() {
    $myGroup.find('.collapse.in').collapse('hide');
});
});
})(jQuery);
//end blue active and collapse

$('.navbar-nav li a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});


function test(){
    alert();
    
}

function inquireAbout(){
    alert();
}

var filecounts = {
    coconut_milk: 1,
    coconut_oil: 2,
    honey_pyramid: 5,
    honey_californiagourmet: 1,
    honey_attiki: 3,
    honey_marcopolo: 4
}


$(document).ready( function() {
    $(".cat li a").on("click", function() {
        
        var fc = filecounts[$(this).data('val')];
        var fp = $(this).data('val').replace('_','/');
        
        $('#generate-here').html("");
        for( i=0; i<fc; i++){
//            alert('products/' + fp + '/p' + (i+1) + '.html');
            $('#generate-here').append($('<div>').load('products/' + fp + '/p' + (i+1) + '.html'));
        }
        
        var fpnav = fp.split('/');
        $('#nav-mastercat').html(fpnav[0]);
        $('#nav-cat').html(fpnav[1]);
//        $('#generate-here').html("");
//        $('#generate-here').append($('<div>').load("products/coconut/milk/p1.html"));
//        $('#generate-here').append($('<div>').load("products/coconut/oil/p1.html"));
//        $('#generate-here').append($('<div>').load("products/coconut/oil/p2.html"));
        
        
        //$("#generate-here").load("products/coconut/milk/p1.html");
        //$("#generate-here").load("products/coconut/oil/p1.html");
        //$("#generate-here").load("products/coconut/oil/p2.html");
        
        return false;
    });
    
    $(".mastercat").on("click", function() {
        var fp = $(this).data('target').substr(1);
        $('#catinfo').html("");
        $('#catinfo').load('products/' + fp + '/desc.html');
        event.preventDefault();
    }); 
});
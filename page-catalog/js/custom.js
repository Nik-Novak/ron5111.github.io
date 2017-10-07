////$('#oils').css("visibility","hidden");
//function test(id,$) {
//    alert('#'+id);
//    document.getElementById('#oils').innerHTML="null";
//    
//}(jQuery);

//Assign blue Active bar to selected category and collapse other categories

(function ($) {
    
    $('#generate-here').on('click','.btn-default',function(event){
        $('.inquirybox').css('display','inline');
        var parent = event.target.parentNode.parentNode;
        var img = $(parent).parent().children().first().clone();//parent.parentNode.firstElementChild.clone();
        $(img).removeClass();
        $(img).find('*').removeAttr('class');
        $(img).removeAttr('style');
        $(img).find('*').removeAttr('style');
        $(img).addClass('table-img');
        var name = parent.querySelector('a').innerHTML;
        var brand = parent.querySelector('h2').innerHTML;
        var specs = parent.querySelector('.price').innerHTML;
        var table = document.getElementById("inquiry");
        var row = table.insertRow(-1);
        var cell0 = row.insertCell(0);
        $(cell0).addClass('table-first');
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
//        alert($(img)[0].outerHTML);
        cell0.innerHTML = $(img)[0].outerHTML;
        cell1.innerHTML = name;
        cell2.innerHTML = brand;
        cell3.innerHTML = specs;
        
        var categorypath = $('#nav-mastercat').html() + " --> " + $('#nav-cat').html();
        var quote = "- Category: " + categorypath + '\n' + 
                    "Name: " + name + '\n' + 
                    "Brand: " + brand + '\n' +
                    "Specs: " + specs + '\n\n';
       // alert(quote);
        $('#inquirearea').val(function(i, text) {
    return text + quote;
});
    });
    
    $('.cat').click(function() {
   // $('.active').toggleClass('collapse');
    $('#category-wrapper .active').removeClass('active');
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
//      
        
        return false;
    });
    
    $(".mastercat").on("click", function() {
        var fp = $(this).data('target').substr(1);
        $('#catinfo').html("");
        $('#catinfo').load('products/' + fp + '/desc.html');
        event.preventDefault();
    }); 
});
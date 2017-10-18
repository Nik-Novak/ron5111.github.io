////$('#oils').css("visibility","hidden");
//function test(id,$) {
//    alert('#'+id);
//    document.getElementById('#oils').innerHTML="null";
//    
//}(jQuery);

//Assign blue Active bar to selected category and collapse other categories
var firstInquire = true;

(function ($) {
    
    $('#generate-here').on('click','.btn-template-main',function(event){
        alert("We're Sorry, but we do not have a shopping cart feature yet. Please click 'Inquire About', and then contact us using the form below.");
    });
    
    $('.inquirybox').on('click','.btn-template-main',function(event){
        var table = $('#inquiry').children().first();
        table.html("");
        $('#inquirearea').val("");
        $('.inquirybox').css('display', 'none');
        return false;
    });
    
    $('html,body').on('mousewheel', function(){
        $('html,body').stop();
    });
    
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
        $('#animspace').html($(img).children().first().children()[0].outerHTML);
        var imganim = $('#animspace img');
        imganim.css("left",event.pageX);
        imganim.css("top",event.pageY);
        var contactPos = $('#anim-target').offset();
        var secondAnimX = contactPos.left;
        var secondAnimY = contactPos.top-150;
       
            
            $(imganim).animate({
                left: secondAnimX,
                top: secondAnimY,
                opacity: '0'
            },5100);
        if(firstInquire)
            $('html,body').animate({
                scrollTop: $("#anim-target").offset().top-$(window).height()},
                5000);
        firstInquire=false;
        
        return false;
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


var filecounts = {
    chocolate_belgian: 6,
    chocolate_greek: 4,
    chocolate_kindbar: 16,
    chocolate_kinder: 18,
    chocolate_lindtt: 20,
    chocolate_milka: 6,
    chocolate_nestle: 12,
    chocolate_perugina: 8,
    chocolate_rittersport: 24,
    chocolate_toblerone: 3,
    coconut_milk: 1,
    coconut_oil: 2,
    honey_pyramid: 5,
    honey_californiagourmet: 1,
    honey_attiki: 3,
    honey_marcopolo: 4,
    juice_aloevera: 11,
    juice_coconut: 5,
    juice_fresh: 18,
    juice_organic: 9,
    oliveoil_california: 5,
    oliveoil_greek: 4,
    oliveoil_italian: 6,
    oliveoil_mediterranean: 1,
    oliveoil_spanish: 1,
    panettone_panettone: 1,
    pasta_dececco: 26,
    pasta_organic: 12,
    tea_decaffeinated: 6,
    tea_organic: 6,
    tea_twinings: 29,
    vinegar_balsamic: 2,
    vinegar_wine: 2,
    zergut_produce: 8,
    zergut_sauce: 11,
    zergut_syrup: 6
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
        $('#nav-mastercat').html(fpnav[0]); //coconut
        $('#nav-cat').html(fpnav[1]); //milk
//      
        
        
        
        $('#catinfo').html("");
        $('#catinfo').load('products/' + fpnav[0] + '/desc.html');
        
        $('html,body').animate({
                scrollTop: $("#generate-here").offset().top},
                1000);
        
        event.preventDefault();
        return false;
    });
    
    $(".mastercat").on("click", function() {
        event.preventDefault();  
    });
    
//    $(".mastercat").on("click", function() {
//        var fp = $(this).data('target').substr(1);
//        $('#catinfo').html("");
//        $('#catinfo').load('products/' + fp + '/desc.html');
//        event.preventDefault();
//    }); 
});
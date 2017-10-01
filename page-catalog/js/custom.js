////$('#oils').css("visibility","hidden");
//function test(id,$) {
//    alert('#'+id);
//    document.getElementById('#oils').innerHTML="null";
//    
//}(jQuery);

//Assign blue Active bar to selected category and collapse other categories
var $last = null;
(function ($) {
    $('.cat').click(function() {
   // $('.active').toggleClass('collapse');
    $('.active').removeClass('active');
    $(this).addClass('active');
        
    var skipassign = false;
    if(this==$last){
        $(this).removeClass('active');
        $last=null;
        skipassign=true;
    }
        
    if(!skipassign)
        $last = this;
    var $myGroup = $('#category-wrapper');
$myGroup.on('show.bs.collapse','.collapse', function() {
    $myGroup.find('.collapse.in').collapse('hide');
});
});
})(jQuery);
//end blue active and collapse

//Dynamic HTML insert
function test(){
    
    
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
//        $('#generate-here').html("");
//        $('#generate-here').append($('<div>').load("products/coconut/milk/p1.html"));
//        $('#generate-here').append($('<div>').load("products/coconut/oil/p1.html"));
//        $('#generate-here').append($('<div>').load("products/coconut/oil/p2.html"));
        
        
        //$("#generate-here").load("products/coconut/milk/p1.html");
        //$("#generate-here").load("products/coconut/oil/p1.html");
        //$("#generate-here").load("products/coconut/oil/p2.html");
        
        
    });
    
    $(".mastercat").on("click", function() {
        var fp = $(this).data('target').substr(1);
        $('#catinfo').html("");
        $('#catinfo').load('products/' + fp + '/desc.html');
    }); 
});


////$('#oils').css("visibility","hidden");
//function test(id,$) {
//    alert('#'+id);
//    document.getElementById('#oils').innerHTML="null";
//    
//}(jQuery);

var $test = null;
(function ($) {
    $('.cat').click(function() {
   // $('.active').toggleClass('collapse');
    $('.active').removeClass('active');
    $(this).addClass('active');
        
    var skipassign = false;
    if(this==$test){
        $(this).removeClass('active');
        $test=null;
        skipassign=true;
    }
        
    if(!skipassign)
        $test = this;
    var $myGroup = $('#category-wrapper');
$myGroup.on('show.bs.collapse','.collapse', function() {
    $myGroup.find('.collapse.in').collapse('hide');
});
    
});
})(jQuery);
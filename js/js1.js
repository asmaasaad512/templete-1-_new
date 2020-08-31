
$(".up").click(function(){
    $("html").animate({scrollTop:0},500)
});
$(window).scroll(function(){
   
    if($(this).scrollTop() >=300){
    $(".up").fadeIn();
    }
    else{
        $(".up").fadeOut(); 
    }
});





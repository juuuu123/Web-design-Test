$(function(){
    //menu
    $(".mainnav li").hover(function(){
        $(this).find(".subnav").stop().slideDown(500);
    },function(){
        $(this).find(".subnav").stop().slideUp(500);
    });
    //main slide
    var num=1;
    $("main li").first().fadeIn(0);
    setInterval(function(){
        if(num<3){
            num=num+1;
            $("main li").fadeOut(500);
            $("main li").eq(num-1).fadeIn(500);
        }else{
            num=1;
            $("main li").fadeOut(500);
            $("main li").first().fadeIn(500);
        }
    },3000);
});
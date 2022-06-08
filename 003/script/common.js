$(document).ready(function(){
    //menu
    $(".mainnav>li").hover(function(){
        $(this).find(".subnav").stop().slideDown(500);
    },function(){
        $(this).find(".subnav").stop().slideUp(500);
    });

    //slide
    $("main li").first().fadeIn(0);
    var num=1;
    setInterval(function(){
        if(num<3){
            num++;
            $("main li").fadeOut(500);
            $("main li").eq(num-1).fadeIn(500);
        }else{
            num=1;
            $("main li").fadeOut(500);
            $("main li").first().fadeIn(500);
        }
    },3000);

    //tab
    $(".tab>li>a").click(function(){
        $(this).parent().addClass("active").siblings().removeClass("active");
            return false;
    });

    //popup
    $(".notice li").first().click(function(){
        $(".pop").show();
    });
    $(".close").click(function(){
        $(".pop").hide();
    });
});
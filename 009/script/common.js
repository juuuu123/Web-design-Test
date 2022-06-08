$(document).ready(function(){
    //menu
    $(".mainnav>li").hover(function(){
        $(this).find(".subnav").stop().slideDown(200);
    },function(){
        $(this).find(".subnav").stop().slideUp(200);
    });

    //slide
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

    //tab
    $("article>ul>li>a").click(function(){
        $(this).parent().addClass("active").siblings().removeClass("active");
            return false;
    });

    //pop
    $("article>ul>li:first-child").click(function(){
        $(".pop").show();
    });
    $(".close").click(function(){
        $(".pop").hide();
    });
});
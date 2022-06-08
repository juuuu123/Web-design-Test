$(document).ready(function(){
    //menu
    $(".mainmenu>li").hover(function(){
        $(this).find(".submenu").stop().slideDown(500);
        },function(){
        $(this).find(".submenu").stop().slideUp(500);
    });
    //slide
    var num=0;
    var pos=0;

    setInterval(function(){
        num=num+1;
        pos=num*-1*800+"px";
        $("main>ul").animate({left:pos},500);
            if(num==3){
                num=0;
                pos=0;
                $("main>ul").animate({left:pos},0);
            }
    },3000);
    //pop
    $(".notice>li:first-child>a").click(function(){
        $(".popup").show();
    });
    $(".close").click(function(){
        $(".popup").hide();
    });
});
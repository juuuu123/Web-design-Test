$(document).ready(function(){
//menu
    $(".mainnav").hover(function(){
        $(".subnav, .subnavbg").stop().slideDown(500);
    },function(){
        $(".subnav, .subnavbg").stop().slideUp(500);
    });
//slide
    var num=0;
    var pos=0;

    setInterval(function(){
        num=num+1;
        pos=num*-1*1200+"px";
        $("main>ul").animate({left:pos},500,function(){
            if(num==3){
                num=0;
                pos=0;
                $("main>ul").animate({left:pos},0);
            }
        });
    },3000);
//pop
    $(".notice>li:first-child>a").click(function(){
        $(".popwrap").show();
    });
    $(".close").click(function(){
        $(".popwrap").hide();
    });
});
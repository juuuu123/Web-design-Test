$(document).ready(function(){
    //menu
    $(".mainnav").hover(function(){
        $(".subnav, .subbg").stop().slideDown(500);
    },function(){
        $(".subnav, .subbg").stop().slideUp(500);
    });
    //slide
    var num=0;
    var pos=0;

    setInterval(function(){
        num=num+1;
        pos=num*-1*300+"px";
        $("main ul").animate({top:pos},500,function(){
            if(num==3){
                num=0;
                pos=0;
                $("main ul").animate({top:pos},0);
            }
        });
    },3000);

    //popup
    $(".notice li").first().click(function(){
        $(".popwrap").show();
    });
    $(".close").click(function(){
        $(".popwrap").hide();
    });
});
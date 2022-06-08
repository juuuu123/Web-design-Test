$(document).ready(function(){
    //menu
    $(".mainnav>li").hover(function(){
        $(".subnav, .subbg").stop().slideDown(500);
    },function(){
        $(".subnav, .subbg").stop().slideUp(500);
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

    //popup
    $(".notice li").first().click(function(){
        $(".pop").show();
    });
    $(".close").first().click(function(){
        $(".pop").hide();
    });
});